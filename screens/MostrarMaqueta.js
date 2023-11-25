// MostrarMaqueta.js
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const MostrarMaqueta = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Ir a Home"
        onPress={() => navigation.navigate('HomeScreen')}
      />
      <View style={styles.separator} />
      <Button
        title="Ir a Login"
        onPress={() => navigation.navigate('Login')}
      />
      <View style={styles.separator} />
      <Button
        title="Ir a Registro"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    height: 16, // Puedes ajustar la altura según tus preferencias
  },
});

export default MostrarMaqueta;
