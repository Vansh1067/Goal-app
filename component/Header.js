import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const Header=props=>{
            return(<View style={styles.screen}>
                <Text style={styles.text}>Goal App</Text>
            </View>)
}


const styles=StyleSheet.create({
    screen:{
        width:'100%',
        backgroundColor:'orange',
        marginBottom:20
        
    },
    text:{
        textAlign:'center',
        fontSize:20,
        color:'white',
        paddingTop:60,
        paddingBottom:20
    }
})
export default Header