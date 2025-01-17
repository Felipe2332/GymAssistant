import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ImageBackground,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import imagem from '../../../../assets/teste.jpg'
import logo from '../../../../assets/logo.jpeg'

export default function TelaInicial({ navigation }: {navigation: any}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Comecei aplicar o Tailwind aqui
  return (
    <View className="bg-gray-800 flex-1 items-center justify-center w-full">
      <Image className="w-[150px] h-[150px] mb-5 bottom-[175px] rounded-lg self-center" source = {logo}/>
      <TextInput
        className='h-3 m-3'
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Entrar" onPress={() => { /* lógica de login */ }} />
      <TouchableOpacity onPress={() => navigation.navigate('EsqueciSenha')}>
        <Text style={styles.link}>Esqueci minha senha</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { /* lógica de criar conta */ }}>
        <Text style={styles.link}>Criar conta</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Chatbot')}>
        <Text style={styles.link}>Chatbot</Text>
      </TouchableOpacity>
    </View>
    
  );
  
}

const styles = StyleSheet.create({
    background: {
    width:'100%',
    height:'100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    
    },
    container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  logo: {
    width: 150, // Largura do logo
    height: 150, // Altura do logo
    marginBottom: 20, // Espaço abaixo do logo
    bottom:175, 
    borderRadius:10,
    alignSelf:'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  link: {
    color: 'blue',
    marginTop: 12,
    textAlign: 'center',
  },
});