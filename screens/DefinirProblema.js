import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const DefinirProblema = ({ navigation, route }) => {
  const categoryTitle = route.params.categoryTitle || {};
  const brand = route.params.brand || {}; // Recupera o parâmetro ou usa um valor padrão
  const [problem, setProblem] = useState(''); // Estado para armazenar o problema
  const nome = route?.params?.nome || 'Sem nome'; // Valor padrão
  const email = route?.params?.email || 'Sem email'; // Valor padrão

  const handleConfirmar = () => {
    if (problem.trim() === '') {
      alert('Por favor, descreva o problema antes de confirmar!');
      return;
    }
    // Navega de volta para a tela de consertos passando o problema como parâmetro
    navigation.navigate('Rotas', { nome: nome, email: email, categoryTitle: categoryTitle, brand: brand, problem: problem });
    console.log(nome, email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Descreva o Problema</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o problema do aparelho"
        placeholderTextColor="#A1A1A1"
        value={problem}
        onChangeText={setProblem}
      />
      <TouchableOpacity style={styles.button} onPress={handleConfirmar}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1C1C1E',
    color: '#FFF',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333',
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#8e44ad',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default DefinirProblema;
