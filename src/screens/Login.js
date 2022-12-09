import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Animated } from 'react-native';
import { auth } from '../../firebase-config'
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {

    const [ email, setEmail ] = useState('')
    const [ pwd, setPwd ] = useState('')

    const position = new Animated.ValueXY({x:20,y:20})

    Animated.spring(position, {
        toValue: {x: 0, y: 0},
        speed: 1,
        bounciness: 30
    }).start()

    const handleLogin = async () => {
        signInWithEmailAndPassword(auth, email, pwd)
          .then( async userCredentials => {
            const currentUser = userCredentials.user;
            
            console.log('dLoge with:',currentUser);
            alert('Loged')
        })
        .catch(error => alert(error.message))
    }

  return (
    <View style={styles.container}>
         <StatusBar style="light" />
        <View style={{ 
            flexDirection: 'column',
         }}>
            <Animated.View style={{
                alignItems: 'center',
                transform: [
                    {translateX: position.x},
                    {translateY: position.y}
                ]
            }}>
                 <Text style={{ 
                    fontSize: 90,
                    color: 'white',
                  }} >Login</Text>
            </Animated.View>
           
        </View>
        <Animated.View style={{ 
            transform: [
                {translateX: position.x},
                {translateY: position.y}
            ]
         }}>
            <View  style={{ 
                margin: 40
             }}>
                <TextInput 
                    style={{ 
                        height: 40, 
                        borderColor: 'gray', 
                        backgroundColor: 'white',
                        borderWidth: 1,
                        borderRadius: 20,
                        paddingHorizontal: 10,
                        placeholderTextColor: 'gray',
                        margin: 10
                    }}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Votre Email"
                />
                <TextInput 
                    style={{ 
                        height: 40, 
                        borderColor: 'gray', 
                        backgroundColor: 'white',
                        borderWidth: 1,
                        borderRadius: 20,
                        paddingHorizontal: 10,
                        placeholderTextColor: 'gray',
                        margin: 10

                    }}
                    onChangeText={setPwd}
                    value={pwd}
                    placeholder="Votre mot de passe !"
                />
            </View>
            <TouchableOpacity 
                style={{ 
                    alignItems: "center",
                    backgroundColor: "#97DFC3",
                    padding: 10,
                    borderRadius: 20,
                    width: 130,
                    alignSelf: 'center'
                 }}
                 onPress={() => handleLogin()}

            >
                <Text>Connexion</Text>
            </TouchableOpacity>
        </Animated.View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03242C',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10
  },
});
