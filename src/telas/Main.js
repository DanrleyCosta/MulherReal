import React from 'react';
import {  Text, Image, StyleSheet } from 'react-native';

import logo from '../../assets/logocomtitulo.png';


export default function Main() {
    return <Image source={logo} style={estilos.logo}/>
}

const estilos = StyleSheet.create({
    logo: {
        width: 150, 
        height: 220
    }
});