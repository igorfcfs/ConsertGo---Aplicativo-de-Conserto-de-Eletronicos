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

const Rotas = () => {
  return (
    <View style={styles.container}>
      <Bottom.Navigator
        initialRouteName="Home" // Definindo a tela inicial
        screenOptions={{
          headerShown: false, // Ocultar cabeçalho para todas as telas
          tabBarStyle: styles.tabBar, // Aplicando estilos personalizados
          tabBarShowLabel: false, // Remover textos das abas
          tabBarActiveTintColor: '#FFF', // Cor dos ícones quando ativos
          tabBarInactiveTintColor: '#FFF', // Cor dos ícones quando inativos
        }}
      >
        <Bottom.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
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
        />
        <Bottom.Screen 
          name="Perfil" 
          component={Perfil} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user" size={size} color={color} />
            ),
          }}
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
    left: 20, // Distância da borda esquerda
    right: 20, // Distância da borda direita
    borderRadius: 20, // Deixando o fundo arredondado
    height: 60, // Altura da barra
    borderTopWidth: 0, // Remover borda superior
    shadowColor: '#000', // Sombra para criar um efeito de flutuação
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10, // Sombra no Android
  },
});

export default Rotas;