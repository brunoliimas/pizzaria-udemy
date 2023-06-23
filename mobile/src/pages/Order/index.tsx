import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { styles } from '../../styles'
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native'
import { api } from '../../services/api'


type RouteDetailsParams = {
    Order: {
        number: string | number;
        order_id: string;
    }
}

type CategoryProps = {
    id: string;
    name: string;
}

type OrderRouteProps = RouteProp<RouteDetailsParams, 'Order'>;

export default function Order() {
    const route = useRoute<OrderRouteProps>();
    const navigation = useNavigation();

    const [category, setCategory] = useState<CategoryProps[] | []>([]);
    const [categorySelected, setCategorySelected] = useState<CategoryProps>();

    const [amount, setAmount] = useState('1')

    useEffect(() => {
        async function loadInfo() {
            const response = await api.get('/category');
            setCategory(response.data)
            setCategorySelected(response.data[0])
        }

        loadInfo();

    }, [])

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
                    <TouchableOpacity style={selfStyle.input}>
                        <Text style={styles.text}>
                            {categorySelected?.name}
                        </Text>
                    </TouchableOpacity>
                )}


                <TouchableOpacity style={selfStyle.input}>
                    <Text style={styles.text}>Pizza de calabresa</Text>
                </TouchableOpacity>
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
                <TouchableOpacity style={selfStyle.buttonAdd}>
                    <Text style={[styles.buttonText, { fontSize: 30 }]}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { width: '70%' }]}>
                    <Text style={styles.buttonText}>Avançar</Text>
                </TouchableOpacity>
            </View>
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
        justifyContent: 'center',
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