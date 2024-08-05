import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import { Link } from 'expo-router'

export default function Nickname() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/icons/hamburger_button.png')}
          style={styles.options}
        />
        <Image
          source={require('../../assets/icons/full_logo.png')}
          style={styles.logo}
        />
        <View style={styles.creatingProfile}>
          <Text style={styles.titleText}>Creating your Profile</Text>
        </View>
        <Text style={styles.questionText}>What nickname do you want to use?</Text>
        <TextInput
          style={styles.textInput}
        />
          <Pressable>
            <Image
              source={require('../../assets/icons/forward_button.png')}
              style={styles.forward}
            />
          </Pressable>
        <View style={styles.progress}>
          <View style={styles.circle}></View>
          <View style={styles.circleNotDone}></View>
          <View style={styles.circleNotDone}></View>
          <View style={styles.circleNotDone}></View>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center'
    },
    logo: {
      width: 300,
      height: 200,
      resizeMode: 'contain'
    },
    options: {
      width: 50,
      height: 50,
      resizeMode: 'contain',
      alignSelf: 'start',
      margin: 20
    },
    creatingProfile: {
      width: 300,
      backgroundColor: "#62C4DF",
      paddingVertical: 15,
      paddingHorizontal: 15,
      borderRadius: 20,
    },
    titleText: {
      color: "white",
      fontSize: 20,
      textAlign: 'center'
    },
    questionText: {
      color: "#00758F",
      fontSize: 20,
      textAlign: 'center',
      marginTop: 20,
      width: 300,
    },
    textInput: {
      borderBottomWidth: 4,
      width: 240,
      borderBottomColor: "red",
      marginTop: 100,
      paddingHorizontal: 20,
      paddingTop: 10,
      fontSize: 30,
      outlineStyle: 'none',
      textAlign: 'center'
    },
    forward: {
      width: 50,
      height: 50,
      resizeMode: 'contain',
      marginTop: 100
    },
    circle: {
      width: 10,
      height: 10,
      backgroundColor: "red",
      borderRadius: 100
    },
    circleNotDone: {
      width: 10,
      height: 10,
      backgroundColor: "#2899c0",
      borderRadius: 100
    },
    progress: {
      marginTop: 20,
      flex: 1,
      flexDirection: "row",
      width: 100,
      justifyContent: 'space-between'

    }
})
