import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import { AuthContext } from '../../contexts/AuthContext';

export default function SignIn() {

    const {user} = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin() {

        if (email === '' || password === '') {
            return
        }
        console.log(email, password);

    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
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
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1d1d2e'
    },
    logo: {
        marginBottom: 18,
        width: 221,
        height: 66,
    },
    inputContainer: {
        width: '95%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 32,
        paddingHorizontal: 14
    },
    input: {
        width: '95%',
        height: 40,
        backgroundColor: '#101026',
        color: '#fff',
        marginBottom: 12,
        borderRadius: 4,
        paddingHorizontal: 8
    },
    button: {
        width: '95%',
        height: 40,
        backgroundColor: '#22b573',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#101026',
    }
})