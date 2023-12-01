import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, ImageBackground, Image, Button } from 'react-native';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogin = () => {
    
    if (username === 'usuario' && password === 'contraseña') {
      navigation.navigate('Bienvenida');
    } else {
      setModalVisible(true);
    }
  };

  const handleForgotPassword = () => {
   //recuperar contraseña logica
    alert('Olvidaste tu contraseña');
  };

  const handleRegister = () => {
    // 
    navigation.navigate('Registro');
  };

  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        {/* Contenido de inicio de sesión */}
        <View style={styles.overlay} />
        <View style={styles.logoContainer}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
        </View>
        <View style={styles.loginContainer}>
          <Text style={[styles.title, { color: 'white' }]}>Inicio de Sesión</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre de Usuario"
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin}
          >
            <Text style={{ color: 'white', textAlign: 'center' }}>Iniciar Sesión</Text>
          </TouchableOpacity>
          <View style={styles.linkContainer}>
            <TouchableOpacity onPress={handleForgotPassword}>
              <Text style={[styles.linkText, { color: 'white' }]}>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleRegister}>
              <Text style={[styles.separator, { color: 'red', fontWeight: 'bold' }]}>Registrarte</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Modal de error */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalContainer}>
            <Text style={[styles.modalText, { color: 'white' }]}>Credenciales incorrectas. Intenta de nuevo.</Text>
            <Button title="Cerrar" onPress={() => setModalVisible(!modalVisible)} />
          </View>
        </Modal>
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
  loginContainer: {
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  modalText: {
    fontSize: 12,
    marginBottom: 16,
  },
  linkContainer: {
    flexDirection: 'row',
    marginTop: 12,
  },
  linkText: {
    color: 'black',
  },
  separator: {
    marginHorizontal: 5,
    color: 'red',
  },
  register: {
    marginTop: 12,
    textDecorationLine: 'underline',
    fontSize: 12,
  },
  loginButton: {
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

export default Login;
