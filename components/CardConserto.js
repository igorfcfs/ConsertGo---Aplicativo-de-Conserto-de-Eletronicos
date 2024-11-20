import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const RepairCard = ({ imageSource, deviceTitle, problem, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{deviceTitle}</Text>
        <Text style={styles.problem}>{problem}</Text>
        <Text style={styles.trackOrder}>Acompanhe seu pedido</Text>
      </View>
      <Text style={styles.arrow}>></Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
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
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  problem: {
    fontSize: 16,
    color: '#666',
    marginVertical: 4,
  },
  trackOrder: {
    fontSize: 14,
    color: '#007bff',
  },
  arrow: {
    fontSize: 20,
    color: '#666',
    marginLeft: 10,
  },
});

export default RepairCard;
