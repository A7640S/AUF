/*import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text, View, Button, TextInput} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const saveData = async (Value) => {
  console.log(Value, 'log:le numero saisi')
  const jsonValue = JSON.stringify (Value)
    try {
      await AsyncStorage.setItem('@storage_Key', jsonValue)
      alert('bien enregistrer !')
    }
    catch (e){
      console.log(e, 'log: Erreurs pendant la souvegarde!')
    }

} 


export default function App() {
  const [phone, setPhone]= useState('')
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <Text>Write Data</Text>


     <TextInput
     style={{ marginVertical: 10, fontSize: 17 }}
     value={phone}
     placeholder='+223 0000 0000'
     autoCompleteType='tel'
     keyboardType="phone-pad"
     textContentType="telephoneNumber"
     onChangeText={setPhone}
     />
     <Button
      onPress={()=> saveData(phone)}
      title= "Save Data"
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
import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text, View, Button, TextInput} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


const saveData = async (Value) => {
  console.log(Value, 'log:le numero saisi')
  const jsonValue = JSON.stringify (Value)
    try {
      await AsyncStorage.setItem('@storage_Key', jsonValue)
      alert('bien enregistrer !')
    }
    catch (e){
      console.log(e, 'log: Erreurs pendant la souvegarde!')
    }

} 


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
            <Text>Write Data</Text>


     <TextInput
     style={{ marginVertical: 10, fontSize: 17 }}
     value={phone}
     placeholder='+223 0000 0000'
     autoCompleteType='tel'
     keyboardType="phone-pad"
     textContentType="telephoneNumber"
     onChangeText={setPhone}
     />
     <Button
      onPress={()=> saveData(phone)}
      title= "Save Data"
     />
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
  });*/
  import React from 'react';
  import Register from './src/screens/Register';


  export default function App() {
    return(
      <Register/>
    );
  }
