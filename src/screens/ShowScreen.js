import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext'
import { FontAwesome } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context)

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'))

    return (
        <View>
            <Text style={styles.label}>{blogPost.title} - {blogPost.id}</Text>
            <Text style={styles.content}>{blogPost.content}</Text>
        </View>
    );
}

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
                <FontAwesome style={styles.icon} name="pencil" />
            </TouchableOpacity>
        ),
    };
}

const styles = StyleSheet.create({
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5,
        fontWeight: 'bold'
    },
    content: {
        fontSize: 18,
        marginLeft: 5
    },
    icon: {
        fontSize: 24,
        marginRight: 10
    }
})

export default ShowScreen;