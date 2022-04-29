import React, { useState } from 'react';
import { Text, View } from 'react-native-web';

export default function Componente(props) {
    let texto = [];


    let qtrefri = props.qtConvidados * 600;
    let qtagua = props.qtConvidados * 200;
    let qtbolo = props.qtConvidados * 100;
    let qtdoces = props.qtConvidados * 3;
    let qtsalg = props.qtConvidados * 10;
    texto.push(
        <Text> 
            quantidade de pessoas {props.qtConvidados}
            <br></br>
            Refrigerante: {qtrefri}ml
            <br></br>
            Agua: {qtagua}ml
            <br></br>
            Bolo: {qtbolo} gramas
            <br></br>
            Doces: {qtdoces} Unidades;
            <br></br>
            Salgadinhos: {qtsalg} unidades
            <br></br>
            </Text>
    );

    return (

        <View>  {texto} </View>
    );
}