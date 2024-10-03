import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function EsqueciSenha({ navigation }: { navigation: any }){
  const [email, setEmail] = useState('');

  const handlePasswordReset = () => {
    // Lógica para enviar o email de redefinição de senha
    console.log('Email de redefinição de senha enviado para:', email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Esqueci minha senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Button title="Enviar" onPress={handlePasswordReset} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: '100%',
  },
});
