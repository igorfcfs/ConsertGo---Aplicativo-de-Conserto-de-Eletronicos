import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: "#121212",
    justifyContent: "center",  // Centraliza o conteúdo verticalmente
    alignItems: "center",  // Centraliza o conteúdo horizontalmente
  },
  texto: {
    textAlign: "center",
    color: "white",
    marginBottom: 10,
    fontSize: 50,
  },
  inputText: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    padding: 5,
    width: '80%',  // Definindo largura do input
  },
  logo: {
    alignSelf: "center",
    borderRadius: 100,
    padding: 10,
    marginBottom: 20,  // Aumentei a margem inferior para separar mais do texto
    width: 300,
    height: 200,
  },
  container: {
    flex: 1,
    justifyContent: 'center',  // Centraliza os elementos no eixo Y
    alignItems: 'center',  // Centraliza os elementos no eixo X
    width: '100%',
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',  // Alinha os botões centralizados horizontalmente
    marginTop: 20,
  },
  button: {
    marginHorizontal: 5,
    paddingVertical: 10,
    paddingHoriontal: 20,
    borderRadiuzs: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  botao: {
    backgroundColor: '9129C7',
    padding: 10,
  },
  botaoTexto: {
    color: 'white',
    fontSize: 16,
  },
  botao2: {
    width: '80%',
    backgroundColor: '#8e44ad',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
  },
  botaoTexto2: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default style;
