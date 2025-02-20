import React from 'react';
import { View, Text } from 'react-native';

const SecondScreen = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'lavender',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <View style={{
                backgroundColor: 'skyblue',
                padding: 10,
                marginBottom: 5,
                borderStyle: 'dashed'
            }}>
                <Text>
                    Mobile Legends
                </Text>
            </View>
            <View style = {{
                backgroundColor: 'cornflowerblue',
                padding: 10,
                marginTop: 5,
                borderStyle: 'dotted'

            }}>
                <Text>
                    PUBG
                </Text>
            </View>
        </View>
    )
};

export default SecondScreen;