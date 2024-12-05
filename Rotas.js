import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet } from 'react-native';
import Home from './screens/Home';
import Mapa from './screens/Mapa';
import Consertos from './screens/Consertos';
import Perfil from './screens/Perfil';

// Importando os ícones
import { Ionicons, MaterialIcons, FontAwesome } from 'react-native-vector-icons';

const Bottom = createBottomTabNavigator();

const Rotas = ({ route }) => {
  const { nome: nome, email: email, categoryTitle: categoryTitle, brand: brand, problem: problem } = route.params || {};
  return (
    <View style={styles.container}>
      <Bottom.Navigator
        initialRouteName="Home" // Definindo a tela inicial
        screenOptions={({ route }) => ({
          headerShown: false, // Ocultar cabeçalho para todas as telas
          tabBarStyle: [
            styles.tabBar,
            route.name === 'Mapa' && { backgroundColor: 'rgba(136, 135, 136, 1)' }, // Fundo sólido na tela de Mapa
          ],
          tabBarShowLabel: false, // Remover textos das abas
          tabBarActiveTintColor: '#FFF', // Cor dos ícones quando ativos
          tabBarInactiveTintColor: '#FFF', // Cor dos ícones quando inativos
        })}
      >
        <Bottom.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
          initialParams={{ nome: nome }}
        />
        <Bottom.Screen 
          name="Mapa" 
          component={Mapa} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="map" size={size} color={color} />
            ),
          }}
        />
        <Bottom.Screen 
          name="Consertos" 
          component={Consertos} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="construct" size={size} color={color} />
            ),
          }}
          initialParams={{ categoryTitle: categoryTitle, brand: brand, problem: problem }}
        />
        <Bottom.Screen 
          name="Perfil" 
          component={Perfil} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user" size={size} color={color} />
            ),
          }}
          initialParams={{ nome: nome, email: email }}
        />
      </Bottom.Navigator>
    </View>
  );
};

// Estilos personalizados
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Fundo geral da aplicação
  },
  tabBar: {
    backgroundColor: 'rgba(136, 135, 136, 0.1)', // Fundo com transparência de 10%
    position: 'absolute', // Flutuar no layout
    bottom: 10, // Distância do fundo da tela
    borderRadius: 20, // Deixando o fundo arredondado
    width: '100%', // Largura ajustável
    height: 40, // Altura da barra
    borderTopWidth: 0, // Remover borda superior
    shadowColor: '#000', // Sombra para criar um efeito de flutuação
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10, // Sombra no Android
    justifyContent: 'center', // Centraliza os elementos verticalmente
    left: '5%', // Centraliza horizontalmente com base no espaço restante
    right: '5%', // Complemento para o left
  },
});

export default Rotas;
