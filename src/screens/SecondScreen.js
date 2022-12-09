import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function SecondScreen({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <Text>Second Screen</Text>
      <StatusBar hidden={true} style="auto" />
      <Button  
        onPress={ () => {
            navigate('Third Screen')
        }}
      title="Go to Third Screen" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CEA163',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
