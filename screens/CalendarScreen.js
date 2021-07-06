import React from "react";
import {useState,useEffect} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
// =================== Calendar ==================================================
import Calendar from 'react-calendar';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import DateTimePicker from 'react-datetime-picker';
// =================== Calendar ==================================================
import { onChange, Value } from "react-native-reanimated";
import { render } from "react-dom";
import firebase from "../database/firebaseDB";
import { NavigationHelpersContext } from "@react-navigation/core";


// Const Declaration ============================================
const db = firebase.firestore().collection("schedule");
const auth = firebase.auth();
const anonymousUser = { name: "Anonymous", id: "1A" };  

export default function CalendarScreen({navigation}) {  // ============Start of function CalendarScreen ==============================
    const [date, setDate] = useState(new Date());
    const [currentUser, setCurrentUser] = useState(anonymousUser);
  
    /*   

    useEffect(() => {  // ==== start of useEffect ======================================

        // ====== auth listener for log in and log out ==========================            
        firebase.auth().onAuthStateChanged((user) =>   {  
            
            if (user) {     
                        navigation.navigate("Calendar");   
                         setCurrentUser({  id: user.uid, name: user.email }); 
            } else    {
                        navigation.navigate("Login");    
                        setCurrentUser(anonymousUser);    
            }
        }); // ====== end of auth listener for log in and log out ==========================

// ==== loading from firebase =========================
const unsubscribe = db                                              
.orderBy("createdAt","desc")        
.onSnapshot((collectionSnapshot) => {    
    const serverSchedules = collectionSnapshot.docs.map((doc) => { 
        const data = doc.data();                            
        console.log(data);                                  
    const jsDate = new Date(data.createdAt.seconds * 1000); 
        const returnData ={                               
            ...data,                                      
            createdAt: jsDate,                            
        };                                                
        return returnData;                                
    });                                                   
    setSchedule(serverSchedules);                          
});                                                       

// ======== logout button =====================================
navigation.setOptions({                      
    headerRight:()  => (                      
    <TouchableOpacity onPress={logout}>       
        <MaterialCommunityIcons               
            name="logout"
            size={24}
            color="red"
            style={{marginRight:20}}
            />
    </TouchableOpacity>
),
});

// ============ returning unsubs ==================
return () => { 
unsubscribe();                                
unsubAuth();
};
}, []); // ========= end of useEffect =======================

    // ==================== send booking Function ===================
    function booking(newBooking){                                
        console.log(newBooking);                                      
        db.add(newBooking[0]);                               
    }                                                                   

    // ================  logout Function ==========================
    function logout() {      
        // auth.signOut();
        firebase.auth().signOut(); 
    }    
*/

       
        //      (value, event) => alert('Clicked day: ', value)
    

        


// ================ return, rendering... Always at bottom ====================================

    const onChange = date => {
        setDate(date);
     };

    return (
 
                    <View style={{flex: 1,
                        justifyContent: "center",
                        alignItems: "center"}}>           

                            <Text>Calendar Screen</Text>
                            <Text>Screen 3</Text>
                            <Calendar
                                    value = {date}
                                    onChange = {(date) => setDate(date)}                                      
                        />  
                        var datey = {date.toLocaleDateString('en-GB')}
                        <Button
                      title="Go Next"
                          //Button Title
                          onPress={() =>
                      navigation.navigate('Booking', { paramKey: date.toLocaleDateString('en-GB'),
                      })
                  }
                  />  
                      </View>
                      

                );
                        /* <onSelect (setSchedule) => {navigation.navigate("Booking", {})} */
                        
//=======================================================================================             

const styles = StyleSheet.create({
                    
// Container ==================================
        container: {
            flex: 1,
            flexDirection: "column",
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
            fontSize: 60,
            fontWeight: "bold",
            color: '#D79940',
            },
        fieldTitle: {            
            marginBottom: 10,
            fontSize: 60,
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
// Filler ==========================
        fillerContainer:{
            padding: 10,
            backgroundColor: "blue",
            flex: 0.25,
            width: "50%",
            },                    
// Text and Input ==========================
        text: {
            color: "white",
            fontSize: 42,
            fontWeight: "bold",
            textAlign: "center",
            backgroundColor: "#000000a0"
            },
        arrivalTime: {      
            marginBottom: 10,
            fontSize: 30,
            color: '#D79940',
            },
        input: {      
            marginBottom: 10,
            fontSize: 30,
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
// Image ==============================
        image: {
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center"
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
}   // ============End of function CalendarScreen ==============================

/*
<Datepicker
    colors={[                               // highlighting
        { 
            date: new Date(year, month, 6),
            highlight: '#f3a146'
        },{ 
            date: new Date(year, month, 15),
            highlight: '#b4c145'
        },{ 
            date: new Date(year, month, 23),
            highlight: '#ff6a00'
        },{ 
            date: new Date(year, month, 11),
            background: '#ea4986',
            highlight: '#c7356d'
        },
    ]}
    marked={[                                 // marked....
        { 
            date: new Date(year, month, 2), 
            color: '#46c4f3'
        }, { 
            date: new Date(year, month, 10), 
            color: '#7e56bd'
        }, { 
            date: new Date(year, month, 13), 
            color: '#f13f77'
        }, { 
            date: new Date(year, month, 13), 
            color: '#89d7c9'
        }, { 
            date: new Date(year, month, 21), 
            color: '#ffc400'
        }, { 
            date: new Date(year, month, 21), 
            color: '#8dec7d'
        },{ 
            recurring: { 
                repeat: 'yearly', month: 4, day: 1
            },
            color: 'ffc400'
        }
    ]}/>

*/