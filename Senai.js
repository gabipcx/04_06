import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SenaiScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o SENAI</Text>
      <Text style={styles.text}>
        O SENAI é uma das principais instituições de educação profissional do Brasil, com cursos técnicos e de qualificação para diversas áreas da indústria.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 16 },
});
