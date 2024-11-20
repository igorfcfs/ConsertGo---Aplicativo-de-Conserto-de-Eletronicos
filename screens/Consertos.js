import React from 'react';
import { View, StyleSheet } from 'react-native';
import RepairCard from '../components/CardConserto'; // Certifique-se de que o caminho esteja correto.

const Consertos = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <RepairCard 
        imageSource={{ uri: 'https://via.placeholder.com/60' }} 
        deviceTitle="Smartphone" 
        problem="Tela Quebrada" 
        onPress={() => navigation.navigate('Mapa')} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Fundo preto
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
    padding: 16,
  },
});

export default Consertos;
