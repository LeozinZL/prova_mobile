import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native"
import { estilo } from "./styles"
import Card from "../../components/Card"
import Cabecalho from "../../components/Cabecalho"

export default function Home(){

    const lista = ['Leo','Laura','Fabio', 'Luiz', 'Nathan']


    return(
        <View style={estilo.tela}>
            <Cabecalho />
            <View style={estilo.corpo}>
                <Text style={estilo.titulo}></Text>
                <Text style={estilo.sub_titulo}></Text>
                <View style={estilo.form}>
                    <TextInput
                        style={estilo.input_text}
                    />
                    <TouchableOpacity style={estilo.botao}>
                        <Text style={estilo.texto_botao}>
                            +
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList 
            style={estilo.lista}
                data={lista}
                keyExtractor={item => item}
                renderItem={({item}) =>(
                    <Card key={item} name={item} />
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}