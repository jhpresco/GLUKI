import { Text, View, StyleSheet, Image, TextInput ,Pressable} from 'react-native';
import { Link } from 'expo-router'


export default function AssetExample() {
  return (
    <View style={styles.className}>
      <View style={styles.container}>
        <Image source={require('../../assets/icons/Gluki.png')}
          style={{
            resizeMode:"contain",
            height: 190,
            width: 250
          }} />
      </View>
      <View style={styles.bottomhalf}>
        <Text style={{marginBottom: '2%', marginTop: '2%', fontSize: 20}}>Confirmation Code Sent!</Text>
      </View>
      <View style={styles.bottomhalf}>
        <Text style={{fontSize: 14}}>Enter The Confirmation Code</Text>
      </View>
      <View style={styles.bottomhalf}>
        <TextInput style={styles.input} placeholder="Enter Code">
        </TextInput>
      </View>
      <View style={styles.bottomhalf}>
        <Link href="/Forgot_Your_Password/Reset_Password">
            <Pressable style={styles.button}>
                <Text style={{color: 'white', fontSize:18}}>Confirm</Text>
            </Pressable>
        </Link>
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
    height: '10%',
  },
  input: {
    borderColor: "gray",
    width: "90%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  button:{
    backgroundColor: "rgba(10,10,10,.5)", 
    marginTop: 60,
    width: 217, 
    height: 52, 
    borderRadius: 18.67,
    justifyContent: 'center',
    alignItems:'center'
  }
});
