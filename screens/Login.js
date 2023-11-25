import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, ImageBackground, Image, Button } from 'react-native';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogin = () => {
    // Lógica de inicio de sesión (puedes implementar según tus necesidades)
    // Por ahora, simplemente navegará a la pantalla de bienvenida si se ingresan datos válidos
    if (username === 'usuario' && password === 'contraseña') {
      navigation.navigate('Bienvenida');
    } else {
      setModalVisible(true);
    }
  };

  const handleForgotPassword = () => {
    // Lógica para manejar el olvido de contraseña (puedes implementar según tus necesidades)
    // Por ahora, simplemente muestra un mensaje de alerta
    alert('Olvidaste tu contraseña');
  };

  const handleRegister = () => {
    // Lógica para navegar a la pantalla de registro
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
    alignItems: 'center', // Centrar la imagen horizontalmente
    marginBottom: 16,
  },
  logo: {
    width: 140, // Ancho de la imagen
    height: 140, // Altura de la imagen
  },
  loginContainer: {
    backgroundColor: 'rgba(255, 0, 0, 0.2)', // Fondo semi-transparente, color rojo
    borderRadius: 10,
    padding: 16,
    width: '80%', // Ancho del contenido
    alignItems: 'center', // Centrar el contenido horizontalmente
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
    color: 'blue',  // Añade esta línea para cambiar el color del texto
    marginBottom: 12,
    paddingLeft: 8,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // o 'stretch' según tus preferencias
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
    borderRadius: 20, // O cualquier valor que desees para hacer el botón redondeado
    backgroundColor: 'red', // Cambia el color del botón
    padding: 10,
    width: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Para cubrir toda la pantalla
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Ajusta la opacidad según tus preferencias
  },
});

export default Login;
