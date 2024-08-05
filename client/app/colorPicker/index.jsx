import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';


export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Pressable>
        <Image style={styles.img} source={require('../../assets/icons/hamburger_button.png')} />
      </Pressable>
      
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
      <Text style={styles.questionText}>What are your three favorite colors?</Text>
    
      <View>
        <Pressable>
            <View style={[{backgroundColor: '#AF2413', alignItems: 'center', borderRadius: 50, width: 100, height: 100}]}></View>
        </Pressable>
        <Pressable>
            <View style={[{backgroundColor: '#E85112', alignItems: 'center', borderRadius: 50, width: 100, height: 100}]}></View>
        </Pressable>
        <Pressable>
            <View style={[{backgroundColor: '#E1AD01', alignItems: 'center', borderRadius: 50, width: 100, height: 100}]}></View>
        </Pressable>
      </View>
      <View>
        <Pressable>
            <View style={[{backgroundColor: '#97BC6F', alignItems: 'center', borderRadius: 50, width: 100, height: 100}]}></View>
        </Pressable>
        <Pressable>
            <View style={[{backgroundColor: '#087278', alignItems: 'center', borderRadius: 50, width: 100, height: 100}]}></View>
        </Pressable>
        <Pressable>
            <View style={[{backgroundColor: '#896F95', alignItems: 'center', borderRadius: 50, width: 100, height: 100}]}></View>
        </Pressable>
      </View>
      <View>
        <Pressable>
            <View style={[{backgroundColor: '#E6A5B7', alignItems: 'center', borderRadius: 50, width: 100, height: 100}]}></View>
        </Pressable>
        <Pressable>
            <View style={[{backgroundColor: '#989692', alignItems: 'center', borderRadius: 50, width: 100, height: 100}]}></View>
        </Pressable>
        <Pressable>
            <View style={[{backgroundColor: '#17191A', alignItems: 'center', borderRadius: 50, width: 100, height: 100}]}></View>
        </Pressable>
      </View>
        <Pressable>
            <Image
            source={require('../../assets/icons/forward_button.png')}
            style={styles.forward}
            />
        </Pressable>
      <View style={styles.progress}>
        <View style={styles.circleNotDone}></View>
        <View style={styles.circleNotDone}></View>
        <View style={styles.circle}></View>
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
  img: {
    height: 50,
    width: 50,
  },
  colorPick: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 15
  },
  containerB: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
});