import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/logo_consertgo2.png')} />
        <Text style={styles.addressText}>Rua Augusto Vasconcelos, 291</Text>
        <TouchableOpacity>
          <Text style={styles.notificationIcon}>🔔</Text>
        </TouchableOpacity>
      </View>

      {/* Saudações */}
      <Text style={styles.greeting}>Olá, João</Text>
      <Text style={styles.subGreeting}>O que quer consertar hoje?</Text>

      {/* Categorias */}
      <View style={styles.categories}>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Celulares</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Computadores</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Televisões</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Eletrodomésticos</Text>
        </TouchableOpacity>
      </View>

      {/* Últimas assistências */}
      <Text style={styles.sectionTitle}>Últimas assistências</Text>
      <ScrollView horizontal style={styles.horizontalList}>
        {[...Array(5)].map((_, index) => (
          <View key={index} style={styles.assistanceCard}>
            <Text style={styles.assistanceText}>Assistência {index + 1}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Assistência do Mês */}
      <Text style={styles.sectionTitle}>Assistência do Mês</Text>
      <View style={styles.highlightCard}>
        <Text style={styles.highlightTitle}>Assistência 723</Text>
        <Text style={styles.highlightRating}>⭐ 4.9</Text>
        <Text style={styles.highlightDescription}>
          "A melhor em conserto de celulares."
        </Text>
      </View>

      {/* Melhores avaliadas */}
      <Text style={styles.sectionTitle}>Melhores avaliadas</Text>
      <ScrollView horizontal style={styles.horizontalList}>
        {[...Array(5)].map((_, index) => (
          <View key={index} style={styles.assistanceCard}>
            <Text style={styles.assistanceText}>Assistência {index + 1}</Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
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
  addressText: {
    color: '#fff',
    fontSize: 16,
  },
  notificationIcon: {
    color: '#fff',
    fontSize: 20,
  },
  greeting: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  subGreeting: {
    color: '#aaa',
    fontSize: 16,
    marginVertical: 10,
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  categoryButton: {
    width: '48%',
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryText: {
    color: '#fff',
    fontSize: 16,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  horizontalList: {
    marginVertical: 10,
  },
  assistanceCard: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  assistanceText: {
    color: '#fff',
  },
  highlightCard: {
    backgroundColor: '#4b0082',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
  highlightTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  highlightRating: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 5,
  },
  highlightDescription: {
    color: '#fff',
    fontSize: 14,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#222',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  navIcon: {
    color: '#fff',
    fontSize: 20,
  },
});

export default HomeScreen;
