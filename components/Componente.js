import React, { useState } from 'react';
import { StyleSheet,Text, View } from 'react-native-web';

export default function Componente(props) {
    let texto = [];


    let qtrefri = (props.qtConvidados * 600) / 1000;
    let qtagua = (props.qtConvidados * 200) / 1000;
    let qtbolo = (props.qtConvidados * 100) / 1000; 
    let qtdoces = props.qtConvidados * 3;
    let qtsalg = props.qtConvidados * 10;
    texto.push(
        <View style={styles.container}>
        <Text style={styles.Answer}> 
            quantidade de pessoas <View style={styles.valores}>{props.qtConvidados}</View>
            <br></br>
            Refrigerante: <View style={styles.valores}>{qtrefri}</View>L
            <br></br>
            Agua: <View style={styles.valores}>{qtagua}</View>L
            <br></br>
            Bolo: <View style={styles.valores}>{qtbolo}</View> Kg
            <br></br>
            Doces: <View style={styles.valores}>{qtdoces}</View> Unidades;
            <br></br>
            Salgadinhos: <View style={styles.valores}>{qtsalg}</View> unidades
            <br></br>
            </Text>
            </View>
    );

    return (

        <View>  {texto} </View>
    );
}

const styles = StyleSheet.create({ 
    Answer: {
        
        marginTop: '15px',
        width: '300px',
        height: '250px',
        backgroundColor: '#d9eec9',   
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '22px',
        textAlign: 'justify',
        fontWeight: 'bold', 
 
    },
    valores: {
        color: '#E5DA05'
    }
});