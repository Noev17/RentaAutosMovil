import React from 'react';
import { View, Image, Text, StyleSheet,TouchableOpacity } from 'react-native';

const RentaDeCarros = () => {
  return (
    <View style={styles.container}>
      {/* Capa roja sin elementos */}
      <View style={styles.redContainer}></View>

      {/* Div blanco que cubre el 80% de la pantalla */}
      <View style={styles.halfScreenContainer}>
        {/* Imagen del carro */}
        <Image
          style={styles.carImage}
          source={require('../assets/modelos/pacifico.png')}  // Reemplaza con la ruta correcta de tu imagen
        />

        {/* Características del carro */}
        <View style={styles.carDetails}>
          <Text style={styles.carName}>Chevrolet Pacifico</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.carRating}>Calificación: 4.5</Text>
            <Image
              style={styles.starIcon}
              source={require('../assets/estrella.png')}  // Reemplaza con la ruta correcta de tu ícono de estrella
            />
          </View>
          <Text style={styles.carPrice}>Precio: $350/día</Text>
        </View>
         {/* Línea debajo de los detalles */}
    <View style={styles.line}></View>

{/* Nombre de usuario e imagen del usuario */}
<View style={styles.userInfo}>
  <Image
    style={styles.userImage}
    source={require('../assets/user.jpg')}  
  />
  <Text style={styles.userName}>Nombre de Usuario</Text>
</View>
{/* Detalles adicionales del carro */}
<View style={styles.carDetailsUser}>
    <Text style={styles.carDetailText}>Año: 2022</Text>
    <Text style={styles.carDetailText}>Color: Rojo</Text>
    <Text style={styles.carDetailText}>Kilómetros: 10,000</Text>
  </View>
  {/* Botón de rentar */}
  <View style={styles.rentButtonContainer}>
          <TouchableOpacity style={styles.rentButton}>
            <Text style={styles.rentButtonText}>Rentar</Text>
            <Text style={styles.pricePerDay}>$350/día</Text>
          </TouchableOpacity>
        </View>
    
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#900202',
  },
  redContainer: {
    flex: 1,
    backgroundColor: '#900202',
  },
  halfScreenContainer: {
    flex: 11,  // El 80% de la pantalla
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  rentButtonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  rentButton: {
    backgroundColor: '#900202',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rentButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  pricePerDay: {
    color: '#fff',
    fontSize: 14,
  },
  carImage: {
    width: 300,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  carDetails: {
    marginTop: 20,
    borderColor:'#b6b3b3',
  },
  carName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  carRating: {
    fontSize: 16,
    color: '#333',
  },
  starIcon: {
    width: 16,
    height: 16,
    marginLeft: 5,
  },
  carPrice: {
    marginTop: 5,
    fontSize: 16,
    color: '#900202',
  },
  carDetailsUser: {
    marginTop: 10,
  },
  carDetailText: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  userImage: {
    width: 30,
    height: 30,
    borderRadius: 10,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default RentaDeCarros;
