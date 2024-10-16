import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from './src/app/screens/TelaInicial/telaInicial';
import EsqueciSenha from './src/app/screens/EsqueciSenha/esqueciSenha';
import ChatbotScreen from './src/app/screens/chatbotScreen/chatBotScreen';
import { StatusBar } from 'react-native';
import './src/styles/global.css'
// Depois de importar isso deu certo, Tailwind começou a ser aplicado
const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar />
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Saca" component={TelaInicial} options={{ headerShown: false }} />
        <Stack.Screen name="EsqueciSenha" component={EsqueciSenha} options={{ headerShown: false }} />
        <Stack.Screen name="Chatbot" component={ChatbotScreen} options={{ headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}
