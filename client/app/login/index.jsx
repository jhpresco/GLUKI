import { Text, TextInput, View, StyleSheet, Image, Button, ScrollView, TouchableOpacity } from 'react-native';
import { Link, router } from 'expo-router'
import React from 'react';
const axios = require('axios').default;

async function loginUser(credentials, setToken) {
  try {
    axios.post("http://localhost:5000/login/submit", credentials)
    .then((response)=>{
      console.log(response)
      if(response.data.id != "Error") {setToken(response.data.id)}
      else alert("Incorrect email or password");
    })
    .catch((error) => console.log(error))
  } catch(err) {
    alert(err.message);
    console.log(err.message);
  }
}

export default function Login({ setToken }) {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    credentials = {email: email, password: password}
    loginUser(credentials, setToken)  
  }

  return (
    <ScrollView style={{padding: 24}}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../../assets/Gluki.png')} />
      </View>
      <View>
        <Text style={styles.paragraph}>
          Sign In
        </Text>
      </View>
      <View>
        <TextInput
          style={{
            height: 40,
            borderColor: '#D9DDDC',
            borderWidth: 2,
            marginLeft: 20,
            marginRight: 20
          }}
          onChangeText={setEmail}
          textContentType='emailAddress'
          placeholder="Email"/>
        <TextInput
          style={{
            height: 40,
            borderColor: '#D9DDDC',
            borderWidth: 2,
            marginVertical: 10,
            marginLeft: 20,
            marginRight: 20
          }}
          onChangeText={setPassword}
          textContentType='password'
          placeholder="Password"
        />
      </View>
      <TouchableOpacity
        style={{
          marginLeft: 20,
          marginRight:20
        }}
      >
        <Button
          title="Sign In"
          color="#808080"
          accessibilityLabel = "Sign In to GLUKI Account"
          onPress={handleSubmit}
          style = {{
            padding: 10,
            marginVertical: 10,
            marginLeft: 20,
            marginRight: 20,
          }}
        />
      </TouchableOpacity>
      <View style={{
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <Text style={{
        tmargin: 24,
        marginTop: 10,
        fontSize: 14,
        textAlign: 'center',
        color: "#48494B",
        marginBottom: 10
      }}>Forgot Password?</Text>
      <Link href="/Forgot_Your_Password">
        <Button 
          title=''
          
          color="black"
          style={{
            marginBottom: 50
          }}
        />
        </Link>
      </View>
      <View style={{
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Text style={{
            color:"red",
            fontWeight: 'bold',
            marginLeft: 50,
            marginBottom: 10,
            marginRight: 30
        }}>Need to Register?</Text>
        <Link href="/sign_up">
          <TouchableOpacity>
              <Image style={styles.centerImg} source={require('../../assets/Gluki-finger-prick.png')}/>
          </TouchableOpacity>
        </Link>
      </View>
      <Text></Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "#48494B"
  },
  logo: {
    height: 183,
    width: 162,
  }
});
