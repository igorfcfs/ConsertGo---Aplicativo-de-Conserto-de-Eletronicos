import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Login({ navigation }) {
  // Estados para armazenar o e-mail e a senha
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  return (
    <View style={styles.principal}>
      {/* Logotipo */}
      <Image
        source={require('../assets/logo_consertgo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Título */}
      <Text style={styles.title}>Login</Text>

      {/* Campos de entrada */}
      <TextInput
        placeholder="Insira seu e-mail"
        style={styles.inputText}
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        value={email} // Vinculando o estado ao campo
        onChangeText={(text) => setEmail(text)} // Atualizando o estado ao digitar
      />
      <TextInput
        placeholder="Insira sua senha"
        style={styles.inputText}
        placeholderTextColor="#aaa"
        secureTextEntry
        value={senha} // Vinculando o estado ao campo
        onChangeText={(text) => setSenha(text)} // Atualizando o estado ao digitar
      />

      {/* Botão de Entrar */}
      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Categorias')}>
        <Text style={styles.botaoTexto}>Entrar</Text>
      </TouchableOpacity>

      {/* Botão de Cadastro */}
      <TouchableOpacity
        style={styles.botaoSecundario}
        onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.botaoSecundarioTexto}>Cadastro</Text>
      </TouchableOpacity>

      {/* Botão de Esqueci a senha */}
      <TouchableOpacity
        style={styles.botaoLink}
        onPress={() => navigation.navigate('RecuperarSenha')}>
        <Text style={styles.linkTexto}>Esqueci a senha</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  inputText: {
    width: '100%',
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  botao: {
    width: '100%',
    backgroundColor: '#8e44ad',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  botaoSecundario: {
    width: '100%',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#8e44ad',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
  },
  botaoSecundarioTexto: {
    color: '#8e44ad',
    fontSize: 16,
    fontWeight: 'bold',
  },
  botaoLink: {
    marginTop: 10,
  },
  linkTexto: {
    color: '#8e44ad',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});
