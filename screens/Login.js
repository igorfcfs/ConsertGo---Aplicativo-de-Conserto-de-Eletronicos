import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function Login({ navigation, route }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { nome = 'Categoria não especificada', sobrenome = 'Categoria não especificada', email: emailCadastrado, senha: senhaCadastrada } = route.params || {};

  const handleLogin = () => {
    if (email == emailCadastrado && senha == senhaCadastrada) {
      // Navega para a tela de Categorias
      navigation.navigate('Categorias');
    } else {
      // Exibe uma mensagem de erro
      Alert.alert('Erro', 'E-mail ou senha incorretos. Tente novamente.');
      console.log(email, senha, emailCadastrado, senhaCadastrada)
    }
  };

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
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Insira sua senha"
        style={styles.inputText}
        placeholderTextColor="#aaa"
        secureTextEntry
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />

      {/* Botão de Entrar */}
      <TouchableOpacity style={styles.botao} onPress={handleLogin}>
        <Text style={styles.botaoTexto}>Entrar</Text>
      </TouchableOpacity>

      {/* Botão de Cadastro */}
      <TouchableOpacity
        style={styles.botaoSecundario}
        onPress={() => navigation.navigate('Cadastro')}
      >
        <Text style={styles.botaoSecundarioTexto}>Cadastro</Text>
      </TouchableOpacity>

      {/* Botão de Esqueci a senha */}
      <TouchableOpacity
        style={styles.botaoLink}
        onPress={() => navigation.navigate('RecuperarSenha')}
      >
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
    alignSelf: "center",
    borderRadius: 100,
    padding: 10,
    marginBottom: 20,  // Aumentei a margem inferior para separar mais do texto
    width: 300,
    height: 200,
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
