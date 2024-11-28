import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  FlatList,
  Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function Perfil({ navigation }) {
  const [imageUri, setImageUri] = useState(null); // Armazena a imagem do usuário
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [email, setEmail] = useState('joao@gmail.com'); // Exemplo de email
  const [endereco, setEndereco] = useState('Rua Augusto Vasconcelos, 291'); // Exemplo de endereço
  const [cartoes, setCartoes] = useState([
    { id: '1', tipo: 'Débito', numero: '**** **** **** 9150' },
    { id: '2', tipo: 'Crédito', numero: '**** **** **** 4731' },
    { id: '3', tipo: 'Débito', numero: '**** **** **** 8149' },
  ]);

  // Solicitar permissões para acessar a galeria
  useEffect(() => {
    (async () => {
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === 'granted');
    })();
  }, []);

  // Função para selecionar uma imagem da galeria
  const pickImageFromGallery = async () => {
    if (!hasGalleryPermission) {
      Alert.alert('Permissão necessária', 'Você precisa conceder permissão para acessar a galeria.');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageUri(result.assets[0].uri); // Atualiza a imagem selecionada
    }
  };

  // Função para tirar uma foto com a câmera
  const takePhoto = async () => {
    if (!hasGalleryPermission) {
      Alert.alert('Permissão necessária', 'Você precisa conceder permissão para acessar a galeria.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageUri(result.assets[0].uri); // Atualiza a imagem tirada
    }
  };

  // Função para alterar a foto (galeria ou câmera)
  const changePhoto = () => {
    Alert.alert('Trocar foto', 'Escolha uma opção', [
      { text: 'Selecionar da galeria', onPress: pickImageFromGallery },
      { text: 'Tirar uma foto', onPress: takePhoto },
      { text: 'Cancelar', style: 'cancel' },
    ]);
  };

  // Função para adicionar um novo cartão
  const addCartao = () => {
    const novoCartao = { id: (cartoes.length + 1).toString(), tipo: 'Débito', numero: '**** **** **** XXXX' };
    setCartoes([...cartoes, novoCartao]);
  };

  // Função para remover um cartão
  const removeCartao = (id) => {
    setCartoes(cartoes.filter((cartao) => cartao.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Image source={require('../assets/logo_consertgo2.png')} />
        <TouchableOpacity onPress={() => navigation.navigate('Configuracoes')}>
          <Text style={styles.settingsIcon}>⚙️</Text>
        </TouchableOpacity>
      </View>

      {/* Foto do perfil */}
      <View style={styles.imageContainer}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.userImage} />
        ) : (
          <Image source={require('../assets/default-avatar.png')} style={styles.userImage} />
        )}
        <TouchableOpacity style={styles.editIcon} onPress={changePhoto}>
          <Text>✏️</Text>
        </TouchableOpacity>
      </View>

      {/* Nome do usuário */}
      <Text style={styles.userName}>João</Text>

      {/* Informações do usuário */}
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} />
        <Text style={styles.label}>Endereço</Text>
        <TextInput style={styles.input} value={endereco} onChangeText={setEndereco} />
      </View>

      {/* Lista de cartões */}
      <Text style={styles.sectionTitle}>Cartões</Text>
      <FlatList
        data={cartoes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartaoContainer}>
            <Text style={styles.cartaoText}>{item.tipo}</Text>
            <Text style={styles.cartaoText}>{item.numero}</Text>
            <TouchableOpacity onPress={() => removeCartao(item.id)}>
              <Text style={styles.removeButton}>❌</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity style={styles.addButton} onPress={addCartao}>
        <Text style={styles.addButtonText}>+ Adicionar cartão</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

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
  logo: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  settingsIcon: {
    color: '#fff',
    fontSize: 24,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 5,
  },
  userName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  infoContainer: {
    marginVertical: 20,
  },
  label: {
    color: '#aaa',
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  cartaoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  cartaoText: {
    color: '#fff',
  },
  removeButton: {
    color: '#ff0000',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 80,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
