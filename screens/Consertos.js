import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';

// Importando o caminho da logo
import logo from '../assets/logo_consertgo2.png';

const Consertos = ({ navigation, route }) => {
  const { categoryTitle, brand } = route.params || {}; // Recupera o parâmetro ou usa um valor padrão
  
  const [aparelhos, setAparelhos] = useState([
    { id: '1', nome: 'iPhone', modelo: '12', problema: 'Tela Quebrada' },
  ]);

  const [novoProblema, setNovoProblema] = useState(''); // Estado para o texto do problema
  const [showInput, setShowInput] = useState(false); // Estado para mostrar ou esconder o campo de texto

  // Função para adicionar um novo cartão
  const addAparelho = () => {
    if (novoProblema.trim() === '') return; // Não permite adicionar sem um problema

    const novoAparelho = {
      id: (aparelhos.length + 1).toString(),
      nome: 'Dispositivo Genérico',
      modelo: 'Modelo X',
      problema: novoProblema,
    };
    setAparelhos([...aparelhos, novoAparelho]);
    setNovoProblema(''); // Limpa o campo de texto
    setShowInput(false); // Esconde o campo após adicionar
  };

  const renderCard = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Mapa')}>
      <View style={styles.cardContent}>
        <Image
          source={{ uri: 'https://via.placeholder.com/60' }}
          style={styles.deviceImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.deviceTitle}>{`${categoryTitle}, ${brand} – ${item.problema}`}</Text>
          <Text style={styles.deviceSubText}>Acompanhe seu pedido</Text>
        </View>
      </View>
      <Text style={styles.arrow}>{'>'}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Logo no canto superior esquerdo */}
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
      </View>

      {/* Título principal */}
      <Text style={styles.title}>Meus consertos</Text>

      {/* Lista de cartões */}
      <FlatList
        data={aparelhos}
        keyExtractor={(item) => item.id}
        renderItem={renderCard}
        contentContainerStyle={styles.listContainer}
      />

      {/* Campo de texto para o problema */}
      {showInput && (
        <TextInput
          style={styles.input}
          placeholder="Descreva o problema"
          placeholderTextColor="#A1A1A1"
          value={novoProblema}
          onChangeText={setNovoProblema}
        />
      )}

      {/* Botão de adicionar outro aparelho */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => (showInput ? addAparelho() : setShowInput(true))}
      >
        <Text style={styles.addButtonText}>{showInput ? 'Adicionar' : '+'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20, // Espaçamento abaixo do título
    textAlign: 'center', // Centraliza o texto
  },
  card: {
    width: '100%',
    backgroundColor: '#1C1C1E', // Cor de fundo do card
    borderRadius: 10,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20, // Espaçamento entre os cards
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deviceImage: {
    width: 60, // Largura da imagem do dispositivo
    height: 60, // Altura da imagem do dispositivo
    borderRadius: 10, // Bordas arredondadas da imagem
    marginRight: 16, // Espaçamento ao lado da imagem
  },
  textContainer: {
    justifyContent: 'center',
  },
  deviceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  deviceSubText: {
    fontSize: 14,
    color: '#A1A1A1', // Texto secundário em cinza
  },
  arrow: {
    fontSize: 18,
    color: '#FFF', // Ícone de seta em branco
  },
  input: {
    backgroundColor: '#1C1C1E',
    color: '#FFF',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: '#333',
    borderWidth: 1,
  },
  addButton: {
    backgroundColor: '#1C1C1E', // Fundo do botão
    paddingVertical: 16, // Altura do botão
    paddingHorizontal: 20, // Largura do botão
    borderRadius: 10, // Botão arredondado
    alignItems: 'center', // Centraliza o texto horizontalmente
    marginBottom: 80, // Espaçamento inferior
  },
  addButtonText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default Consertos;
