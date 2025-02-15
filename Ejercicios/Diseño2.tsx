import React from 'react'
import { View, StyleSheet } from 'react-native'

export const Diseño2 = () => {
  return (
    <View style={style.container}>
    <View style={style.boxBlue}></View>
    <View style={style.boxOrange}></View>
    <View style={style.boxSkyblue}></View>
    </View>
  )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        width:500,
        height: 300,
        marginTop:50,
        paddingTop: 45,
        backgroundColor:'purple',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    boxBlue:{
        width:100,
        marginTop:-40,
        height:700,
        backgroundColor:'blue',
        borderWidth:10,
        borderColor:'white',
        top:130,
        left:350,
        position:'absolute',
        right:199
    },
    boxOrange:{
        width:100,
        height:100,
        backgroundColor:'black',
        borderWidth:10,
        borderColor:'white',
        position:'absolute',
        right:0,
        bottom:0,
        top:790,
        left:350
        
    },
    boxSkyblue:{
        width:100,
        height:100,
        backgroundColor:'red',
        borderWidth:10,
        borderColor:'white',
        position:'absolute',
        right:0,
        bottom:0,
        top:1,
        left:350
        
    }
});


