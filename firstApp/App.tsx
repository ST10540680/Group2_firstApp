import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>welcome to my app!</Text>
      <text>Enter your name:</text>
      <TextInput placeholder = "Jane"/>
      <text>Enter your surname:</text>
      <TextInput placeholder = "Doe"/>

      <Button title= "Add User"/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
