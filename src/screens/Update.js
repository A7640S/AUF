import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function Update() {

    const [ email, setEmail ] = useState('')
    const [ pwd, setPwd ] = useState('')
    const [ name, setName ] = useState('')

  return (
    <View style={styles.container}>
         <StatusBar style="auto" />
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
            >
                <Text>Update</Text>
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
