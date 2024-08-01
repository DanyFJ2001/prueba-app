import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Diseño4 = () => {
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
    justifyContent:'center',
    alignItems: 'center'
   
  },
  boxBlue: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    borderWidth: 10,
    borderColor: 'white',
    margin: 10,
    flexDirection:'column',
    left:180
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
    right:180

  },
  boxSkyblue: {
    width: 100,
    height: 100,
    backgroundColor: 'skyblue',
    borderWidth: 10,
    borderColor: 'white',
    //margin: 10,
    
  }
});

