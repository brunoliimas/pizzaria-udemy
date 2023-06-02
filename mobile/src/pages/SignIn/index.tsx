import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import { AuthContext } from '../../contexts/AuthContext';
import { styles } from '../../styles';

export default function SignIn() {

    const { signIn, loadingAuth } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin() {

        if (email === '' || password === '') {
            return
        }
        await signIn({ email, password })

    }

    return (
        <View style={styles.container}>
            <Image
                style={selfStyle.logo}
                source={require('../../assets/tab-logo.png')}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Digite seu e-mail"
                    placeholderTextColor="#f0f0f0"
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    placeholder="Digite sua senha"
                    placeholderTextColor="#f0f0f0"
                    style={styles.input}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    {loadingAuth ? (
                        <ActivityIndicator size={25} color='#fff' />
                    ) : (
                        <Text style={styles.buttonText}>Acessar</Text>
                    )}

                </TouchableOpacity>
            </View>
        </View>
    )
}

const selfStyle = StyleSheet.create({
    logo: {
        marginBottom: 18,
        width: 221,
        height: 66,
    }
})