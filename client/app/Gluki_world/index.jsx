import { Text, View, StyleSheet, Image,} from 'react-native';


export default function AssetExample() {
  return (
    <View style={styles.frame}>
        <View style={styles.format}>
            <View style={styles.center}>
                <Text style={styles.centerWord}>GLUKI's World</Text>
            </View>
        </View>
        <View style={styles.buffer}></View>
        <View style={styles.format}>
            <View style={styles.options}>
                <View style={styles.internal}>
                    <Image source={require('../../assets/icons/game_icon.png')} style={{resizeMode:"contain", height: 60, width: 60 }}/>
                </View>
            </View>
            <View style={styles.buffer}></View>
            <View style={styles.options2}>
                <View style={styles.internal}>
                    <Image source={require('../../assets/icons/journal.png')} style={{resizeMode:"contain", height: 60, width: 60 }}/>
                </View>
            </View>
        </View>
        <View style={styles.format}>
            <Text>Logic Games</Text>
            <View style={styles.buffer}></View>
            <Text> T 1D& Me</Text>
        </View>

        <View style={styles.format}>
            <View style={styles.options3}>
                <View style={styles.internal}>
                    <Image source={require('../../assets/icons/t1dfriends.png')} style={{resizeMode:"contain", height: 60, width: 60 }}/>
                </View>
        
            </View>
            <View style={styles.buffer}></View>
            <View style={styles.options4}>
                <View style={styles.internal}>
                    <Image source={require('../../assets/icons/rewards.png')} style={{resizeMode:"contain", height: 60, width: 60 }}/>
                </View>
            </View>
        </View>
        <View style={styles.format}>
            <Text>My T 1D Friends</Text>
            <View style={styles.buffer}></View>
            <Text>My Rewards</Text>
        </View>


        <View style={styles.nav}>
            <Image style={{width: 58, height: 58}} source={require('../../assets/icons/game_icon.png')}/>
            <Image style={{width: 58, height: 58}} source={require('../../assets/icons/journal.png')}/>
            <View style={{alignItems: 'center', justifyContent: 'center', bottom: 35}}>
                <Image style={{width: 55, height: 55}} source={require('../../assets/icons/glukiworld.png')}/>
            </View>
            <Image style={{width: 55, height: 55,}} source={require('../../assets/icons/t1dfriends.png')}/>
            <Image style={{width: 55, height: 55}} source={require('../../assets/icons/rewards.png')}/>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  frame:{
    backgroundColor: "#FFFFFF",
    width: '100%',
    height: '100%'
  },
  format:{
    flexDirection: 'row',
    justifyContent: 'center',

  },
  center:{
    backgroundColor: "#D01C1F", 
    marginTop: 10,
    width: 217, 
    height: 152, 
    borderRadius: 18.67,
    justifyContent: 'center',
    alignItems:'center'
  },
  centerWord:{
    fontSize: 25,
    fontWeight: 'bold',
    color: "white",
  },
  buffer:{
    padding: '3%'
  },
  options:{
    backgroundColor: "#62C4DF", 
    width: 80, 
    height: 80, 
    borderRadius: 18.67,
    justifyContent: 'center',
    alignItems:'center',
  },
  options2:{
    backgroundColor: "#EBAB00", 
    width: 80, 
    height: 80, 
    borderRadius: 18.67,
    justifyContent: 'center',
    alignItems:'center',
  },
  options3:{
    backgroundColor: "#A1AA3D", 
    width: 80, 
    height: 80, 
    borderRadius: 18.67,
    justifyContent: 'center',
    alignItems:'center',
  },
  options4:{
    backgroundColor: "#00758F", 
    width: 80, 
    height: 80, 
    borderRadius: 18.67,
    justifyContent: 'center',
    alignItems:'center',
  },
  
  options5:{
    backgroundColor: "#D01C1F", 
    width: 80, 
    height: 80, 
    borderRadius: 18.67,
    justifyContent: 'center',
    alignItems:'center',
  },
  internal:{
    backgroundColor: "#FFFFFF", 
    width: 67, 
    height: 67, 
    borderRadius: 18.67,
    justifyContent: 'center',
    alignItems:'center',
  },
  nav: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        marginBottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        
        
    },
});
