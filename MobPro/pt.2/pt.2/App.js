import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Nama: Muhammad 'Arif Nur Shidiq</Text>
      <Text>Tempat Tanggal Lahir: Cirebon, 25 Juli 2005</Text>
      <Text>Cita-cita: Menjadi Programmer Handal</Text>
      <Text>Rencana Hidup: Saya sedang berusaha belajar dengan giat dari mulai perkulliahan, supaya dapat menjadi programmer yang handal</Text>
      <StatusBar style="auto" />
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
