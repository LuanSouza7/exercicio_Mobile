/*
 *   Copyright (c) 2024 
 *   All rights reserved.
 */
import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from './styles2';

const App1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verifique seu número</Text>
      <Text style={styles.description}>
        O WhatsApp enviará um SMS (tarifas da sua operadora podem ser aplicadas) para verificar seu
        número de telefone. Insira o código do seu país e seu número de telefone:
      </Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Selecione um país" style={styles.input} />
        <TextInput placeholder="seu número" style={styles.input} keyboardType="phone-pad" />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>AVANÇAR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App1;