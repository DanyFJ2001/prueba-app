import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Diseño2 } from './Ejercicios/Diseño2';
import { Diseño3 } from './Ejercicios/Diseño3';
import { Diseño4 } from './Ejercicios/Diseño4';
import { Diseño5 } from './Ejercicios/Diseño5';
import { Diseño6 } from './Ejercicios/Diseño6';
import { Diseño7 } from './Ejercicios/Diseño7';
import { Diseño8 } from './Ejercicios/Diseño8';

export default function App() {
  return (
    <View style={styles.container}>
      {/*<Diseño2/>*/}
      {/*<Diseño3/>*/}
      {/*<Diseño4/>*/}
      {/*<Diseño5/>*/}
      {/*<Diseño6/>*/}
      {/*<Diseño7/>*/}
      <Diseño7/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
