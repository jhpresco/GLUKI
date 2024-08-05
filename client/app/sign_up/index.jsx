import { Text, View, StyleSheet, Image, TextInput ,TouchableOpacity, Pressable} from 'react-native';
import { Link, router } from 'expo-router'
import { useState } from 'react';
import { ValidationError } from "../../utility/errors"
import { lowercases, uppercases, numbers, special, email, emails } from "../../utility/regExps"
//import '@rneui/themed';
const axios = require('axios').default;


export default function SignUp() {
  
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  function validatePassword(password, confirmPassword) {
    if (password != confirmPassword) {
      throw new ValidationError("Passwords do not match!");
    }

    // Password must be 8 characters long with upper, lower, number, and special.
    let isValid = lowercases.test(password) &&
                  uppercases.test(password) &&
                  numbers.test(password)    &&
                  special.test(password)    &&
                  password.length >= 8

    if (!isValid) {
      throw new ValidationError("Password Criteria Not Met")
    }
  }

  function validateEmail(email) {
    let isValid = emails.test(email);

    if (!isValid) {
      throw new ValidationError("Email is invalid.");
    }
  }

  function validateForm(password, confirmPassword, email) {
    try {
      validateEmail(email);
      validatePassword(password, confirmPassword);
    } catch(err) {
      throw err;
    }
  }

  function submitForm() {
    try {
      validateForm(password, confirmPassword, email);
      axios.post("http://localhost:5000/accounts/add", {email: email, password: password, name: name})
      .then((response)=>console.log(response))
      .catch((error) => console.log(error))
      router.push("/verify_email");
    } catch(err) {
      alert(err.message);
      console.log(err.message);
    }
  }

  const [isSecureEntry,setIsSecureEntry]=useState(true);
  const [isSecureEntry2,setIsSecureEntry2]=useState(true);
  return (
    <View style={styles.className}>
      <View style={styles.container}>
        <Image source={require('../../assets/icons/full_logo.png')}
          style={{
            resizeMode:"contain",
            height: 260,
            width: 350
          }} />
      </View>
      <View style={styles.bottomhalf}>
        <View>
          <Text style={styles.wordset}>
            Sign Up
          </Text>
        </View>
      </View>
      <View style={styles.bottomhalf2}>
        <View style = {styles.fullname}>
          <TextInput style={{fontSize: 35}} placeholder='Full Name' placeholderTextColor='gray' onChangeText={setName}/>
        </View>
      </View>
      <View style={styles.bottomhalf2}>
        <View style = {styles.fullname}>
          <TextInput style={{fontSize: 35}} placeholder='Email' placeholderTextColor='gray' onChangeText={setEmail}/>
        </View>
      </View>
      <View style={styles.bottomhalf2}>
        <View style = {styles.fullname}>
          <TextInput style={{fontSize: 24}} placeholder='Password' placeholderTextColor='gray' secureTextEntry={isSecureEntry} onChangeText={setPassword}/>
          <TouchableOpacity style={{textAlign: 'right' }} onPress={()=>{
            setIsSecureEntry((prev)=>!prev);
            }}>
            <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomhalf2}>
        <View style = {styles.fullname}>
          <TextInput style={{fontSize: 24}} placeholder='Confirm Password' placeholderTextColor='gray' secureTextEntry={isSecureEntry2} onChangeText={setConfirmPassword}/>
          <TouchableOpacity style={{textAlign: 'right' }} onPress={()=>{
            setIsSecureEntry2((prev)=>!prev);
            }}>
            <Text>{isSecureEntry2 ? 'Show' : 'Hide'}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomhalf2}>
        <View style = {styles.fullname}>
          <Pressable onPressIn={submitForm} style={{backgroundColor:'rgba(10,10,10,.5)'}}>
            <Text style={{textAlign: 'center', color: 'white', fontSize: 35}}>Create Your Account</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.bottomhalf2}>
        <View>
          <Text style={{textAlign: 'center', color: 'black', fontSize: 14}}>By creating an account, you agree to our Terms</Text>
        </View>
      </View>
      <View style={styles.bottomhalf2}>
        <View>
          <Text style={{textAlign: 'center', color: 'black', fontSize: 14}}>Already have an account Sign in</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  className:{
    backgroundColor: "#FFFFFF",
    width: '100%',
    height: '100%'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',

  },
  bottomhalf:{

    flexDirection: 'row',
    justifyContent: 'center',
    height: '10%'

  },
  wordset:{
    fontWeight: 'normal',
    textAlign: 'center',
    fontSize: 36
  },
  bottomhalf2:{

    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10

    

  },
  fullname:{
    backgroundColor: 'rgba(0,0,0,.1)',
    flex: 1
    
  },
});