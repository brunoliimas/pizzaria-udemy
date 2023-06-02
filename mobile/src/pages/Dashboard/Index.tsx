import React, { useContext } from 'react';
import { View, Text, Button, SafeAreaView, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { AuthContext } from '../../contexts/AuthContext';
import { styles } from '../../styles';


export default function Dashboard() {
    const { signOut } = useContext(AuthContext)
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
                />
                <TouchableOpacity onPress={signOut} style={styles.button}>
                    <Text style={styles.buttonText}>Abrir mesa</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const selfStyle = StyleSheet.create({
    input:{
        textAlign: 'center',
        height: 60,
        fontSize: 22
    }
})