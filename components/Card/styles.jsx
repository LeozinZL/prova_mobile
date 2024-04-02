
import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({
    container :{
        marginTop: 20,
        flexDirection: 'row',
        height: 50,
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#A9D2FF',
        borderRadius:30
    },
    texto :{
        flex: 5,
        padding: 12,
        fontSize: 20,
        color: '#000',
    },
    botao: {
        height: 50,
        width: 70,
        backgroundColor: '#87C1FF',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50
    },
    texto_botao:{
        fontSize: 30,
        color: '#fff'
    }
})