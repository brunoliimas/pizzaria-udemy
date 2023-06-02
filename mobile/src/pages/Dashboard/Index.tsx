import React, { useContext, useState } from 'react';
import { View, Text, Button, SafeAreaView, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { AuthContext } from '../../contexts/AuthContext';
import { styles } from '../../styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParamsList } from '../../routes/app.routes'



export default function Dashboard() {
    const { signOut } = useContext(AuthContext)
    const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();

    const [number, setNumber] = useState('')

    async function openOrder() {
        if (number === '') {
            return
        }

        navigation.navigate('Order', { number: number, order_id: 'd3befae1-5411-469c-8416-eae5b919fdea' });
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Novo pedido
            </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={[styles.input, selfStyle.input]}
                    placeholder='Número da mesa'
                    placeholderTextColor="#f0f0f0"
                    keyboardType='numeric'
                    value={number}
                    onChangeText={setNumber}
                />
                <TouchableOpacity style={styles.button} onPress={openOrder}>
                    <Text style={styles.buttonText}>Abrir mesa</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const selfStyle = StyleSheet.create({
    input: {
        textAlign: 'center',
        height: 60,
        fontSize: 22
    }
})