import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../components/Header';

const SelecionarMarca = ({ navigation }) => {
  const brands = [
    { id: 'apple', label: 'Apple', image: require('../assets/apple.png') },
    { id: 'samsung', label: 'Samsung', image: require('../assets/samsung.png') },
    { id: 'xiaomi', label: 'MI', image: require('../assets/xiaomi.png') },
    { id: 'motorola', label: 'Motorola', image: require('../assets/motorola.png') },
    { id: 'realme', label: 'Realme', image: require('../assets/realme.png') },
    { id: 'others', label: 'Outros' },
  ];

  return (
    <View style={styles.container}>
      <Header message={'Selecione a marca do aparelho'} />

      {/* Brands */}
      <View style={styles.brandsContainer}>
        {brands.map((brand) => (
          <TouchableOpacity
            key={brand.id}
            style={styles.card}
            onPress={() => navigation.navigate('Rotas', { brand: brand.label })}
          >
            <Image source={brand.image} style={styles.cardImage} alt={brand.label} />
            <Text style={styles.cardLabel}>{brand.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Footer Navigation */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>Anterior</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  logo: {
    width: 40,
    height: 40,
  },
  login: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  brandsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#111',
    width: '45%',
    height: 120,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardImage: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  cardLabel: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 'auto',
    alignItems: 'center',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#333',
    borderRadius: 8,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 8,
  },
});

export default SelecionarMarca;
