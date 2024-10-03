import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from './src/telaInicial';
import EsqueciSenha from './src/esqueciSenha';
import ChatbotScreen from './src/chatbotScreen/chatBotScreen';
import { StatusBar } from 'react-native';

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
