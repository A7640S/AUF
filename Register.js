import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { auth, db } from '../../firebase-config'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";


export default function Register() {

    const [ email, setEmail ] = useState('')
    const [ pwd, setPwd ] = useState('')
    const [ name, setName ] = useState('')

    const handleRegister = async () => {
        createUserWithEmailAndPassword(auth, email, pwd)
          .then( async userCredentials => {
            const currentUser = userCredentials.user;

            const docUser = await addDoc(collection(db, "users"), {
                userId: currentUser.uid,
                name: name,
                email: currentUser.email,
              });
            
            console.log('Registered with:',currentUser);
            alert('Registered')
        })
        .catch(error => alert(error.message))
    }

  return (
    <View style={styles.container}>
         <StatusBar style="light" />
        <View style={{ 
            flexDirection: 'column',
         }}>
            <View style={{
                alignItems: 'center',
            }}>
                 <Text style={{ 
                    fontSize: 90,
                    color: 'white',
                  }} >Register</Text>
            </View>
           
        </View>
        <View>
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
                    onChangeText={setName}
                    value={name}
                    placeholder="Votre Nom"
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

                 onPress={() => handleRegister()}
            >
                <Text>create account</Text>
            </TouchableOpacity>
        </View>
      
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
