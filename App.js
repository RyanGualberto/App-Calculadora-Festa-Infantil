import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-web';
import { useState } from 'react/cjs/react.production.min';
import Componente from './components/Componente';

export default function App() {
  // const [Convidados, setConvidados] = useState(0);
  return (
    <View style={styles.container}>
      {/* <TextInput placeholder="quantidade" style={styles.entradaqtd} value={Convidados} onChangeText={(value) => setConvidados(value)}></TextInput> */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.botao}>
          Calcular
        </TouchableOpacity>
      </View>
      {/* <Componente Convidados={Convidados}></Componente> */}
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
  entradaqtd: {
    backgroundColor: 'red',
  },
});
