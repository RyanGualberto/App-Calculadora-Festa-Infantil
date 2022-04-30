import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Componente from './components/Componente';

export default function App() {
  const [Convidados, setConvidados] = useState(0);
  function mostrarTexto() {
   
  }
  return (
    <View style={styles.container}>
    <View style={styles.h1}> Party Calc</View>
      <View style={styles.h2}> Digite a quantidade de Convidados</View>
      <TextInput placeholder="quantidade" style={styles.input} value={Convidados} onChangeText={(value) => setConvidados(value)}></TextInput>
      

      <TouchableOpacity style={styles.botao} onPress={mostrarTexto()}>
          <View style={styles.txtbotao}>Calcular</View>
        </TouchableOpacity>
        <Componente qtConvidados={Convidados} />
    </View>
  );
}
{/* cores : amarelo : #ffda7e, branco: #ffff00, verde: #d9eec9, rosa: #fdd6d0, azul: #83d6fc*/}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff0',
    alignItems: 'center',
    fontFamily: 'arial'

  },
  h1:{
    fontSize: '48px',
    color: '#83d6fc',
    fontweight: 'bold',
    top: '50px',
    fontFamily: 'Courier New',
  },
  h2: {
    color: '#09EE0C',
    fontSize: '20px',
    fontWeight: 'bold',
    marginTop: '120px'
  },
  input: {
    textAlign: 'center',
    backgroundColor: '#ffda7e',
    borderRadius:'5px',
    border: '3px solid #fdd6d0',
    marginTop: '20px',
    width: '280px',
    height: '35px',
  },
  botao: {
    backgroundColor: '#83d6fc',
    width: '100px',
    height: '35px',
    textAlign: 'center',
    justifyContent: 'center',
    border: '2px solid  #fdd6d0',
    borderRadius: '5px',
    fontSize: '22px',
    marginTop: '20px'
  },

  txtbotao: {
    Color: '#ffda7e',
    fontweight: 'bold',
  }
});
