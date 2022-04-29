import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Componente from './components/Componente';

export default function App() {
  const [Convidados, setConvidados] = useState(0);
  function mostrarTexto() {
   
  }
  return (
    <View style={styles.container}>
      <View> Digite a quantidade de Convidados</View>
      <TextInput placeholder="quantidade" style={styles.entradaqtd} value={Convidados} onChangeText={(value) => setConvidados(value)}></TextInput>
      

      <TouchableOpacity style={styles.botao} onPress={mostrarTexto()}>
          <View>Calcular</View>
        </TouchableOpacity>
        <Componente qtConvidados={Convidados} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  entradaqtd: {
    backgroundColor: 'red',
  },
  botao: {
    backgroundColor: 'red',
  }
});
