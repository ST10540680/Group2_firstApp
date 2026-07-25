import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default function App() {
  return (
    <View>
      <Text style={styles.welcomeTxt}>welcome to my app!</Text>
      
     <View style={styles.inputFlex}>
      <text style= {styles.headingTxt}>Enter your name:</text>
      <TextInput style={styles.inputBoxTxt} placeholder = "Helder"/>
      <text style={styles.headingTxt}>Enter your surname:</text>
      <TextInput style={styles. inputBoxTxt}placeholder = "Filipe"/>
     </View> 

      <Button title= "Add User"/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeTxt: {
    paddingTop: 50,
    color: "blue",
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  },

  headingTxt: {
    fontWeight: 'bold',
  },

  inputBoxTxt: {

  }
});
