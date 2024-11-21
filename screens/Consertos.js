import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, FlatList } from 'react-native';

// Importando o caminho da logo
import logo from '../assets/logo_consertgo2.png';

const Consertos = ({ navigation }) => {
  const [aparelhos, setAparelhos] = useState([
    { id: '1', nome: 'iPhone', modelo: '12', problema: 'Tela Quebrada' },
  ]);

  // Função para adicionar um novo cartão
  const addAparelho = () => {
    const novoAparelho = {
      id: (aparelhos.length + 1).toString(),
      nome: 'Laptop',
      modelo: 'Dell XPS',
      problema: 'Bateria não carrega',
    };
    setAparelhos([...aparelhos, novoAparelho]);
  };

  const renderCard = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Mapa')}>
      <View style={styles.cardContent}>
        <Image
          source={{ uri: 'https://via.placeholder.com/60' }}
          style={styles.deviceImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.deviceTitle}>{`${item.nome} ${item.modelo} – ${item.problema}`}</Text>
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

      {/* Botão de adicionar outro aparelho */}
      <TouchableOpacity style={styles.addButton} onPress={addAparelho}>
        <Text style={styles.addButtonText}>+</Text>
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
