import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: '#E3F0FF',
    },
    lista:{
        paddingLeft: 42,
        paddingRight: 42
    },
    corpo:{
        padding: 15
    },
    
    
    form: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 20,
        marginBottom: 20
    },
    input_text: {
        flex: 5,
        height: 60,
        color: '#FFF',
        fontSize: 26,
        padding: 12,
        borderRadius: 10,
        backgroundColor: '#54B8FF'
    },
    botao:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        borderRadius: 30,
        fontSize: 20,
        backgroundColor: '#22A3FF',
        marginLeft: 20
    },
    texto_botao: {
        fontSize: 30
    }
})