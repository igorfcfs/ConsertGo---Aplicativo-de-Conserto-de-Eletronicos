import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Start from './screens/Start';
import Categorias from './screens/Categorias';
import EscolhaAparelhoMovel from './screens/EscolhaAparelhoMovel';
import SelecionarMarca from './screens/SelecionarMarca';
import DefinirProblema from './screens/DefinirProblema';
import Login from './screens/Login';
import Cadastro from './screens/Cadastro';
import Rotas from './Rotas';
import Configuracoes from './screens/Configuracoes';
import Toast from 'react-native-toast-message';


const Stack = createStackNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerShown: false, // Oculta o cabeçalho para todas as telas
        }}>
          <Stack.Screen name="Start" component={Start} />
          <Stack.Screen name="Categorias" component={Categorias} />
          <Stack.Screen name="EscolhaAparelhoMovel" component={EscolhaAparelhoMovel} />
          <Stack.Screen name="SelecionarMarca" component={SelecionarMarca} />
          <Stack.Screen name="DefinirProblema" component={DefinirProblema} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="Rotas" component={Rotas} />
          <Stack.Screen name="Configuracoes" component={Configuracoes} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
}