import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, TextInput ,Pressable} from 'react-native';
import { Link } from 'expo-router'


export default function AssetExample() {
  const [isSecureEntry,setIsSecureEntry]=useState(true);
  const [isSecureEntry2,setIsSecureEntry2]=useState(true);
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
        <Text style={{marginBottom: '8%', marginTop: '4%', fontSize: 20}}>Confirmed Password Reset!</Text>
      </View>
      <View style={styles.bottomhalf}>
        <Text style={{fontSize: 14}}>Enter Your New Password</Text>
      </View>
      <View style={styles.bottomhalf}>
        <TextInput style={styles.input} placeholder="New Password" placeholderTextColor='gray' secureTextEntry={isSecureEntry}/>
          <Pressable style={{textAlign: 'right' }} onPress={()=>{
            setIsSecureEntry((prev)=>!prev);
            }}>
            <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
            </Pressable>
      </View>
      <View style={styles.bottomhalf}>
        <Text style={{fontSize: 14, margin: '4%'}} >Confirm Password</Text>
      </View>
      <View style={styles.bottomhalf}>
      
        <TextInput style={styles.input} placeholder="New Password" placeholderTextColor='gray' secureTextEntry={isSecureEntry2}/>
          <Pressable style={{textAlign: 'right' }} onPress={()=>{
            setIsSecureEntry2((prev)=>!prev);
            }}>
            <Text>{isSecureEntry2 ? 'Show' : 'Hide'}</Text>
            </Pressable>
      </View>
      <View style={styles.bottomhalf}>
        <Link href="../login">
            <Pressable style={styles.button}>
                <Text style={{color: 'white', fontSize:18}}>Confirm New Password</Text>
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