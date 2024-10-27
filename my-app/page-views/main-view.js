import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; // Importer useNavigation
import styles from '../styles';
import loginView from './login-view';
import createView from './create-view';
import opretView from './create-view';

export default function MainView() {
    const navigation = useNavigation(); // Hent navigation objektet

    return (
        <View style={styles.container}>
            <View style={styles.break}></View>
            <Text style={styles.text}>Log ind eller opret en konto for at fortsætte</Text>
            <View style={styles.break}></View>

            <TouchableOpacity 
                style={styles.loginButton} 
                onPress={() => navigation.navigate('Login')} // Naviger til Login
            >
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.loginButton} 
                onPress={() => navigation.navigate('Create')} // Naviger til Opret bruger
            >
                <Text style={styles.text}>Opret bruger</Text>
            </TouchableOpacity>
        </View>
    );
}
// Styling
