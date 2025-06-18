import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CursoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o Curso</Text>
      <Text style={styles.text}>
        O curso de **Desenvolvimento de Sistemas** é voltado para formar profissionais capacitados a criar, desenvolver, implementar e gerenciar sistemas de software, atendendo às demandas tecnológicas de empresas e usuários. Durante a formação, os alunos aprendem a programar em diversas linguagens, a trabalhar com banco de dados, redes de computadores e metodologias ágeis, além de se aprofundar no desenvolvimento de aplicativos, sites e sistemas corporativos. A ênfase é dada ao raciocínio lógico, à resolução de problemas e ao trabalho em equipe, preparando o estudante para atuar em diversas áreas da tecnologia, desde a criação de soluções personalizadas até a manutenção de grandes sistemas complexos. O curso também costuma abordar aspectos de segurança da informação, usabilidade e inovação, tornando o profissional apto a enfrentar os desafios de um mercado de trabalho em constante evolução.

      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 16 },
});
