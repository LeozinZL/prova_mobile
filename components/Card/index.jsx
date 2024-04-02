import { View, Text, TouchableOpacity } from "react-native";
import { estilo } from "./styles";

export default function Card({ name }){
    return(
        <View style={estilo.container}>
            <Text style={estilo.texto}>
               {name}
            </Text>
            <TouchableOpacity style>
                <Text style>
                    
                </Text>
                
            </TouchableOpacity>
        </View>
    )
}