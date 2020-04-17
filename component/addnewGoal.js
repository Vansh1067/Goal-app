import React from 'react';
import {View,Text,StyleSheet, TextInput, Button,Modal} from 'react-native';
import Header  from '../component/Header';
import { useState } from 'react';

const AddNew=props=>{
    const [enteredValue,setEnteredValue]=useState()
    
            return(<Modal visible={props.visible}>
               
                <View style={styles.screen}>
                <View style={styles.cont}>
                <TextInput style={styles.input} onChangeText={setEnteredValue} value={enteredValue}></TextInput>
                <View style={styles.btn}>
                    <View style={styles.Button}>
                        <Button color="green"title="ADD" onPress={()=>{props.onChange({id:Math.random(),value:enteredValue});props.visiblity(false),setEnteredValue('')}}></Button>
                    </View>
                    <View style={styles.Button}>
                        <Button color="brown"title="cancel" onPress={()=>{props.visiblity(false)}}></Button>
                    </View>
                </View>
                </View>
            </View></Modal>)
}


const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        backgroundColor:'pink'
    },
    cont:{
        width:'80%'
    },
    input:{
        borderBottomColor:'black',
        borderBottomWidth:2,
        marginVertical:20,
        padding:2,
        fontSize:12,
        textAlign:'center'
    },
    btn:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },
    Button:{
        width:'30%'
    }
    
    
})
export default AddNew