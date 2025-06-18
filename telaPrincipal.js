
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TelaPrincipal() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Meu App!</Text>
      <Text style={styles.subtitle}>Use o menu para navegar entre as telas.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
  subtitle: { fontSize: 16, color: 'gray' },
});
