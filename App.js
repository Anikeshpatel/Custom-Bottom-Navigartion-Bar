import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';

import FeedScreen from './src/FeedScreen';
import BottomNavigationBar from './src/components/BottomNavigationBar';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FeedScreen/>
                <View style={{
                    marginLeft: 20,
                    marginRight: 20
                }}>
                <BottomNavigationBar/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    }
});
