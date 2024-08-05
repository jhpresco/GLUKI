import { Text, View, StyleSheet, Image, Button, TouchableOpacity, Pressable } from 'react-native';
import { Link } from 'expo-router'
import React from 'react'
import Login from '../login';

export default function Index() {
  const [token, setToken] = React.useState("");

  if(!token) {
    return <Login setToken={setToken}/> 
  }

  console.log(token)

  return (
    <View style={styles.container}>
      <View style = {styles.row}>
        <Link href = "/home">
          <Image style={styles.settingsButton} source={require('../../assets/icons/hamburger_button.png')} />
        </Link>
        <Image style={styles.logo} source={require('../../assets/icons/Gluki.png')} />
        <Image style={styles.nextButton} source={require('../../assets/icons/forward_button.png')} />
      </View>
      <View style={styles.bigButton}>
        <Text style={styles.bigButtonText}>Sweet Logic Games</Text>
      </View>
      <Pressable style = {styles.row}>
        <View style={[styles.smallButton, { backgroundColor: 'grey' }]}>
          <Text style={styles.buttonText}>{'Play\n Insul-IN'}</Text>
          </View>
          <View style={[styles.smallButton, { backgroundColor: '#d0b82f' }]}>
            <Text style={styles.buttonText}>{'Play\n Gluki Gates'}</Text>
          </View>
      </Pressable>
      <View style = {styles.row}>
        <Image style={styles.gamesImages} source={require('../../assets/icons/Gluki_Bubble.png')} />
        <Image style={styles.gamesImages} source={require('../../assets/icons/Gluki_Gates.png')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },

  settingsButton: {
    height: 50,
    width: 50,
    marginTop: 20,
    //justifyContent: 'left',
  },

  bigButton: {
    height: 225,
    width: 300,
    borderRadius: 18.67,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 5,
    backgroundColor: "red",
  },

  smallButton: {
    //flexWrap: 'wrap',
    //alignSelf: 'flex-start',
    height: 100,
    width: 150,
    borderRadius: 18.67,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 5,
    //backgroundColor: "#6244DF",
    marginHorizontal: 20
  },


  logo: {
    height: 150,
    width: 150,
    marintop: 20,
    marginHorizontal: 60,
  },

  nextButton: {
    height: 50,
    width: 50,
    marginTop: 20,
    //alignSelf: 'center',
  },

  buttonText: {
    //flex: 1,
    //flexWrap: 'wrap',
    fontSize: 25,
    fontWeight: 'bold',
    color: "white",
    textAlign: "center",
    width: 300,
  },

  bigButtonText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: "white",
    textAlign: "center",
    width: 300,
  },

  gamesImages: {
    height: 100,
    width: 100,
    marginHorizontal: 45
  }


});