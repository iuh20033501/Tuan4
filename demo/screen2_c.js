import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground,TextInput, Button, CheckBox} from "react-native";
import { useState } from "react";

export default function screen2_c(){
    const [isCheckedLower, setCheckedLower] = useState(false);
    const [isCheckedUpper, setCheckedUpper] = useState(false);
    const [isCheckedNumber, setCheckedNumber] = useState(false);
    const [isCheckedSpecial, setCheckedSpecial] = useState(false);
    const [passWord, setText] = useState('');
    const getLength = (text) => {
        return text.length;
    }

    function checkAll(checkLower, checkUpper, checkNumerr, checkSpecial){
        if(checkLower && checkUpper && checkNumerr && checkSpecial )
            alert("GENERATE PASSWORD SUCCESS");
        else
            alert("FAIL");

        
        
    }

    function checkSpecialSymbol(str, isCheck){
        var regex = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
        return regex.test(str) && isCheck ? true : false;
    }

    function checkLowerCase(str, isCheck){
        var regex = /[a-z]/g;
        return regex.test(str) && isCheck ? true : false
    }
    
    function checkUpperCase(str, isCheck){
        var regex = /[A-Z]/g;
        return regex.test(str) && isCheck ? true : false
    }

    function checkNumber(str, isCheck){
        var regex = /[0-9]/g;
        return regex.test(str) && isCheck ? true : false
    }

    return(
        <View style={styles.container}>
            <View style={styles.main}>
                <View style={styles.top}>
                    <Text style={{fontSize:'25px', fontWeight: '700', color: '#FFFFFF'}}>
                        PASSWORD{'\n'}
                        GENERATOR
                    </Text>
                </View>

                <View style={styles.center}>
                    <TextInput style={styles.textCenter} onChangeText={setText}>

                    </TextInput>
                </View>

                <View style={styles.bottom}>
                    <View style={styles.row}>
                        <Text style={styles.text}>
                            Password length
                        </Text>
                        <TextInput style={styles.passLength} keyboardType="number-pad">

                        </TextInput>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.text}>
                            Include lowercase letters
                        </Text>
                        <CheckBox value={isCheckedLower} onValueChange={setCheckedLower}>
                        
                        </CheckBox>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.text}>
                            Include uppercase letters
                        </Text>
                        <CheckBox value={isCheckedUpper} onValueChange={setCheckedUpper}>
                        
                        </CheckBox>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.text}>
                            Include number
                        </Text>
                        <CheckBox value={isCheckedNumber} onValueChange={setCheckedNumber}>
                        
                        </CheckBox>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.text}>
                            Include special symbol
                        </Text>
                       <CheckBox value={isCheckedSpecial} onValueChange={setCheckedSpecial}>
                        
                       </CheckBox>
                    </View>

                    <TouchableOpacity style={styles.gui} 
                            onPress={() => checkAll(checkLowerCase(passWord, isCheckedLower)
                                                  , checkUpperCase(passWord, isCheckedUpper)
                                                  , checkNumber(passWord, isCheckedNumber)
                                                  , checkSpecialSymbol(passWord,isCheckedSpecial))}>
                        <Text style={{fontSize: '16px', fontWeight: '600', color: 'white'}}>
                            GENERATE PASSWORD
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#6633FF',
        justifyContent: 'center',
        alignItems: 'center'
    },

    main:{
        width: '322px',
        height: '605px',
        backgroundColor: '#333366',
        alignItems: 'center',
        borderRadius: '25px',
      
    },

    top:{
        height: '110px',
        justifyContent: 'flex-end',
    },

    center:{
        height: '75px',
        width: '90%',
        marginTop: '40px'
    },

    textCenter: {
        height: '55px',
        backgroundColor: 'white',
         paddingLeft: '10px'
    },

    bottom: {
        height: '60%',
        width: '90%',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },

    passLength: {
        backgroundColor: 'white',
        width: '100px',
        height: '33px',
        paddingLeft: '10px'
    },
    text: {
        fontSize: '20px',
        fontWeight: '600',
        color: 'white',
        paddingLeft: '10px'
    },

     row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: '2px'
     },

     gui:{
        width: '250px',
        borderRadius: '2px',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6633FF',
        height: '45px',
        marginLeft: '20px',
    }
})