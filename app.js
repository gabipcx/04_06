import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import telaPrincipal from './screens/telaPrincipal';
import Aluno from './screens/Aluno';
import Senai from './screens/Senai';
import Meucurso from './screens/Meucurso';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Tela Principal">
        <Drawer.Screen name="Tela Principal" component={telaPrincipal} />
        <Drawer.Screen name="Sobre o Aluno" component={Aluno} />
        <Drawer.Screen name="Sobre o Senai" component={Senai} />
        <Drawer.Screen name="Sobre o Curso" component={Meucurso} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
