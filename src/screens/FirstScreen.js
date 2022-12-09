import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function FirstScreen({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} style="auto" />
      <Text>FirstScreen</Text>
      <Button  
        onPress={ () => {
            navigate('Second Screen')
        }}
      title="Go to Second Screen" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3AA163',
    alignItems: 'center',
    justifyContent: 'center',
  },
});