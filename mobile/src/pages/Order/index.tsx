import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
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
        <View style={styles.container}>
            <Text style={styles.title}>Nova Mesa aberta</Text>
            <Text style={styles.title}>{route.params.number}</Text>
        </View>
    )
}