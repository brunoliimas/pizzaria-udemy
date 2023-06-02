import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1d1d2e'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#f0f0f0'
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
        marginBottom: 14,
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