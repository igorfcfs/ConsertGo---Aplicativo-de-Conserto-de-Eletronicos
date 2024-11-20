import React, { useState, useEffect } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View, Text, Alert } from 'react-native';
import * as Location from 'expo-location';  // Biblioteca para acessar a localização

export default function Mapa() {
  const [userLocation, setUserLocation] = useState(null);  // Localização do usuário
  const [hasLocationPermission, setHasLocationPermission] = useState(false);  // Permissão de localização
  const [selectedAssistencia, setSelectedAssistencia] = useState(null);  // Assistência técnica selecionada

  // Função para solicitar permissão e obter a localização
  useEffect(() => {
    const getLocation = async () => {
      // Solicitar permissão para acessar a localização
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permissão negada', 'Precisamos da sua permissão para acessar sua localização');
        return;
      }
      setHasLocationPermission(true);

      // Obter a localização atual do usuário
      const location = await Location.getCurrentPositionAsync({});
      setUserLocation(location.coords); // Armazenar a localização (latitude e longitude)
    };

    getLocation();
  }, []);

  // Coordenadas das assistências técnicas
  const assistenciasTecnicas = [
    {
      id: 1,
      nome: 'Assistência Técnica 1',
      latitude: -23.6167,
      longitude: -46.7667,
      endereco: 'Rua X, 123',
    },
    {
      id: 2,
      nome: 'Assistência Técnica 2',
      latitude: -23.6175,
      longitude: -46.7675,
      endereco: 'Rua Y, 456',
    },
    {
      id: 3,
      nome: 'Assistência Técnica 3',
      latitude: -23.6150,
      longitude: -46.7690,
      endereco: 'Rua Z, 789',
    },
    // Adicione mais assistências técnicas aqui
  ];

  // Função para lidar com o clique no marcador
  const handleMarkerPress = (assistencia) => {
    setSelectedAssistencia(assistencia);  // Atualiza a assistência técnica selecionada
    Alert.alert(assistencia.nome, `Endereço: ${assistencia.endereco}`);
  };

  // Função para renderizar o estilo do marcador
  const renderMarkerStyle = (assistencia) => {
    // Se a assistência for a selecionada, retornamos um estilo diferente
    return assistencia.id === selectedAssistencia?.id
      ? { pinColor: 'red' }  // Marcador vermelho para a assistência selecionada
      : { pinColor: 'green' };  // Marcador verde para as demais assistências
  };

  if (!hasLocationPermission) {
    return <Text>Precisamos de permissão para acessar sua localização!</Text>;
  }

  if (!userLocation) {
    return <Text>Obtendo a localização...</Text>;
  }

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // Usar o Google Maps
        style={styles.map}
        initialRegion={{
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {/* Marcador de Localização do Usuário */}
        <Marker
          coordinate={{
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
          }}
          title="Sua localização"
          description="Você está aqui"
          pinColor="blue" // Cor do marcador de localização do usuário
        />

        {/* Marcadores para as assistências técnicas */}
        {assistenciasTecnicas.map((assistencia) => (
          <Marker
            key={assistencia.id}
            coordinate={{
              latitude: assistencia.latitude,
              longitude: assistencia.longitude,
            }}
            title={assistencia.nome}
            description={assistencia.endereco}
            onPress={() => handleMarkerPress(assistencia)}
            pinColor={renderMarkerStyle(assistencia).pinColor} // Estilo do marcador com base na seleção
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
