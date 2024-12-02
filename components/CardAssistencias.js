import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const RepairCard = ({ imageSource, key, nome, endereco, onPress }) => {
  return (
    <View style={styles.card} onPress={onPress}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.endereco}>{endereco}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "white"
  },
  endereco: {
    fontSize: 16,
    color: 'white',
    marginVertical: 4,
  },
});

export default RepairCard;
