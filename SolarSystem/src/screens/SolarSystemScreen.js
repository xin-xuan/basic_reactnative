import React from 'react';
import { View, Text, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native';
import { PlanetComponent } from './components/PlanetComponent';

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
                <PlanetComponent
                    planetName = 'Mercury'
                    planetDescription = 'Mercury is the fastest planet, zipping around the sun every 88 earth day'
                    planetImage = {require('../../assets/images/mercury.png')}
                />
            </ScrollView>

        </View>
    )
};
export default SolarSystemScreen;