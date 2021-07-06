import React, { useState } from "react";
import { StyleSheet, Text, Keyboard, TextInput, View, TouchableOpacity, TouchableWithoutFeedback, ImageBackground } from "react-native";
import firebase from "../database/firebaseDB";

const auth = firebase.auth();

    export default function LoginScreen({navigation}) {
        const [email, setEmail] = useState("");
        const [password, setPassword]  = useState("");
        const [errorText, setErrorText] = useState("");

// using firebaseDB/**



    function login() {  // ===================== login Function ===========================
        Keyboard.dismiss();
           auth.signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                console.log("Signed In!");
                })
                .catch((error) => {
                console.log("Error!");
                setErrorText(error.message);
                });        
    }
    
    const image = { uri: "../assets/image.jpg" };

    return (    // ======================== return ====================================
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style = {styles.container}> <ImageBackground source={require('../assets/image.jpg')} style={styles.image}>
                <Text style = {styles.title}>Login Screen</Text>
                        <Text>Screen 2</Text>
                <Text style = {styles.fieldTitle}>
                    Email
                    </Text>
                <TextInput 
                    style = {styles.input}
                    autoCapitalize="none"
                    placeholder="Enter Email"
                    autoCompleteType="email"
                    autoCorrect={false}
                    keyboardType="email-address"
                    value={email}
                    onChangeText={(input) => setEmail(input)}
                    />
                <Text style= {styles.fieldTitle}>Password</Text>    
                <TextInput
                    style = {styles.input}
                    placeholder="Enter the Magic Word"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(input) => setPassword(input)}
                    />
                    
                <TouchableOpacity style = {styles.loginButton} onPress={login}>
                        <Text style={styles.textButton}>Log In</Text>
                    </TouchableOpacity>        
                <Text style={styles.errorText}>{errorText}</Text>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    );
    
}     // ============ End LoginScreen Function ===========================

const styles = StyleSheet.create({  // ============ Styles ======================
    // Container ==================================
container: {
flex: 1,
justifyContent: 'space-around',
padding: 24,
},
    // Header ==================================
textHeader: {
marginBottom:10,
fontSize: 30,
fontWeight: 'bold',
color: '#4050D7',
},
    // Title ==================================
title: {            
marginBottom: 10,
fontSize: 30,
fontWeight: "bold",
color: '#D79940',
},
fieldTitle: {            
marginBottom: 10,
fontSize: 20,
fontWeight: "normal",
color: '#D79940',
},
titleContainer: {
backgroundColor: "orange",
padding: 10,
margin: 10,
flex: 0.5,
justifyContent: "center",
borderRadius: 20,
},
    // Filler & Background ==========================
fillerContainer:{
padding: 10,
backgroundColor: "blue",
flex: 0.25,
width: "50%",
},
image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: '100%',
    height: '100%',
  },                    
    // Input ==========================
arrivalTime: {      
marginBottom: 10,
fontSize: 20,
color: '#D79940',
},
input: {      
padding: 10,
borderWidth: 1,
marginBottom: 10,
fontSize: 20,
color: '#D79940',
},
    // Button ==============================
button: {             
marginBottom: 20,
borderRadius: 15,
backgroundColor: '#D740D0',
paddingVertical: 20,
paddingHorizontal: 80,
},
loginButton: {
fontSize: 40,
marginBottom: 20,
borderRadius: 15,
backgroundColor: '#D740D0',
paddingVertical: 20,
paddingHorizontal: 80,
},
textButton:{
fontSize: 30,
color: '#9ED740'
},
// Error =====================================
errorText: {
color: "red",
marginTop: 20,
marginLeft: 20,
marginRight: 20,
height: 40,
},
});
