import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Header from '../components/Header';

const categories = [
  { id: '1', title: 'Celular' },
  { id: '2', title: 'Tablet' },
  { id: '3', title: 'Smartwatches' },
  { id: '4', title: 'Fones de Ouvido' },
];

const CategoryCard = ({ title, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Text style={styles.cardText}>{title}</Text>
    <Text style={{textAlign: 'right', color: '#fff'}}>></Text>
  </TouchableOpacity>
);

export default function App({ navigation }) {
  const renderCategory = ({ item }) => (
    <CategoryCard title={item.title} onPress={() => navigation.navigate('SelecionarMarca')} />
  );

  return (
    <View style={styles.container}>
      <Header message={'Qual tipo de aparelho você deseja consertar?'} />
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
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    marginBottom: 20,
    overflow: 'hidden',
    borderTopWidth: 1, // Largura da borda superior
    borderBottomWidth: 1, // Largura da borda inferior
    borderTopColor: '#636363', // Cor da borda superior
    borderBottomColor: '#636363', // Cor da borda inferior
  },  
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    padding: 10,
    textAlign: 'left',
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
