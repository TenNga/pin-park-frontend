import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
    return <Text style={styles.textStyle}>This is Home Screen</Text>
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 40
    }
});

export default HomeScreen;