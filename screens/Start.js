import { View, Text, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import style from '../styles/style';

export default function Start({ navigation }) {
  return (
    <View style={style.principal}>

      <Text style={style.texto}>Bem vindo a</Text>
      <Image
        source={require('../assets/logo_consertgo.png')}
        style={style.logo}
        resizeMode="contain"
      />
      {/*resizeMode="cover" -> imagem de fundo*/}

      <TouchableOpacity style={style.button} title="Proximo" onPress={() => navigation.navigate('Login')}><Text style={style.buttonText}>Próximo ></Text></TouchableOpacity>
    </View>
  );
}
