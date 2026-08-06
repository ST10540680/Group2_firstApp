import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, SafeAreaView, ScrollView } from 'react-native';
import {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackScreenProps} from '@react-navigation/native-Stack;

type RootStackParamList = {
  Home: Undefined;
  View: {
    NameSend: string;
    SurnameSend: string;
  };
};

  const Stack = createNativeStackNavigator<RootStackParamList>();

  type MainscreenProps = NativeStackScreenProps<
    RootStackParamList,
    'Home'
>;
  
  type ViewDetailsProps = NativeStackScreenProps<
    RootStackParamList,
    'View'
  >;

export default function App() {
 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component ={Mainscreen}/>
        <Stack.Screen name = "View" component ={ViewDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function Mainscreen({navigation}: MainscreenProps){

  const [Name, setName] = useState()
  const [Surname, setSurname] = useState('');

  console. log("App Works!");

  return(
    <View>

    <SafeAreaView>
      <ScrollView>

      <Image style={styles.mainImg}
      source={require('./images/cupcake.jpg')}/>

      <Text style={styles.welcomeTxt}>welcome to my app!</Text>
      
     <View style={styles.InputFlex}>
      <text style= {styles.headingTxt}>Enter your name:</text>
      <TextInput style={styles.inputBoxTxt} 
      placeholder = "Helder"
      OnChangeText={newText => SetName(newText)}/>

      <text style={styles.headingTxt}>Enter your surname:</text>
      <TextInput style={styles. inputBoxTxt}
      placeholder = "Filipe"
      onChangeText={newText => setSurname(newText)}/>
     </View> 

      <Button title= "Add User"
      onPress= {( => {
        navigation.navigate('View', {
          NameSend : Name,
          SurnameSend : Surname 
        });
      }}/>

      <StatusBar style="auto" />
      </ScrollView>
      </SafeAreaView>
    </View>
  );
};

function ViewDetails ({navigation, route }: ViewDetailsProps){
  
  const NameGet = route.params.NameSend;
  const SurnameGet = route.params.surnameSend;

  return(
    <view style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Name: {NameGet} Surname: {SurnameGet}</Text>
    </view>
  );
};

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
