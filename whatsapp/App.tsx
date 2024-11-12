/*
 *   Copyright (c) 2024 
 *   All rights reserved.
 */
// Conversa.tsx
import React from 'react';
import { View, Text, Image, TextInput, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import styles from './styles';
import Luan from  './Luan.png';
import video from "./video.png";
import ligar from './ligar.png';
import parede from "./parede.png";
const App = () => {
    return ( <View style={styles.tela}>
        <View style={styles.container}>
        <Image source={Luan} style={styles.image}/>
        <Text style={styles.nome}>Luan Souza</Text>
        <Image source={video} style={styles.video}/>
        <Image source={ligar} style={styles.ligar}/>
        </View>
        <ImageBackground source={parede} style={styles.parede} >

        <View>
            <Text style={styles.enviada}>Olá,tudo bem?</Text>
            </View>  
            <View>
            <Text style={styles.title}>
                Tudo certo e você?
            </Text>
    </View>
    <View>
        <Text style={styles.enviada}> Tudo bem tbm</Text>
    </View>
    <View>
        <Text style={styles.title}> Terminou o trabalho?</Text>
    </View>
    <View>
        <Text style={styles.enviada}> Terminei agora</Text>
    </View>
    <View>
        <Text style={styles.title}> Então assiste Arcane</Text>
    </View>
    <View>
        <Text style={styles.enviada}> Vou assistir hoje</Text>
    </View>
    <View style={styles.inputBar}>
      {/* Ícone de "Adicionar" */}
      <TouchableOpacity style={styles.iconButton}>
        <Ionicons name="add" size={24} color="#ffffff" />
      </TouchableOpacity>

      {/* Campo de entrada de texto */}
      <TextInput
        style={styles.input}
        placeholder="Digite uma mensagem"
        placeholderTextColor="#aaaaaa"
      />

      {/* Ícone de "Enviar mensagem" */}
      <TouchableOpacity style={styles.iconButton}>
        <MaterialIcons name="send" size={24} color="#ffffff" />
      </TouchableOpacity>
    </View>
        </ImageBackground>
        </View>
    );
    };

    export default App;
