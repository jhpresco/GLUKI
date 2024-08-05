import { Link } from 'expo-router';
import { Text, View, StyleSheet, Image, Button, Pressable, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');
const baseWidth = 375;
const baseHeight = 926;

const horizontalScale = (size) => (width / baseWidth) * size;
const verticalScale = (size) => (height / baseHeight) * size;
const moderateScale = (size, factor = 0.5) => size + (horizontalScale(size) - size) * factor;


export default function ProfileInfo () {
    const {width} = Dimensions.get('window');
    return (
        <View style={styles.container}>
            
            <Link href='../profile_page' style={styles.backStyle}>
                <Pressable >
                    <Image source={require('../../assets/icons/Back.png')}/>
                </Pressable>
            </Link>
            

            <View style={styles.pageName}>
                <Text style={styles.profileText}>Profile</Text>
                <Image source={require('../../assets/icons/Gluki.png')} style={{width: 58, height: 66, marginBottom: 30}}/>
            </View>

            {/* <View style={{alignItems: 'center', justifyContent: 'center'}}> */}
                <View style={styles.profileInfo}>
                    <Image style={styles.profileImg} source={require('../../assets/icons/glukiProfile.png')}/>
                    <Text style={{fontWeight: 'bold', fontSize: 14}}>Michael Scott</Text>
                    <Text style={{fontWeight: 'bold', color: '#5151E5', fontSize: moderateScale(14), marginTop: 5}}>BIO</Text>
                    <Text style={{width: horizontalScale(200), textAlign: 'center', marginTop: 10}}>Hi everyone, I am excited to start my journey of managing type 1 diabetes with GLUKI!</Text>
                </View>

                
            {/* </View> */}

            <View style={styles.settings}>
                <Text style={{color: '#62C4DF',fontSize: moderateScale(20), fontWeight: 'bold'}}>Settings:</Text>

                <View style={styles.settingBorder}>
                    <Text style={{fontSize: moderateScale(12), textAlign: 'center'}}>Notification:</Text>
                    <View style={{marginLeft: 150}}>
                        <Text>Allow</Text>
                    </View>
                </View>


        
                <View style={styles.settingBorder}>
                    <Text style={{fontSize: moderateScale(12), textAlign: 'center'}}>Color:</Text>
                    <View style={{marginLeft: 183}}>
                        <Text>Light Blue</Text>
                    </View>
                </View>

                <View style={styles.settingBorder}>
                    <Text style={{fontSize: moderateScale(12), textAlign: 'center'}}>Nickname:</Text>
                    <View style={{marginLeft: 157}}>
                        <Text>SuperGLUKI</Text>
                    </View>
                </View>

                <View style={styles.settingBorder}>
                    <Text style={{fontSize: moderateScale(12), textAlign: 'center'}}>Skin</Text>
                    <View style={{marginLeft: 192}}>
                        <Text>Red GLUKI</Text>
                    </View>
                </View>
                
            </View>

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
        flex: 1,
        position: 'absolute',
        top: 40,
        left: 0,
        right: 0,
        bottom: 0,
        padding: 16,
        alignItems: 'center',
    },

    backStyle: {
        alignSelf: 'flex-start',
        marginLeft: 30,
    },

    pageName: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
    },

    profileText: {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#62C4DF',
        marginRight: horizontalScale(150),
    },

    profileInfo: {
        borderColor: '#0000FF',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: horizontalScale(277),
        height: verticalScale(297),


        
        
    },

    profileImg: {
        borderWidth: 2,
        borderColor: '#5CBAFE',
        borderRadius: 50,
        margin: verticalScale(10),
    },

    settings: {
        marginTop: 60,
        marginLeft: width * 0.1,
        alignSelf: 'flex-start',
        justifyContent: 'space-around',
        width: horizontalScale(100),
        height: verticalScale(100),
       
        
    },

    settingBorder: {
        borderWidth: 1, 
        borderColor: '#5151E5',
        width: horizontalScale(97),
        height: verticalScale(22),
        marginTop: 20, 
        flexDirection: 'row',
        alignItems: 'center',
        
          
        
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
        
        
    }

 
});