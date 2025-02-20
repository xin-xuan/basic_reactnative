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
                borderStyle: 'dashed',
                borderRadius: 10,
                borderColor: 'red',
                borderWidth: 1
            }}>
                <Text style={{
                    fontWeight: 'bold'
                }}>
                    Mobile Legends
                </Text>
            </View>
            <View style = {{
                backgroundColor: 'cornflowerblue',
                padding: 10,
                marginTop: 5,
                borderRadius: 10,
                borderStyle: 'dotted',
                borderColor: 'red',
                borderWidth: 1
            }}>
                <Text style = {{
                    fontWeight: 'bold'
                }}>
                    PUBG
                </Text>
            </View>
        </View>
    )
};

export default SecondScreen;