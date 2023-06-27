import React, { useState, useEffect } from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    TextInput, 
    Modal,
    FlatList 
} from 'react-native'
import { Feather, AntDesign } from '@expo/vector-icons'
import { styles } from '../../styles'
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native'
import { api } from '../../services/api'
import { ModalPicker } from '../../components/ModalPicker'
import { ListItem } from '../../components/ListItem'

type RouteDetailsParams = {
    Order: {
        number: string | number;
        order_id: string;
    }
}

export type CategoryProps = {
    id: string;
    name: string;
}

type ProductProps = {
    id: string;
    name: string;
}

type ItemProps = {
    id: string;
    product_id: string;
    name: string;
    amount: string | number;
}

type OrderRouteProps = RouteProp<RouteDetailsParams, 'Order'>;

export default function Order() {
    const route = useRoute<OrderRouteProps>();
    const navigation = useNavigation();

    const [category, setCategory] = useState<CategoryProps[] | []>([]);
    const [categorySelected, setCategorySelected] = useState<CategoryProps | undefined>();
    const [modalCategoryVisible, setModalCategoryVisible] = useState(false);

    const [products, setProducts] = useState<ProductProps[] | []>([]);
    const [productSelected, setProductSelected] = useState<ProductProps | undefined>();
    const [modalProductVisible, setModalProductVisible] = useState(false);

    const [amount, setAmount] = useState('1');
    const [items, setItems] = useState<ItemProps[]>([]);

    useEffect(() => {
        async function loadInfo() {
            const response = await api.get('/category');
            setCategory(response.data)
            setCategorySelected(response.data[0])
        }
        loadInfo();
    }, [])



    useEffect(() => {
        async function loadProducts() {
            const response = await api.get('/category/product', {
                params: {
                    category_id: categorySelected?.id
                }
            })
            setProducts(response.data);
            setProductSelected(response.data[0])
        }
        loadProducts();
    }, [categorySelected])



    async function handleCloseOrder() {
        try {
            await api.delete('/order', {
                params: {
                    order_id: route.params?.order_id
                }
            })
            navigation.goBack();
        } catch (error) {
            console.log(error);
        }
    }


    function handleChangeCategory(item: CategoryProps) {
        setCategorySelected(item);
    }

    function handleChangeProduct(item: ProductProps) {
        setProductSelected(item);
    }

    async function handleAdd() {
        console.log("Clicou");
        
    }

    return (
        <View style={[styles.container, selfStyle.container]}>
            <View style={selfStyle.main}>
                <View style={selfStyle.header}>
                    <Text style={styles.title}>Mesa - {route.params.number}</Text>
                    <TouchableOpacity style={selfStyle.button} onPress={handleCloseOrder}>
                        <Feather size={28} name='trash-2' color='#fff' />
                    </TouchableOpacity>
                </View>

                {category.length !== 0 && (
                    <TouchableOpacity style={selfStyle.input} onPress={() => setModalCategoryVisible(true)}>
                        <Text style={styles.text}>
                            {categorySelected?.name}
                        </Text>
                        <AntDesign name="down" size={20} color="#fff" />
                    </TouchableOpacity>
                )}


                {products.length !== 0 && (
                    <TouchableOpacity style={selfStyle.input} onPress={() => setModalProductVisible(true)}>
                        <Text style={styles.text}>
                            {productSelected?.name}
                        </Text>
                        <AntDesign name="down" size={20} color="#fff" />
                    </TouchableOpacity>
                )}


                <View style={selfStyle.rowContainer}>
                    <Text style={styles.subtitle}>Quantidade</Text>
                    <TextInput
                        style={[selfStyle.input, { width: '50%', textAlign: 'center' }]}
                        placeholderTextColor='#f0f0f0'
                        keyboardType='numeric'
                        value={amount}
                        onChangeText={setAmount}
                    />
                </View>
            </View>
            <View style={selfStyle.actions}>

                <TouchableOpacity style={selfStyle.buttonAdd} onPress={handleAdd}>
                    <Text style={[styles.buttonText, { fontSize: 30 }]}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, { width: '70%', opacity: items.length === 0 ? .3 : 1 }]}
                    disabled={items.length === 0}
                >
                    <Text style={styles.buttonText}>Avançar</Text>
                </TouchableOpacity>

            </View>

            <FlatList 
                showsVerticalScrollIndicator={false}
                style={{flex: 1, marginTop: 24}}
                data={items}
                keyExtractor={(item)=> item.id}
                renderItem={({item})=> <ListItem data={item}/>}
            />

            <Modal
                transparent={true}
                visible={modalCategoryVisible}
                animationType='slide'
            >
                <ModalPicker
                    handleCloseModal={() => setModalCategoryVisible(false)}
                    options={category}
                    selectedItem={handleChangeCategory}
                />
            </Modal>

            <Modal
                transparent={true}
                visible={modalProductVisible}
                animationType='slide'
            >
                <ModalPicker
                    handleCloseModal={() => setModalProductVisible(false)}
                    options={products}
                    selectedItem={handleChangeProduct}
                />
            </Modal>
        </View>
    )
}

const selfStyle = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    container: {
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingVertical: '5%',
        paddingEnd: '4%',
        paddingStart: '4%',
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 14,
        alignItems: 'center',
        marginTop: 24,
    },
    main: {
        width: '100%'
    },
    footer: {
        width: '100%'
    },
    button: {
        backgroundColor: '#ed1b24',
        paddingVertical: 7,
        paddingHorizontal: 7,
        borderRadius: 4
    },
    input: {
        backgroundColor: '#101026',
        borderRadius: 4,
        height: 60,
        marginBottom: 14,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 8,
        color: '#f0f0f0',
        fontSize: 24
    },
    actions: {
        flexDirection: 'row',
        width: '100%',
        gap: 10,
        justifyContent: 'space-between',
    },
    buttonAdd: {
        backgroundColor: '#3fd1dd',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: '25%',

    }
})