import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import styles from '../styles'

// Komponent der viser et kort ved brug af react-natives-map
export default function MapContainerView(){
// Hvis device ikke er der, bliver der retuneret et tomt view
    if(device = null) return <View></View>
// ellers returneres et kort
    return (
        <View>
            <MapView style={styles.map}>
                
            </MapView>
        </View>
    )
}
// Styling
