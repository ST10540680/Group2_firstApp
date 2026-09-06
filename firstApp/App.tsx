import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, SafeAreaView, ScrollView, Animated, ViewStyle, StyleProp} from 'react-native';
import {Children, ReactNode, useEffect, useRef, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackScreenProps} from '@react-navigation/native-Stack;
import { ImageSourcePropType } from 'react-native/types_generated/index';

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

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component ={Mainscreen}/>
        <Stack.Screen name = "View" component ={ViewDetails}/>
        <Stack.Screen name = "ListSkills" component ={ListSkills}/>
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

      <FadeInView>
        <Text style={styles.redTxt}>{Error}</Text>
        <View style={styles.InputFlex}>
          <Text style= {styles.headingTxt}>Enter your name:</Text>
          <TextInput style={styles.inputBoxTxt} 
          placeholder = "Helder"
          OnChangeText={(text)=> SetName(text)}/>

          <Text style={styles.headingTxt}>Enter your surname:</Text>
          <TextInput style={styles. inputBoxTxt}
          placeholder = "Filipe"
          onChangeText={(text)=> setSurname(text)}/>
        </View>
     </FadeInView>
     

      <Button title= "Add User"
      onPress= {() => {

        if (isEmpty(Name) || isEmpty(Surname) == false)
        {
          navigation.navigate('View', {
            NameSend : Name,
            SurnameSend : Surname 
          });
          setError('');
        }
        else{
          setError('Fields are empty!');
        }

        console.log("Name:" + Name + "Surname: " + Surname);
      }}/>

      <StatusBar style="auto" />
      </ScrollView>
      </SafeAreaView>
    </View>
  );
}

function ViewDetails ({ navigation, route }: ViewDetailsProps){
  
  const NameGet = route.params.NameSend;
  const SurnameGet = route.params.surnameSend;

  const[iSelected, setIntValue]=useState(0);
  const[iSelected, setSelectedValue]=useState('0');

  const [blockArray] = useState<ImageSourcePropType[]>([
    undefined
    require('./images/react.native.png'),
    require('./images/kotlin.png'),
    require('./html.css.jpg'),
  ]);

  return (
    <view style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Name: {NameGet}</Text>
      <Text> Surname: {SurnameGet}</Text>
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
