import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Feather } from '@expo/vector-icons'

import { styles } from "../../styles";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";

type RouteDetailParams ={
    FinishOrder:{
        number: number | string;
        order_id: string;
    }
}

type FinishOrderRouteProp = RouteProp<RouteDetailParams, 'FinishOrder'>


export default function FinishOrder() {
    const route = useRoute<FinishOrderRouteProp>();

    async function handleFinish() {
        alert('clicoi')
    }

    return (
        <View style={[styles.container, selfStyle.container]}>
            <Text style={[styles.subtitle, selfStyle.subtitle]}>Você deseja enviar esse pedido?</Text>
            <View style={selfStyle.content}>
                <Image
                    style={selfStyle.table}
                    source={require('../../assets/restaurant_2.png')}
                />
                <Text style={[styles.title, selfStyle.title]}>Mesa - {route.params?.number}</Text>
            </View>
            <TouchableOpacity style={[styles.button, selfStyle.button]} onPress={handleFinish}>
                <Text style={styles.buttonText}>Enviar Pedido</Text>
                <Feather style={selfStyle.icon} name="shopping-cart" size={20} color="#1d1d2e" />
            </TouchableOpacity>
        </View>
    )
}

const selfStyle = StyleSheet.create({
    container: {
        paddingVertical: '5%',
        justifyContent: 'space-between'
    },
    subtitle: {
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 22
    },
    title: {
        marginBottom: 20
    },
    button: {
        flexDirection: 'row'
    },
    icon: {
        marginLeft: 10
    },
    content:{
        alignItems: 'center',

    },
    table: {
        width: 200, 
        height: 200
    }
})