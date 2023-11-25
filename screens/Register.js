import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';

const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Lógica para manejar el registro (puedes implementar según tus necesidades)
    // Por ahora, simplemente muestra un mensaje de alerta
    alert('Usuario registrado');
  };

  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        {/* Contenido de registro */}
        <View style={styles.overlay} />
        <View style={styles.logoContainer}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
        </View>
        <View style={styles.registerContainer}>
          <Text style={[styles.title, { color: 'white' }]}>Registro</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre"
            onChangeText={(text) => setName(text)}
            value={name}
          />
          <TextInput
            style={styles.input}
            placeholder="Correo Electrónico"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <TouchableOpacity
            style={styles.registerButton}
            onPress={handleRegister}
          >
            <Text style={{ color: 'white', textAlign: 'center' }}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  logo: {
    width: 140,
    height: 140,
  },
  registerContainer: {
    backgroundColor: 'rgba(255, 0, 0, 0.2)',
    borderRadius: 10,
    padding: 16,
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: '100%',
    borderBottomWidth: 1,
    borderColor: 'gray',
    color: 'blue',
    marginBottom: 12,
    paddingLeft: 8,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  registerButton: {
    borderRadius: 20,
    backgroundColor: 'red',
    padding: 10,
    width: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default Register;
