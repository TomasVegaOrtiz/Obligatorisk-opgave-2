import { StyleSheet } from 'react-native';

// Map-view
const styles = StyleSheet.create({
    map: {
        width:'100%',
        height:'100%'
    },

//Main-view
break: {
  height: 40, // Højden af break’et – juster som nødvendigt
},
    container2: {
      flex: 1,
      backgroundColor: '#89CFF0',
      alignItems: 'center',
      justifyContent: 'center',
    },

    loginButton: {
      backgroundColor: '#4285F4', 
      paddingVertical: 15,
      paddingHorizontal: 80,
      borderRadius: 30,
      marginVertical: 10,
      shadowColor: '#000',
      shadowOpacity: 0.3,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 5,
      elevation: 5,
    },
    opretButton: {
      backgroundColor: '#34A853', 
      paddingVertical: 15,
      paddingHorizontal: 60,
      borderRadius: 30,
      marginVertical: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 5,
      elevation: 5,
    },


// list-view
    container: {
        flex: 1,
        backgroundColor: '#f0f4f7',
        paddingTop: 50,
    },
    scrollContainer: {
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    header: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        padding: 20,
        marginVertical: 10,
        width: '100%',
        maxWidth: 350,
    },
    cardContent: {
        alignItems: 'center',
    },
    umbrellaCount: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#4a4a4a',
        marginBottom: 10,
    },
    umbrellaLocation: {
        fontSize: 18,
        color: '#7a7a7a',
        marginBottom: 10,
    },
    umbrellaColor: {
        padding: 5,
        borderRadius: 5,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        textTransform: 'capitalize',
        textAlign: 'center',
        width: 120,
    },
    button: {
      padding: 5,
      borderRadius: 5,
      color: 'red',
      fontWeight: 'bold',
      fontSize: 16,
      textTransform: 'capitalize',
      textAlign: 'center',
      width: 120,
  },

// camera-view
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    message: {
      textAlign: 'center',
      paddingBottom: 10,
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      margin: 64,
    },
    button: {
      flex: 1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'black',
      alignSelf: 'center',
  
    },


//app

    container: {
      flex: 1,
      backgroundColor: '#89CFF0',
    },


  })

  

export default styles;