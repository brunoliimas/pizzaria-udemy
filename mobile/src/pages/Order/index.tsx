import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { styles } from '../../styles'
import { useRoute, RouteProp } from '@react-navigation/native'


type RouteDetailsParams = {
    Order: {
        number: string | number;
        order_id: string;
    }
}
type OrderRouteProps = RouteProp<RouteDetailsParams, 'Order'>;

export default function Order() {
    const route = useRoute<OrderRouteProps>();
    return (
        <View style={[styles.container, selfStyle.container]}>
            <View style={selfStyle.main}>
                <View style={selfStyle.header}>
                    <Text style={styles.title}>Mesa - {route.params.number}</Text>
                    <TouchableOpacity style={selfStyle.button}>
                        <Feather size={28} name='trash-2' color='#fff' />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={selfStyle.input}>
                    <Text style={styles.text}>Pizza</Text>
                </TouchableOpacity>
                <TouchableOpacity style={selfStyle.input}>
                    <Text style={styles.text}>Pizza de calabresa</Text>
                </TouchableOpacity>
                <View style={selfStyle.rowContainer}>
                    <Text style={styles.subtitle}>Quantidade</Text>
                    <TextInput
                        style={[selfStyle.input, { width: '50%', textAlign: 'center' }]}
                        placeholderTextColor='#f0f0f0'
                        keyboardType='numeric'
                        value='2'
                    />
                </View>
            </View>
            <View style={selfStyle.actions}>
                <TouchableOpacity style={selfStyle.buttonAdd}>
                    <Text style={[styles.buttonText, {fontSize: 30}]}>+</Text>
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