import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'

interface ItemProps {
    data: {
        id: string;
        product_id: string;
        name: string;
        amount: string | number;
    }
}

export function ListItem({ data }: ItemProps) {
    return (
        <View style={selfStyle.container}>
            <Text style={selfStyle.item}>
                {data.amount} - {data.name}
            </Text>
            <TouchableOpacity>
                <Feather name="trash-2" color="#ff3f4b" size={25} />
            </TouchableOpacity>
        </View>
    )
}

const selfStyle = StyleSheet.create({
    container: {
        backgroundColor: '#101026',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 12,
        marginBottom: 12,
        borderRadius: 4,
        borderWidth: .3,
        borderColor: '#8a8a8a'
    },
    item: {
        color: '#fff'
    }
})