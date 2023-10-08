    import React from "react";
    import { View, Text, StyleSheet, TouchableOpacity, ImageBackground,TextInput, Button, CheckBox} from "react-native";
    import { MaterialIcons } from "@expo/vector-icons";
    import { Feather, Entypo ,AntDesign, FontAwesome   } from '@expo/vector-icons';
    import { useState,useEffect } from "react";

    const image = {uri: 'https://salt.tikicdn.com/cache/w1200/ts/product/7a/5e/62/8a692ce25c7ed5778c5e2e72576a15cc.jpg'}

    export default function screen2_d(){
        const [x,setx] = useState(0);
        const[Money,setMoney]= useState(0);
        function tang(){
            setx(x+1);       
        }
        function giam(){
            if(x>0) setx(x-1);
        }
        useEffect(()=>{
            setMoney(x*141800) 
        },[x])
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.header_1}>
                        <View>
                            <ImageBackground
                            source={image}
                            style={styles.img}>
                            
                            </ImageBackground>
                        </View> 
                        <View style={styles.header_1_2}> 
                            <Text style={{fontSize: '13px', fontWeight: '700'}}>Nguyên hàm tích phân ứng dụng</Text>
                            <Text style={{fontSize: '13px', fontWeight: '700'}}>Cung cấp bởi Tiki Trading</Text>
                            <Text style={{fontSize: '17px', fontWeight: '700', color: '#EE0000'}}>141.800 đ</Text>
                            <Text style={{textDecorationLine: 'line-through', color: 'gray'}}>141.800 đ</Text>
                            <View style={styles.header_1_1_2}>
                                <TouchableOpacity style={{backgroundColor: 'gray', width: '20px', height: '20px', justifyContent: 'center'}}  onPress={() =>{giam()}}>
                                    <Text style={{justifyContent: 'center', textAlign: 'center'}}>- </Text>
                                </TouchableOpacity>
                                <Text > {x} </Text>
                                <TouchableOpacity style={{backgroundColor: 'gray', width: '20px', height: '20px'}} onPress={() =>{tang()}}> 
                                    <Text  style={{justifyContent: 'center', textAlign: 'center'}}>+</Text>
                                </TouchableOpacity>
                                <Text style={{fontSize: '13px', fontWeight: '700',marginLeft:90, color:'blue'}}>Mua sau</Text>
                                <View>

                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.header_1_1_2}>
                        <Text style={{fontSize: '13x', fontWeight: '700'}}>Mã giảm giá đã lưu</Text>
                        <Text style={{fontSize: '14px', fontWeight: '700',color:'blue', marginLeft: '25px'}}>Xem tại đây</Text>
                    </View>
                    <View style={styles.header_row}>
                        <View style={{height:30,width:150, justifyContent:'center',alignItems:'center',flexDirection: 'row', borderWidth: 1, borderColor: 'blue', borderRadius: 2 }}  >
                        <TouchableOpacity style={{backgroundColor:'yellow',height:20,width:40}}></TouchableOpacity>
                            <Text style={{ fontWeight: 'bold'}}>  Mã giảm giá</Text>
                        </View>
                        <TouchableOpacity style={{backgroundColor:'blue',height:30,width:70, justifyContent:'center',alignItems: 'center'}}>
                            <Text style={{color:'white', fontWeight: 'bold'}}>Áp dụng</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.header_row2}>
                        <Text style={{fontSize: '20x', fontWeight: '600'}}> Bạn có phiếu quà tặng Tiki/Got it/Urbox</Text>
                        <Text style={{fontSize: '14px', fontWeight: '700',color:'blue', marginLeft: '25px'}}> Nhập tại đây</Text>

                    </View>
                    <View style={styles.header_row2}>
                    <Text style={{fontSize: '25px', fontWeight: '100',fontWeight: 'bold'}}> Tạm tính</Text>
                    <Text style={{fontSize: '20x', fontWeight: '100',fontWeight: 'bold',color:'red'}} >{Money} đ</Text>
                    </View>
                    <View style={{ backgroundColor: 'white',height:'100px',marginTop:'50px',justifyContent:'center'}}>
                        <View style={styles.header_rowbuton}>
                        <Text style={{fontSize: '15px', fontWeight: '100',fontWeight: 'bold',color:'gray'}}> Thành tiền</Text>
                        <Text style={{fontSize: '22x', fontWeight: '100',fontWeight: 'bold',color:'red'}}  >{Money} đ</Text>
                        </View>
                        <TouchableOpacity style={{backgroundColor:'red',height:100,justifyContent:'center',alignItems: 'center'}}onPress={() => alert("Thanh cong")} >
                            <Text style={{fontSize: '20x', fontWeight: '100',fontWeight: 'bold',color:'white'}} >TIẾN HÀNH ĐẶT HÀNG</Text>
                        </TouchableOpacity>
                    </View>    
            

                </View>
                
            </View>
        )
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#DDDDDD'
        },
        
        img:{
            width: '140px',
            height: '150px',
            marginLeft: '-10px',
            marginTop: '5px'
        },
        input:{
            width:20,
            backgroundColor:'green',
        },
        header:{
            height: '40%',
            backgroundColor: 'white',
            flexDirection: 'column'
        },

        header_1: {
            flexDirection: 'row',
            backgroundColor: 'white',
        
        },

        header_1_2:{
        
            justifyContent: 'space-evenly',
        },

        header_1_1_2: {
            flexDirection: 'row'
        },
        header_row:{
            justifyContent: 'space-between',
            flexDirection: 'row',    
            marginTop:'30px',
            backgroundColor: 'white',
            
        },
        header_row2:{
            flexDirection: 'row',     
            marginTop:'20px',
            backgroundColor: 'white',
            height:'80px',
            justifyContent:'space-between'
        
        },
        header_rowbuton:{
            flexDirection: 'row',     
            backgroundColor: 'white',
            height:'80px',
            justifyContent:'space-between',
            marginTop:'70px',
        
        },




    })