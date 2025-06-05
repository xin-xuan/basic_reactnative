import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { movieData } from '../../data/MovieData';
import { ShowMovie } from '../components/MovieComponent';

const HomeScreen = () => {

    const [recommended, setRecommended] = useState([]);
    const [mostViewed, setMostViewed] = useState([]);

    const compareRating = (a, b) => {
        const ratingA = a.rating;
        const ratingB = b.rating;

        if (ratingA > ratingB) {
            return -1;
        } else if (ratingA < ratingB) {
            return 1;
        } else {
            return 0;
        }
    };

    const compareViewers = (movieA, movieB) => {
        const viewersA = movieA.viewers;
        const viewersB = movieB.viewers;

        if (viewersA > viewersB) {
            return -1;
        } else if (viewersA < viewersB) {
            return 1;
        } else {
            return 0;
        }
    };

    useEffect(() => {
        const sortedRecommended = [...movieData].sort(compareRating);
        setRecommended(sortedRecommended);

        const sortedMostViewed = [...movieData].sort(compareViewers);
        setMostViewed(sortedMostViewed);
    }, []);

    return (
        <View style={styles.mainContainer}>

            <FlatList
                data={movieData}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.flatListContainer}
                renderItem={({ item }) => {

                    return (
                        <View style={styles.dataContainer}>

                            <Image
                                style={styles.movieImage}
                                source={{ uri: item.imageLink }}
                            />

                            <View style={styles.movieDescriptionContainer}>

                                <Text style={styles.title}>{item.title}</Text>
                                <View style={styles.yearContainer}>
                                    <Text>{item.year}</Text>
                                </View>

                                <Text>{item.rating}</Text>
                            </View>

                        </View>
                    )
                }}

                ListHeaderComponent={
                    <View>

                        <View style={styles.mainCategoryContainer}>
                            <View style={styles.categoryContainer}>
                                <Text style={styles.categoryText}>
                                    Most Viewed
                                </Text>
                            </View>
                        </View>

                        <FlatList
                            horizontal
                            data={mostViewed}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => {
                                return (
                                    <ShowMovie
                                        image={{ uri: item.imageLink }}
                                        title={item.title}
                                        viewers={item.viewers}
                                    />
                                )
                            }}
                        />

                        <View style={styles.mainCategoryContainer}>
                            <View style={styles.categoryContainer}>
                                <Text style={styles.categoryText}>
                                    Recommended
                                </Text>
                            </View>
                        </View>

                    </View>
                }

                ListFooterComponent={
                    <Text>
                        An array of objects lets you store multiple
                        values in a single variable. It stores a fixed-
                        size sequential collection of elements of
                        the same type. An array is used to store a
                        collection of data,but it is often more useful
                        to think of an array as a collection of
                        variables of the same type.
                    </Text>
                }

            />


        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },

    flatListContainer: {
        padding: 8
    },

    movieImage: {
        width: 130,
        height: 200,
        borderRadius: 10
    },

    dataContainer: {
        margin: 8,
        borderColor: '#96ceb4',
        borderWidth: 2,
        borderRadius: 10,
        padding: 16,
        flexDirection: 'row'
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },

    movieDescriptionContainer: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 8
    },

    yearContainer: {
        marginTop: 8,
        marginBottom: 8,
        flexDirection: 'row'
    },
    mainCategoryContainer: {
        marginTop: 8,
        marginLeft: 8,
        marginRight: 8,
        flexDirection: 'row'
    },
    categoryContainer: {
        flex: 1
    },
    categoryText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default HomeScreen;