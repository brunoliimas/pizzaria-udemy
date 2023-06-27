import React from "react";
import { View, Text, StyleSheet } from 'react-native';

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
            <Text>
                Item
            </Text>
        </View>
    )
}

const selfStyle = StyleSheet.create({
    container: {

    }
})