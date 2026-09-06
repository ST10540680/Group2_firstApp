import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, SafeAreaView, ScrollView, Animated, ViewStyle, StyleProp} from 'react-native';
import {Children, ReactNode, useEffect, useRef, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackScreenProps} from '@react-navigation/native-Stack;
import { ImageSourcePropType } from 'react-native/types_generated/index';
import {RadioButton} from 'react-native-paper'

type RootStackParamList = {
  Home: Undefined;
  View: {
    NameSend: string;
    SurnameSend: string;
  };
  ListSkills: undefined;
};

  // This sets up the "navigator" which controls the switching of screens
  const Stack = createNativeStackNavigator<RootStackParamList>();

  //this describes what information gets passed in each screen 
  type MainscreenProps = NativeStackScreenProps<
    RootStackParamList,
    'Home'
>;
  
  type ViewDetailsProps = NativeStackScreenProps<
    RootStackParamList,
    'View'
  >;

  type ListSkillsProps = NativeStackScreenProps<
    RootStackParamList,
    'ListSkills'
    >;

// this is the first thing that gets displayed when app opens
export default function App() {

  return (
    //everything that is related to navigation has to stay inside of this
    <NavigationContainer>
      <Stack.Navigator>
        {/*this tells the app that the "Home" screen is showing the Mainscreen component and the "view" screen
        is showing the viewDetails component */}
        <Stack.Screen name = "Home" component ={Mainscreen}/>
        <Stack.Screen name = "View" component ={ViewDetails}/>
        <Stack.Screen name = "ListSkills" component ={ListSkills}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

//this is the home screen and the "navigation" is a remote control that allows you to navigate to 
//to the other screen
function Mainscreen({navigation}: MainscreenProps){

  //useState is how the component will remenber something
  //name is the current value and setName is the way to change it
  //Note for self: always use setName and never change Name directly
  const [Name, setName] = useState('')
  const [Surname, setSurname] = useState('');
  const [Error, setError] = useState(false)

  //send a message to the terminal to let you know if the app works
  console.log("App Works!");
  
  // a normal function that makes the first letter capital
  const capitalize = (text: string) => {
    if (text.length === 0) return text;
    return text.charAt(0).toUpperCase() + text.slice(1);
  };


  return(

    <View>
      {/* lets you scroll if needed */}
    <SafeAreaView>
      <ScrollView>
        {/* "require()" will grab a picture from my project folder */}
      <Image style={styles.mainImg}
      source={require('./images/cupcake.jpg')}/>

      <Text style={styles.welcomeTxt}>welcome to my app!</Text>

      <FadeInView>

        {/* if the error is true it display in red if not then nothing */}
        <Text style={Error? styles.redTxt: styles.blank}>
          {Error? "Please enter your info": ""}
        </Text>

        <View style={styles.InputFlex}>
        <Text style= {styles.headingTxt}>Enter your name:</Text>

        {/* this box shows whatever "Name" is currently in and everytime
        a letteris typed it capitalizes and saves it */}
          <TextInput style={styles.inputBoxTxt}placeholder = "Helder"
          value={Name}
          OnChangeText={newText=> SetName(capitalize(newText))}
          autoCapitalize= 'words' />

          <Text style={styles.headingTxt}>Enter your surname:</Text>

          <TextInput style={styles. inputBoxTxt}
          placeholder = "Filipe"
          value={Surname}
          onChangeText={newText=> setSurname(capitalize(newText))}
          autoCapitalize='words'/>
        </View>
     </FadeInView>
     

      <Button title= "Add User"
      onPress= {() => {

        //Can only proceed if both the boxes have something typed in 
        if (isEmpty(Name) || isEmpty(Surname) == false){

          //Proceed to the "View" screen and with the name and surname
          navigation.navigate('View', {
            NameSend : Name,
            SurnameSend : Surname 
          });
          setError(false);
        }
        else{
          //makes the "please fill this in" text show
          setError(true);
        }

      }}/>
      <StatusBar style="auto" />
      </ScrollView>
      </SafeAreaView>

    </View>
  )
}

function ViewDetails ({ navigation, route }: ViewDetailsProps){
  
  const NameGet = route.params.NameSend;
  const SurnameGet = route.params.SurnameSend;
  const[selectedValue, setSelectedValue ]=useState('0');
  const[iSelected, setIntValue]=useState(0);
  // const [imageBlock, setImage] = useState<ImageSourcePropType | undefined>(undefined);
  const [blockArray] = useState<ImageSourcePropType[]>([
    undefined
    require('./images/react_native.png'),
    require('./images/kotlin.png'),
    require('./html.css.jpg'),
  ]);


  return (
    <view style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{flex: 0, alignItems: 'center', justifyContent:'center'}}>
      <Text style={{fontWeight: 'bold', fontSize: 25}}>welcome{NameGet}{SurnameGet}</Text>
      <Text>Please choose a language:</Text>
    </View>

    <View style={styles.radioContainer}>
      <View style={styles.radioGroup}>
        <View style={styles.radioButton}>
          <RadioButton.Android
            value="1"
            status={selectedValue == "1" ? 'checked': 'unchecked'}

            onPress={() => setSelectedValue('1')}
          
            color= "#ff0080"
          />
          <Text style={styles.radioLabel}>React Native</Text>
        </View>
        
      </View>
        <View style={styles.radioButton}>
          <RadioButton.Android
            value="1"
            status={selectedValue == "2" ? 'checked': 'unchecked'}

            onPress={() => setSelectedValue('2')}
          
            color= "#ff0080"
          />
          <Text style={styles.radioLabel}>Kotlin</Text>
        
        </View>
        <View style={styles.radioButton}>
          <RadioButton.Android
            value="1"
            status={selectedValue == "3" ? 'checked': 'unchecked'}

            onPress={() => setSelectedValue('3')}
          
            color= "#ff0080"
          />
          <Text style={styles.radioLabel}>HTML-CSS</Text>
        </View>
      </View>
    </view>
  );
};

function ListSkills({navigation, route}: ListSkillsProps){
  const [skills] = useState<string[]>([]);
  const [txtSkill, setSkill] = useState('');

  const renderSkills = () => {
    const arrOutput = [];

    for (let i = 0; i < Skills.length; i++){
      arrOutput.push(
        <Text style={styles.skillText}>
          {skills[i]}
        </Text>
      )
    }
    return arrOutput;
  }

  return(
    //entire app container for everything on the the page
    <view style={styles.appContainer}>
      <view>
        {/* adding ability to scroll down to page */}
        <SafeAreaView>
          <ScrollView>
            {/* assigning Both mainImg and BannerImg styles to our Image */}
            <view style={styles.mainImg}>
              <image style={styles.bannerImg}
                     source={require('./images/banner.jpg')}/>
            </view>
            <text style={styles.welcomeTxt}>List your skills!</text>

            {/* where the user types their skills */}
            <view style={styles.inputContainer}>
              <TextInput style={styles.textInput}
                         placeholder= 'Enter your skills'
                         onchangeText={newText => setSkill(newText)}
              />
            </view>

            <view style={styles.inputContainer}>

            </view>
          </ScrollView>
        </SafeAreaView>
      </view>
    </view>
  )
}

function isEmpty(value: any) {
  return(
    (value === null) ||
    (value .hasOwnProperty('length') && value. length === 0) ||
    (value. constructor === Object && Object. keys(value).length === 0)
  )
};

interface FadeInViewProps{
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
  
}

const FadeInView = ({children, style}: FadeInViewProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() =>{
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 4000,
        useNativeDriver: false
      }
    ).start();
 },[fadeAnim])

   return(
    <Animated.View style = {{
      ...(style as object),
      opacity: fadeAnim
    }}>
      {children}

    </Animated.View>
  );
};


const styles = StyleSheet.create({
  welcomeTxt: {
    paddingTop: 50,
    color: "blue",
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center'
  },

  headingTxt: {
    paddingTop: 20,
    color: "Black",
    fontWeight: '600',
    fontSize: 18,
  },

  inputBoxTxt: {
    borderWidth: 1,
  },

  mainImg: {
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 200
  },

  InputFlex:{
    marginTop: 20,
    justifyContent: 'space-evenly'
  },
  redTxt: {
    color: "red",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },

  bannerImg: {
    height: 350,
    alignContent: 'center'
  },

  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#7d7d7d'
  },

  textInput:{
    borderWidth: 1,
    borderColor: '#fca4d1',
    width: '70%',
    margin: 7,
    padding: 5
  },

  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 15
  },

  skillContainer:{
    flex: 5
  },

  skillText: {
    fontSize: 15,
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#8ad2ff'
  }
});
