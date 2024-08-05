import { Text, TextInput, View, StyleSheet, Image, Button, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import { Link } from 'expo-router'

export default function AssetExample() {
  return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../../assets/icons/Gluki.png')} />
        <Text style={styles.title}>Please enter the code we sent to your email</Text>
        <View style={styles.row}>
            <TextInput
                style={{
                    height: 40,
                    borderColor: '#D9DDDC',
                    borderWidth: 2,
                    marginLeft: 20,
                    marginRight: 20,
                }}
                defaultValue=""/>
            <Pressable>
                <View style={[styles.smallButton, { backgroundColor: 'grey' }]}>
                <Text style={styles.buttonText}>{'Submit'}</Text>
                </View>
            </Pressable>
        </View>
      </View>

  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
    },
    title: {
        fontSize: 20,
        //fontWeight: 'bold',
        marginVertical:5,
      },
      logo: {
        height: 128,
        width: 128,
        marginVertical:20,
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
      },
      smallButton: {
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 5,

      },
      buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "white",
        textAlign: "center",
      },
});