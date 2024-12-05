import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Image
} from 'react-native';
import Toast from 'react-native-toast-message';

const HomeScreen = ({ navigation, route }) => {
  const nome = route?.params?.nome || 'Sem nome'; // Valor padrão
  const showNotification = () => {
    Toast.show({
      type: 'success', // Tipos: 'success', 'error', 'info'
      text1: 'Notificação',
      text2: 'Você clicou no botão de notificação!',
    });
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/logo_consertgo2.png')} />
        <Text style={styles.addressText}>Rua Augusto Vasconcelos, 291</Text>
        <TouchableOpacity onPress={showNotification}>
          <Text style={styles.notificationIcon}>🔔</Text>
        </TouchableOpacity>
      </View>

      {/* Saudações */}
      <Text style={styles.greeting}>{`Olá, ${nome}`}</Text>
      <Text style={styles.subGreeting}>O que quer consertar hoje?</Text>

      {/* Categorias */}
      <View style={styles.categories}>
        <TouchableOpacity style={styles.categoryButton} onPress={() => navigation.navigate('EscolhaAparelhoMovel')}>
          <ImageBackground source={require('../assets/Moveis2.png')} style={styles.image}>
            <View style={styles.overlay} />
            <Text style={styles.categoryText}>Móveis</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton} onPress={() => navigation.navigate('SelecionarMarca', { categoryTitle: 'Computador' })}>
          <ImageBackground source={require('../assets/Computadores2.png')} style={styles.image}>
            <View style={styles.overlay} />
            <Text style={styles.categoryText}>Computadores</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton} onPress={() => navigation.navigate('SelecionarMarca', { categoryTitle: 'Televisão' })}>
          <ImageBackground source={require('../assets/Televisoes2.png')} style={styles.image}>
            <View style={styles.overlay} />
            <Text style={styles.categoryText}>Televisões</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton} onPress={() => navigation.navigate('SelecionarMarca', { categoryTitle: 'Eletrodoméstico' })}>
          <ImageBackground source={require('../assets/Eletrodomesticos.png')} style={styles.image}>
            <View style={styles.overlay} />
            <Text style={styles.categoryText}>Eletrodomésticos</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>

      {/* Últimas assistências */}
      <Text style={styles.sectionTitle}>Últimas assistências</Text>
      <ScrollView horizontal style={styles.horizontalList}>
      <View style={styles.assistanceCard}>
          <Text style={styles.assistanceText}>QTech</Text>
        </View>
        <View style={styles.assistanceCard}>
          <Text style={styles.assistanceText}>Ubi. Tech</Text>
        </View>
        <View style={styles.assistanceCard}>
          <Text style={styles.assistanceText}>MsInfotec</Text>
        </View>
      </ScrollView>

      {/* Assistência do Mês */}
      <Text style={styles.sectionTitle}>Assistência do Mês</Text>
      <View style={styles.highlightCard}>
        <Text style={styles.highlightTitle}>QTech - 4.9⭐⭐⭐⭐⭐</Text>
        <Text style={styles.highlightDescription}>
          "A melhor em conserto de celulares."
        </Text>
      </View>
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
    height: 150,
    marginBottom: 13,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  categoryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    zIndex: 1,
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
});

export default HomeScreen;
