import React from 'react';
import { View, Text, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native';

const SolarSystemScreen = () => {
    return (
        <View style={{ flex: 1 }}>

            <View style={{
                padding: 16,
                alignItems: "center"
            }}>

                <Text style={{
                    fontSize: 30,
                    fontFamily: 'serif',
                    textDecorationLine: 'underline'
                }}>SOLAR SYSTEM</Text>
            </View>

            <ScrollView>
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: 'wheat',
                    padding: 16,
                    margin: 16,
                    borderRadius: 20,
                    borderColor: 'green',
                    borderWidth: 1
                }}>
                    <Image
                        style={{
                            width: 100,
                            height: 100
                        }}
                        source={require('../../assets/images/earth.png')}

                    />

                    <View style={{
                        flex: 1,
                        marginLeft: 8,
                        marginRight: 8,
                        justifyContent: 'center'
                    }}>

                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold'
                        }}>
                            Earth
                        </Text>

                        <Text>
                            Earth is the only place we know of so far that's inhabited by living thing.
                        </Text>
                    </View>

                </View>
            </ScrollView>

        </View>
    )
};
export default SolarSystemScreen;