import { StyleSheet } from "react-native";


export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#151515',
    },
    chatContainer: {
      flex: 1,
      padding: 10,
    },
    inputContainer: {
      flexDirection: 'row',
      padding: 10,
      borderTopWidth: 1,
      borderColor: '#ccc',
      backgroundColor:'#fff',
      borderTopLeftRadius:10,
      borderTopRightRadius:10,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
    },
    userMessage: {
      alignSelf: 'flex-end',
      backgroundColor: '#dcf8c6',
      borderRadius: 5,
      padding: 10,
      marginVertical: 5,
    },
    botMessage: {
      alignSelf: 'flex-start',
      backgroundColor: '#f1f0f0',
      borderRadius: 5,
      padding: 10,
      marginVertical: 5,
    },
  });