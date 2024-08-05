import { Pressable, View, StyleSheet, Image, ScrollView } from 'react-native';
import { Link } from 'expo-router'

export default function Index() {
  return (
    <ScrollView>
    <View  style={styles.container}>
        <Image style={styles.header} source={require('../../assets/Gluki-words.png')}/>
      </View>
      
      <View style={styles.container}>
        <Image style={styles.centerImg1} source={require('../../assets/Gluki.png')} />
      </View>  
      <View  style={styles.container}>
      <Link href="/home">
        <Pressable>
           <Image style={styles.centerImg} source={require('../../assets/Gluki-finger-prick.png')}/>
        </Pressable>
      </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  header: {
    height: 185,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain'
  },
  centerImg1: {
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
    height: 320,
    width: 283
  },
  centerImg: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    resizeMode: 'contain',
    width: 150
  }
});
