import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Diseño = () => {
  return (
    <View style={styles.container}>
        <View style={styles.boxpurple}></View>
        <View style={styles.boxorange}></View>
        <View style={styles.boxgreen}></View>

    </View>
    )
}

const styles =StyleSheet.create ({
   
    container :{
        //flex:1,
        width:300,
        height:300,
        marginTop:45,
        backgroundColor:'#33fff9',
        //justifyContent:'center',
        //alignItems:'center'
      
        
    },
    boxpurple:{
        width:100,
        height:100,
        backgroundColor:'purple',
        borderWidth:10,
        borderColor:'white',
        //top:130,
       //left:50,
       position:'absolute',
       
       right:0
    },
    boxorange:{
        width:100,
        height:100,
        backgroundColor:'orange',
        borderWidth:10,
        borderColor:'white',
        //top:800,
        position:'absolute',
    right:0,
    bottom:0
    },
    boxgreen:{
        width:100,
        height:100,
        backgroundColor:'green',
        borderWidth:10,
        borderColor:'white',
        //top:800,
        position:'absolute',
   left:0,
    top:0 
    
        
    }
});