import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Diseño3 = () => {
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
   
  },
  boxBlue: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    borderWidth: 10,
    borderColor: 'white',
    margin: 10,
    flexDirection:'column'
  },
  boxOrange: {
    width: 100,
    height: 100,
    backgroundColor: 'orange',
    borderWidth: 10,
    borderColor: 'white',
    margin: 10,
    flexDirection:'row'
  },
  boxSkyblue: {
    width: 1000,
    height: 100,
    backgroundColor: 'skyblue',
    borderWidth: 10,
    borderColor: 'white',
    //margin: 10,
  }
});

