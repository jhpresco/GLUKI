import { Link } from 'expo-router';
import { Text, View, StyleSheet, Image, Button, TouchableOpacity, Pressable, Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window');
const baseWidth = 375;
const baseHeight = 926;

const horizontalScale = (size) => (width / baseWidth) * size;
const verticalScale = (size) => (height / baseHeight) * size;
const moderateScale = (size, factor = 0.5) => size + (horizontalScale(size) - size) * factor;

export default function Profilepage () {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/icons/Gluki.png')} />            
            
            <Link href='../profile_info'>
                <Pressable style={[
                    {
                        backgroundColor: '#62C4DF',

                    },
                    styles.buttonStyle
                    ]}>
                    <Image style={[styles.profileStyle]} source={require('../../assets/icons/profile_icon.png')}/>
                    <Text style={styles.textStyle}>Profile</Text>
                </Pressable>
            </Link>

            <Link href=''>
                <Pressable style={[
                    {
                        backgroundColor: '#D01C1F',

                    },
                    styles.buttonStyle
                    ]}>
                    <Image style={[styles.settingStyle]} source={require('../../assets/icons/settings.png')}/>
                    <Text style={styles.textStyle}>Settings</Text>
                </Pressable>
            </Link>
            
            
            <View style={styles.bottomTab}>
                <Image style={{width: horizontalScale(375), height: verticalScale(120),}} source={require('../../assets/icons/bottom-tab.png')}/>
            </View>

            <View style={styles.gameIcon}>
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
    container: {
      alignItems: 'center',
      padding: 16,
      flex: 1,
    },

    buttonStyle: {
        width: 343,
        height: 77,
        marginTop: 100,
        borderRadius: 18.67,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },

    profileStyle:  {
        height: 55,
        width: 55,
        marginRight: 50,
        marginLeft: 10,
        tintColor: 'white'
        
    },

    settingStyle: {
        height: 55,
        width: 55,
        marginRight: 50,
        marginLeft: 10,
    },
  
    logo: {
      height: 169,
      width: 165,
      marginTop: 77,
    },

    textStyle: {
        fontWeight: "bold",
        color: 'white',
        textAlign: 'center',
        fontSize: 34,
    },


    bottomTab: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        alignItems: 'center',
        
    },

    gameIcon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        marginBottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        
        
    },

});