import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import styles from '../styles'

// komponent der indeholer kamera funktionen
export default function CameraContainerView(){
    const [permission, requestPermission] = useCameraPermissions();
// håndtere tilladelse til kamaraet
    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
      }
    if (!permission.granted) {
        // Hvis kamera tilladelse ikke er er givet endnu, vises en besked og knap for anmode om tilladelse
        return (
          <View style={styles.container}>
            <Text style={styles.message}>We need your permission to show the camera</Text>
            <Button onPress={requestPermission} title="grant permission" />
          </View>
        );
      }
      // hvis der tilladelse vises kameraet 
    return(
         <CameraView style={styles.camera} facing={'back'}>
         </CameraView>
    )
}

// styling
