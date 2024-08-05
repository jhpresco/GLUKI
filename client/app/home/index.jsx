import { Text, View, StyleSheet, Image, Button, Pressable } from 'react-native';
import { Link } from 'expo-router'

export default function AssetExample() {
  return (
    <View style={styles.container}>
      
      <Image style={styles.logo} source={require('../../assets/icons/Gluki.png')} />
      <Text style={styles.covertext}>Hi! My name is GLUKI and I am here to guide you on the ins and outs of Type 1 Diabetes.</Text>
      <Text style={styles.title}>The World of GLUKI</Text>

      <Link href = "/games">
      <View style={{backgroundColor: "#62C4DF", width: 322, height: 72, borderRadius: 18.67, 
      justifyContent: 'center', 
      alignItems: 'center',
      marginTop: 5,
      marginBottom: 5,
      }}>
        <Text style={styles.buttonText}>Play Sweet Logic Games</Text>
      </View>
      </Link>

      <View style={{backgroundColor: "#FFD942", width: 322, height: 72, borderRadius: 18.67, 
      justifyContent: 'center', 
      alignItems: 'center',
      marginTop: 5,
      marginBottom: 5,
      }}>
        <Text style={styles.buttonText}>Collect Skins Earn Rewards</Text>
      </View>

       <View style={{backgroundColor: "#A1AA3D", width: 322, height: 72, borderRadius: 18.67, 
      justifyContent: 'center', 
      alignItems: 'center',
      marginTop: 5,
      marginBottom: 5,
      }}>
        <Text style={styles.buttonText}>Meet other TID's</Text>
      </View>

      <View style={{backgroundColor: "#A3B0A7", width: 322, height: 72, borderRadius: 18.67, 
      justifyContent: 'center', 
      alignItems: 'center',
      marginTop: 5,
      marginBottom: 5,
      }}>
        <Text style={styles.buttonText}>Express Your Feelings about T1D</Text>
      </View>

      <Text style={styles.covertext}>Increase Your T1D IQ & Become an Expert! Explore, Sign-up & Subscribe!</Text>
      <Link href="/login">
        <Pressable
            style={{backgroundColor: "#D01C1F", width: 317, height: 72, borderRadius: 18.67,
            justifyContent: 'center',
            alignItems:'center'
          }}>
          <Text style={styles.signinText}>Sign in</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  covertext: {
    marginBottom: 10,
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "#028f8e",
  },
  title: {
    fontSize: 30,
    color: "#dd3224",
    fontWeight: 'bold',
  },

  logo: {
    height: 128,
    width: 128,
    marginTop: 20,
  },

  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: "white",
    textAlign: "center",
    width: 300,
  },

  signinText: {
    fontSize: 25,
    color: 'white',
    textAlign:'center',
    
  },

  buttonContainer: {
    marginHorizontal: 50,
    marginVertical: 10,
    width: 280,
    //height: 100,
  },
});