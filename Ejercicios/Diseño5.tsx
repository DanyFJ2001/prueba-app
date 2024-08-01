import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Diseño5 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxBlue}></View>
      <View style={styles.boxOrange}></View>
      <View style={styles.boxSkyblue}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:500,
    height: 300,
    backgroundColor:'purple',
  
   
  },
  boxBlue: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    top:50,
    borderWidth: 10,
    borderColor: 'white',
    margin: 10,
  
  },
  boxOrange: {
    width: 100,
    height: 100,
    backgroundColor: 'orange',
    borderWidth: 10,
    borderColor: 'white',
    margin: 10,
    alignItems:'center',
    justifyContent:'center',
    alignContent:'space-evenly',
    top:'30%',
    left:'40%'
    

  },
  boxSkyblue: {
    width: 100,
    height: 100,
    backgroundColor: 'skyblue',
    borderWidth: 10,
    borderColor: 'white',
    margin: 10,
    alignItems:'flex-end',
    top:600,
    left:350
    
  }
});

