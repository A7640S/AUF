import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text, View, Button, TextInput} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function App(){

    const [phone, setPhone]= useState('')
    const getData = async () =>{
        
            try {
                 const value= await AsyncStorage.setItem('@storage_Key', jsonValue)
                alert('bien enregistrer !')
                if(value !==null){
                    setPhone(JSON.parse(value))
                }

              }
              catch (e){
                console.log(e, 'log: Erreurs pendant la souvegarde!')
              }

        
    }
    const removeData = async () =>{
      try {
        await AsyncStorage.removeItem('@storage Key')
        alert('Supprimer !')
      } catch(e){
        console.log(e, 'log: Erreurs pendant la suppression !')
      }
      console.log('Done.')
    }
    return(
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <Text>Read Data</Text>
            <Text>...............................</Text>

            <Text>{phone}</Text>
            <Text>...................</Text>

            <Button
            onPress={()=> getData()}
            title="Get Data"
            />


            <Button
            onPress={()=> removeData()}
            title="Remove Data"
            />
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#8CF1B4',
      alignItems: 'center',
      justifyCotent:'center',
  
    },
  });
