import React, { useState, useEffect, useRef } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View, Text, Alert, TouchableOpacity, Image } from 'react-native';
import * as Location from 'expo-location';  // Biblioteca para acessar a localização
import { Modalize } from 'react-native-modalize';
import CardAssistencias from '../components/CardAssistencias';

export default function Mapa() {
  const [userLocation, setUserLocation] = useState(null);  // Localização do usuário
  const [hasLocationPermission, setHasLocationPermission] = useState(false);  // Permissão de localização
  const [selectedAssistencia, setSelectedAssistencia] = useState(null);  // Assistência técnica selecionada
  const modalizeRef = useRef(null);

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
      nome: 'QTech',
      latitude: -23.60495995772271,
      longitude: -46.76473244022914,
      endereco: 'Av. José André de Moraes, 259 - Jardim Monte Alegre',
      imageSource: '../assets/Ubi. Tec Assistencia.png'
    },
    {
      id: 2,
      nome: 'MsInfotec Assistência Técnica Notebook e Impressora Epson',
      latitude: -23.604534185024544,
      longitude: -46.767931164350095,
      endereco: 'Rua Maria Mari, 398 - Jardim Monte Alegre',
      imageSource: '../assets/Ubi. Tec Assistencia.png'
    },
    {
      id: 3,
      nome: 'Ubi. Tec Assistência Técnica',
      latitude: -23.610036991274594, 
      longitude: -46.77584756566774,
      endereco: 'R. Rio Grande do Sul, 100 - Cidade Intercap',
      imageSource: '../assets/Ubi. Tec Assistencia.png'
    },
    // Adicione mais assistências técnicas aqui
  ];

  function onOpen(){
    modalizeRef.current?.open();
  }

  // Função para lidar com o clique no marcador
  const handleMarkerPress = (assistencia) => {
    setSelectedAssistencia(assistencia);  // Atualiza a assistência técnica selecionada
    // Alert.alert(assistencia.nome, `Endereço: ${assistencia.endereco}`);
    onOpen();
  };

  // Função para renderizar o estilo do marcador
  const renderMarkerStyle = (assistencia) => {
    // Se a assistência for a selecionada, retornamos um estilo diferente
    return assistencia.id === selectedAssistencia?.id
      ? { pinColor: 'red' }  // Marcador vermelho para a assistência selecionada
      : { pinColor: 'black' };  // Marcador verde para as demais assistências
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
          pinColor="#8e44ad" // Cor do marcador de localização do usuário
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
      {/* Modalize */}
      <Modalize 
        ref={modalizeRef} 
        snapPoint={500}
        modalStyle={styles.modalContainer}
      >
        <View style={{ padding: 16 }}>
          {selectedAssistencia && (
            <>
              <CardAssistencias
                imageSource={selectedAssistencia.imageSource}
                nome={selectedAssistencia.nome} 
                endereco={selectedAssistencia.endereco} 
              />
              <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('Acompanhamento', 'Função de acompanhamento em desenvolvimento!')}>
                <Text style={styles.botaoTexto}>Acompanhe seu pedido</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </Modalize>
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
  modalContainer: {
    flex: 1,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deviceImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  textContainer: {
    alignItems: 'center',
  },
  deviceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  deviceSubText: {
    fontSize: 14,
    color: 'white',
    textDecorationLine: 'underline',
    marginTop: 8,
  },
  deviceButton: {
    width: '100%',
    backgroundColor: '#8e44ad',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
  },
  deviceButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#121212', // Fundo escuro para combinar com o tema
    padding: 16,
  },
  searchBar: {
    backgroundColor: '#1E1E1E', // Fundo levemente mais claro para destaque
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
    color: '#FFFFFF', // Texto branco
    fontSize: 14,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E', // Fundo do card
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  cardImage: {
    width: 50,
    height: 50,
    borderRadius: 25, // Circular
    marginRight: 12,
    backgroundColor: '#333', // Placeholder para a imagem
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF', // Texto branco
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#AAAAAA', // Texto cinza para contraste
  },
  cardIcon: {
    marginLeft: 12,
    color: '#FFFFFF', // Cor do ícone (seta ou coração)
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  filterButton: {
    flex: 1,
    backgroundColor: '#1E1E1E', // Fundo dos filtros
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  filterText: {
    fontSize: 14,
    color: '#FFFFFF', // Texto branco
  },
  botao: {
    width: '100%',
    backgroundColor: '#8e44ad',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});