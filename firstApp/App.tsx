import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';


export default function App() {
  return (
    <View>

      <Image style={styles.mainImg}
      source={require('./images/cupcake.jpg')}/>

      <Text style={styles.welcomeTxt}>welcome to my app!</Text>
      
     <View style={styles.InputFlex}>
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

  },

  mainImg: {
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 250
  },

  InputFlex:{
    flexDirection:'row',
    marginTop: 30,
    justifyContent: 'space-evenly'
  },
});
