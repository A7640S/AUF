import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    // view global
    <View 
        style={{ 
            flexDirection: 'column',
            padding: '2%',
            marginTop: '5%'
         }}
    >

        {/* view global - sous view 1 */}
        <View style={{ backgroundColor: 'red', height: '14%' }}>    
            <Text> rectangle </Text>
        </View>
        {/* en view global - sous view 1 */}

        {/* view global - sous view 2 */}
        <View style={{ backgroundColor: 'blue', height: '25%' }}>
            <Text> rectangle </Text>
        </View>
        {/* end view global - sous view 2 */}

        {/* view global - sous view 3 */}
        <View style={{ backgroundColor: 'green', height: '46%' }}>
            <Text> rectangle </Text>
        </View>
        {/* end view global - sous view 3 */}

        {/* view global - sous view 4 */}
        <View style={{ backgroundColor: 'yellow', height: '15%' }}>
            <Text> rectangle </Text>
        </View>
        {/* end view global - sous view 4 */}

    </View>
    // end view global
  );
}
