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
        <View style={{ backgroundColor: 'red', height: '14%', flexDirection: 'row', justifyContent: 'space-between' }}>

            {/* view global - sous view 1 - sous view 1*/}
            <View style={{ backgroundColor: 'yellow', height: '100%', width: '30%' }}>
                <Text> rect </Text>
            </View>
            {/* end view global - sous view 1 - sous view 1*/}

            {/* view global - sous view 1 - sous view 2*/}
            <View style={{ backgroundColor: 'yellow', height: '100%', width: '30%' }}>
                <Text> rect </Text>
            </View>
            {/* end view global - sous view 1 - sous view 2*/}

        </View>
        {/* en view global - sous view 1 */}


        {/* view global - sous view 2 */}
        <View style={{ backgroundColor: 'blue', height: '25%', flexDirection: 'column' }}>


            {/* view global - sous view 2 - sous view 1*/}
            <View style={{ backgroundColor: 'purple', height: '60%', width: '100%', flexDirection: 'row' }}>

                {/* view global - sous view 2 - sous view 1 - sous view 1*/}
                <View style={{ backgroundColor: 'green', height: '100%', width: '60%' }}>

                </View>
                {/* end view global - sous view 2 - sous view 1 - sous view 1*/}


                {/* view global - sous view 2 - sous view 1 - sous view 2*/}
                <View style={{ backgroundColor: 'blue', height: '100%', width: '40%' }}>

                </View>
                {/* end view global - sous view 2 - sous view 1 - sous view 2*/}

            </View>
            {/* end view global - sous view 2 - sous view 1*/}



            {/* view global - sous view 2 - sous view 2*/}
            <View style={{ backgroundColor: 'red', height: '40%', width: '100%', flexDirection: 'column' }}>

                {/* view global - sous view 2 - sous view 2 - sous view 1*/}
                <View style={{ backgroundColor: 'grey', height: '50%', width: '100%' }}>

                </View>
                {/* end view global - sous view 2 - sous view 2 - sous view 1*/}

                {/* view global - sous view 2 - sous view 2 - sous view 2*/}
                <View style={{ backgroundColor: 'yellow', height: '50%', width: '100%' }}>

                </View>
                {/* end view global - sous view 2 - sous view 2 - sous view 2*/}

            </View>
            {/* end view global - sous view 2 - sous view 2*/}

        </View>
        {/* end view global - sous view 2 */}


        {/* view global - sous view 3 */}
        <View style={{ backgroundColor: 'green', height: '46%', flexDirection: 'row' }}>

            {/* view global - sous view 3 - sous view 1*/}
            <View style={{ backgroundColor: 'pink', height: '100%', width: '50%', flexDirection: 'column' }}>

                {/* view global - sous view 3 - sous view 1 - sous view 1*/}
                <View style={{ backgroundColor: 'orange', height: '50%', width: '100%' }}>
                
                </View>
                {/* end view global - sous view 3 - sous view 1 - sous view 1*/}

                {/* view global - sous view 3 - sous view 1 - sous view 2*/}
                <View style={{ backgroundColor: 'purple', height: '50%', width: '100%' }}>
                
                </View>
                {/* end view global - sous view 3 - sous view 1 - sous view 2*/}

            </View>
            {/* end view global - sous view 3 - sous view 1*/}

            {/* view global - sous view 3 - sous view 2*/}
            <View style={{ backgroundColor: 'blue', height: '100%', width: '50%', flexDirection: 'column' }}>
               
                {/* view global - sous view 3 - sous view 2 - sous view 1*/}
                <View style={{ backgroundColor: 'red', height: '50%', width: '100%' }}>
                
                </View>
                {/* end view global - sous view 3 - sous view 2 - sous view 1*/}

                {/* view global - sous view 3 - sous view 2 - sous view 2*/}
                <View style={{ backgroundColor: 'grey', height: '50%', width: '100%' }}>
                
                </View>
                {/* end view global - sous view 3 - sous view 2 - sous view 2*/}
            </View>
            {/* end view global - sous view 3 - sous view 2*/}

        </View>
        {/* end view global - sous view 3 */}


        {/* view global - sous view 4 */}
        <View style={{ backgroundColor: 'yellow', height: '15%', flexDirection: 'row', justifyContent: 'space-between' }}>

           {/* view global - sous view 4 - sous view 1*/}
           <View style={{ backgroundColor: 'grey', height: '100%', width: '30%' }}>
                <Text> rect </Text>
            </View>
            {/* end view global - sous view 4 - sous view 1*/}

            {/* view global - sous view 4 - sous view 1*/}
           <View style={{ backgroundColor: 'red', height: '100%', width: '30%' }}>
                <Text> rect </Text>
            </View>
            {/* end view global - sous view 4 - sous view 1*/}

            {/* view global - sous view 4 - sous view 1*/}
           <View style={{ backgroundColor: 'green', height: '100%', width: '30%' }}>
                <Text> rect </Text>
            </View>
            {/* end view global - sous view 4 - sous view 1*/}

        </View>
        {/* end view global - sous view 4 */}

    </View>
    // end view global
  );
}
