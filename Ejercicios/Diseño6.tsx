import React from 'react'
import { View,Text,StyleSheet } from 'react-native'

export const Diseño6 = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.box1}></Text>
        <Text style={styles.box2}></Text>
        <Text style={styles.box3}></Text>
        
    </View>
    
  )
}
const styles=StyleSheet.create({
    container:{
    
       
            marginTop:50,
            backgroundColor:'#33fff9',
            flexDirection:'row',
            justifyContent:'space-between',
           alignItems:'stretch',
            left:0,
            bottom:0,
       
        flexWrap:'wrap'
    },
    box1:{
        flex:1,
        width:100,
        height:1005,
        borderWidth:30,
        borderColor:'white',
        fontSize:30,
        backgroundColor:'red',
        alignSelf:'flex-start', 
        //alinea de manera individual
    },
    box2:{
        flex:1,
        width:100,
        height:1000,
        borderWidth:30,
        borderColor:'white',
        fontSize:30,
        backgroundColor:'blue'
        //alignSelf:'flex-start' //
    
    },
    box3:{
        width:100,
        height:1000,
        flex:1,
        borderWidth:30,
        borderColor:'white',
        fontSize:30,
        backgroundColor:'black'
        //alignSelf:'flex-start' //
    }
})