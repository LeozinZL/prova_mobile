import { View, Image, TextInput, TouchableOpacity, Text } from "react-native";
import { Icon } from 'react-native-elements'
import styles from "./styles";

export default function Cabecalho(){
    return (
        <View style={styles.container}>
            <View style={styles.componentes}>
                <Image style={styles.imagem}
                    source={require('../../assets/praia.jpg')}
                />
                
                <TouchableOpacity style={styles.botao_pesquisa}>
                    <Icon 
                        name="search"
                        type="material"
                        color={'#ffff'}
                    />
                   
                </TouchableOpacity>
            </View>
        </View>
    )
}