import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import { ref, onValue } from "firebase/database";
import { db } from '../config';
import styles from '../styles';
// komponent der viser listen over de paraplyer som er til rådighed
export default function ListView() {
    const [todoData, setTodoData] = useState([]);
    // funktion der giver en alert hvis knappen bliver brugt
    const handlePress = () => {
      alert('Paraplyen er reserveret');
  };
  // useEffect som henter data fra firebase-databasen gennem config.js
    useEffect(() => {
        const paraplyerRef = ref(db, "Paraplyer/"); // referer til config.js
        onValue(paraplyerRef, (snapshot) => {
            const data = snapshot.val(); // henter data fra snapshot
            console.log("data: " + data); // test
            const newUmbrellas = Object.keys(data).map(key => ({ // map'er data til et array for hver paraply
                id: key,
                ...data[key]
            }));
            setTodoData(newUmbrellas); // opdatere state med paraply data
        });
    }, []);

    return (
      // View der indeholder paraplyer ud fra det data der er hentet fra firebase
        <View style={styles.container}>
            <View style={styles.break}></View>
            <Text style={styles.header}>Paraplyer til rådighed:</Text>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {todoData.map((item, index) => ( // map over arrayet for hvert paraply bliver vist i et view
                    <View key={item.id} style={styles.card}>
                        <View style={styles.cardContent}>
                        <Text style={styles.umbrellaCount}>{item.count} Paraplyer</Text> 
                        <Text style={styles.umbrellaLocation}>{item.locationName}</Text>
                        <Text style={styles.umbrellaLocation}>Farve: {item.color}</Text>
                        <Button style={styles.button} title="Reserver" onPress={handlePress}/>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}
