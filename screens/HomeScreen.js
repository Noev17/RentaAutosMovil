import React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        {/* Agrega un View con fondo oscuro */}
        <View style={styles.overlay} />
        <View style={styles.logoContainer}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
        </View>
        <View style={styles.messageContainer}>
          <Text style={styles.message}>
            ¡ Movilidad a Tu Medida, Renta Sin Límites!
          </Text>
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
    width: 150,
    height: 150,
  },
  messageContainer: {
    backgroundColor: 'rgba(255, 0, 0, 0.0)',
    borderRadius: 10,
    padding: 16,
    width: '80%',
    alignItems: 'center',
  },
  message: {
    fontSize: 28,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'serif', 
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Para cubrir toda la pantalla
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Ajusta la opacidad según tus preferencias
  },
});

export default Home;
