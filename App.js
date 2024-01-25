import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Coders, bienvenidos a mis primeros pasos con ReactNative :D !</Text>
      <Text>Estoy de viaje (ojala fuese de vacaciones) la semana que viene le pongo full fichas al Curso c:</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2394',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
