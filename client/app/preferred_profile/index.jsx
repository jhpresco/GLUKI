import { Text,View, StyleSheet, Image, Button, ScrollView, Pressable, TouchableOpacity } from 'react-native';

export default function AssetExample() {
  return (
    <View style={{alignContent: 'flex-start', justifyContent: 'flex-start', marginBottom: 200}}>
      <View style={styles.container}>
        <Pressable>
          <Image style={styles.img} source={require('../../assets/icons/hamburger_button.png')} />
        </Pressable>
      </View>
      <View style={styles.containerB}>
        <Pressable style={{
          marginTop: 0,
          marginBottom: 0,
          width: '100%'
        }}>
          <View style={[{backgroundColor: '#62C4DF', alignItems: 'center', borderRadius: 1}]}>
            <Text style={{ fontWeight: 'bold', fontSize: 25, textAlign: "center", color: 'white' }}>Creating Your Profile</Text>
          </View>
        </Pressable>
      </View>

      <View style={styles.containerB}> 
        <Pressable style={{
          marginTop: 0,
          width: '100%'
        }}>
          <View style={[{backgroundColor: '#D01C1F', alignItems: 'center', borderRadius: 1}]}>
            <Text style={{ fontWeight: 'bold', fontSize: 25, textAlign: "center", color: 'white' }}>Please Select Your Preferred Profile</Text>
          </View>
        </Pressable>
      </View>

      <View style={styles.containerB}>
        <Pressable style={{
          marginTop: 0,
          width: '100%'
        }}>
          <View style={[{backgroundColor: '#00758F', alignItems: 'center', borderRadius: 1}]}>
            <Text style={{ fontWeight: 'bold', fontSize: 25, textAlign: "center", color: 'white' }}>I am a Type 1 Diabetic</Text>
            <Image style={{width: 54, height: 53, marginBottom: 10, tintColor: 'white'}} source={require('../../assets/icons/person.png')}></Image>
          </View>
        </Pressable>
      </View> 

      <View style={styles.containerB}>
        <Pressable style={{
          marginTop: 0,
          width: '100%'
        }}>
          <View style={[{backgroundColor: '#EBAB00', alignItems: 'center', borderRadius: 1}]}>
            <Text style={{ fontWeight: 'bold', fontSize: 25, textAlign: "center", color: 'white' }}>Family, Friends, Caretakers that want to learn more about T1D</Text>
            <Image style={{width: 54, height: 53, marginBottom: 10, tintColor: 'white'}} source={require('../../assets/icons/sugarmonitor.png')}></Image>
          </View>
        </Pressable>
      </View> 
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'left',
    justifyContent: 'left',
    padding: 24,
    
  },
  containerB: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  img: {
    height: 50,
    width: 50,
  },
  img1: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonA: {
    minHeight: 100,
    minWidth: '100%',
  },
  buttonB: {
    height: 300,
    width: 50,
  }
  
});


