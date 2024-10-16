import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import styles from './style';

type Message ={
    id:string,
    text:string,
    sender: 'user' | 'bot';
}


const ChatbotScreen = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim()) {
      const newMessage: Message = { id: Date.now().toString(), text: inputText, sender: 'user' };
      setMessages([...messages, newMessage]);
      setInputText('');
      // Aqui você pode adicionar a lógica para enviar a mensagem ao backend e receber a resposta do chatbot
      const botResponse:Message= { id: (Date.now() + 1).toString(), text: 'Resposta do chatbot', sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }
  };

  const renderItem = ({ item }: {item:Message}) => (
    <View style={item.sender === 'user' ? styles.userMessage : styles.botMessage}>
      <Text>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.chatContainer}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Digite sua mensagem..."
        />
        <Button title="Enviar" onPress={sendMessage} />
      </View>
    </View>
  );
};


export default ChatbotScreen;
