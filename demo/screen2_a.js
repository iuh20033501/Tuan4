import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground,TextInput, Button, CheckBox} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather, Entypo ,AntDesign, FontAwesome   } from '@expo/vector-icons';

export default function screen2_a(){
    const userName = 'halequyenn'
    const passWord = 'ogeoge'
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    function checkLogin(user, pass){
            alert('ok')
    }

    function viewPassword(){
        setShowPassword(!showPassword)
    }
    return(
        <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={{fontSize: '28px', fontWeight: '700', marginLeft: '20px'}}>
                        LOGIN
                    </Text>
                </View>
                    
                <View style={styles.center}>
                    <FontAwesome name="user" size={30} color="black" style={{position: 'absolute', left: '20px', top: '10px'}} />
                    <TextInput placeholder="Name" style={styles.input} onChangeText={setName}>
                        
                    </TextInput>
                    <FontAwesome name="lock" size={30} color="black" style={{position: 'absolute', left: '20px', top: '80px'}} />
                    <TextInput id="pass" placeholder="Password" secureTextEntry={!showPassword} style={styles.input} >
                            
                    </TextInput>
                    <AntDesign name="eye" size={28} color="black" style={{position: 'absolute', right: '20px', top: '80px'}} onPress={() => viewPassword()}/>
                    <Text>{name}</Text>
                </View>

                <View style={styles.footer}>
                    <TouchableOpacity style={styles.loginBtn} onPress={() => checkLogin(name, password)}>
                            <Text style={styles.login}>
                                LOGIN
                            </Text>
                        </TouchableOpacity>

                        <Text style={styles.create}>
                            Forgot your password?
                        </Text>
                </View>

            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#c8a100',
    },


    header:{
        height:'30%',
        justifyContent: 'center'
    },

    center:{
        height: '30%',
        alignItems: 'center',
    },

    input:{
        borderWidth: 1.5,
        borderColor: 'white',
        width: '95%',
        height: '50px',
        paddingLeft: '40px',
        fontWeight: '500',
        marginBottom: '20px'
    },
    footer:{
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'column',
        height: '25%',
        marginTop: '-30px'
    },

    loginBtn:{
        width: '95%',
        backgroundColor: 'black',
        height: '45px',
        
    },

    login:{      
        textAlign:'center',     
        color: 'white',          
        fontWeight: '500',
        fontSize: '20px',   
        lineHeight: '45px'
    },

    create:{
        fontSize: '20px',
        fontWeight: '700'
    }
});