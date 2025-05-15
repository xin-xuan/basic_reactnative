import React from 'react';
import { View, Text, Image } from 'react-native';

export const PlanetComponent = (props) => {
    const { planetName, planetDescription, planetImage } = props;
    return (
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
                source={planetImage}

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
                    {planetName}
                </Text>

                <Text>
                    {planetDescription}
                </Text>
            </View>

        </View>
    )
}