import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = () => {
    // Adicione a lógica de cadastro aqui
    console.log({ nome, sobrenome, telefone, email, senha });
  };

  const handleLogin = () => {
    // Adicione a navegação para a tela de login aqui
    navigation.navigate('Login', { nome: nome, sobrenome: sobrenome, email: email, senha: senha });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Logotipo */}
      <Image
        source={require('../assets/logo_consertgo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Título */}
      <Text style={styles.title}>Cadastro</Text>

      {/* Campos de Cadastro */}
      <View style={styles.form}>
        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.inputHalf]}
            placeholder="Nome"
            placeholderTextColor="#aaa"
            value={nome}
            onChangeText={setNome}
          />
          <TextInput
            style={[styles.input, styles.inputHalf]}
            placeholder="Sobrenome"
            placeholderTextColor="#aaa"
            value={sobrenome}
            onChangeText={setSobrenome}
          />
        </View>
        <View style={styles.row}>
          <Image source={require('../assets/brazil-flag.png')} style={styles.flag} />
          <TextInput
            style={[styles.input, styles.inputWithIcon]}
            placeholder="Ex: (DDD) 123456789"
            placeholderTextColor="#aaa"
            value={telefone}
            onChangeText={setTelefone}
            keyboardType="phone-pad"
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#aaa"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />
      </View>

      {/* Botões */}
      <TouchableOpacity style={styles.cadastroButton} onPress={handleLogin}>
        <Text style={styles.cadastroButtonText}>Cadastrar-se</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 20,
    paddingTop: 40,
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
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  form: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    fontSize: 16,
  },
  inputHalf: {
    flex: 1,
    marginHorizontal: 5,
  },
  inputWithIcon: {
    flex: 1,
    marginLeft: 5,
  },
  flag: {
    width: 30,
    height: 20,
    resizeMode: 'contain',
  },
  cadastroButton: {
    backgroundColor: '#8e44ad',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
  },
  cadastroButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginButton: {
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#8e44ad',
    fontSize: 16,
  },
});
