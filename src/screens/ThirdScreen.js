import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function ThirdScreen() {
  return (
    <View style={styles.container}>
      <Text>Third Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CB1975',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
