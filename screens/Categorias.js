import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import Header from '../components/Header';

const categories = [
  { id: '1', title: 'Móveis', image: require('../assets/moveis.png') },
  { id: '2', title: 'Computadores', image: require('../assets/computadores.png') },
  { id: '3', title: 'Televisões', image: require('../assets/televisoes.png') },
  { id: '4', title: 'Eletrodomésticos', image: require('../assets/eletrodomesticos.png') },
];

const CategoryCard = ({ title, image, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image source={image} style={styles.image} />
    <Text style={styles.cardText}>{title}</Text>
  </TouchableOpacity>
);

export default function Categorias({ navigation }) {
  const renderCategory = ({ item }) => (
    <CategoryCard 
    title={item.title} 
    image={item.image} 
    onPress={() => item.id === '1' 
        ? navigation.navigate('EscolhaAparelhoMovel') 
        : navigation.navigate.goBack('SelecionarMarca')} // se nao tiver o goBack da problema, pois eu preciso voltar uma tela para navegar pra proxima
    />
  );

  return (
    <View style={styles.container}>
      <Header message={'Em qual categoria o produto que deseja consertar se encaixa?'} />
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    marginBottom: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#1c1c1c',
    borderRadius: 8,
    marginBottom: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 120,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    padding: 10,
    textAlign: 'center',
  },
  nextButton: {
    backgroundColor: '#444',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  nextButtonText: {
    fontSize: 16,
    color: '#fff',
  },
});
