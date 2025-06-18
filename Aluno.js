import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AlunoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o Aluno</Text>
      <Text style={styles.text}>Nome: Gabriela</Text>
      <Text style={styles.text}>Idade: 17 anos</Text>
      <Text style={styles.text}>Interesses: programação, design e arte </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 16, marginBottom: 6 },
});
