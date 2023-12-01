import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const MenuPrincipal = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log('Texto de búsqueda:', searchText);
  };

  const carBrands = [
    { name: 'Chevrolet', image: require('../assets/carros/Chevrolet-logo.png') },
    { name: 'Honda', image: require('../assets/carros/Honda-logo.png') },
    { name: 'Ford', image: require('../assets/carros/Ford_logo.png') },
    // Add more car brands as needed
  ];

  const carModels = [
    { name: 'Honda Civic', rating: 4.5, price: '$350/día', image: require('../assets/modelos/civic.png') },
    { name: 'Honda CRV', rating: 4.2, price: '$445/día', image: require('../assets/modelos/crv.png') },
    { name: 'Onix Chevrolet', rating: 3.8, price: '$160/día', image: require('../assets/modelos/onix.png') },
    { name: 'Pacifico Ford', rating: 4.8, price: '$460/día', image: require('../assets/modelos/pacifico.png') },
    // Add more car models as needed
  ];

  const renderCarBrand = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image source={item.image} style={styles.carouselImageMarcas} />
      <Text style={styles.carouselText}>{item.name}</Text>
    </View>
  );

  const renderCarModel = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image source={item.image} style={styles.carouselImage} />
      <Text style={styles.carouselText}>{item.name}</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.modelRating}>Calificación: {item.rating}</Text>
        <Image source={require('../assets/estrella.png')} style={styles.starIcon} />
      </View>
      <Text style={styles.modelPrice}>Precio de Renta: {item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Capa de información del usuario */}
      <View style={styles.userInfo}>
        <Image
          style={styles.userImage}
          source={require('../assets/user.jpg')}
        />
        <Text style={styles.userName}>Nombre de Usuario</Text>
      </View>

      {/* Capa de marcas de carros */}
      <View style={styles.overlay}>
        <View style={styles.overlayContent}>
          <Text style={styles.overlayText}>Marcas más rentadas</Text>
          <Carousel 
            data={carBrands}
            renderItem={renderCarBrand}
            sliderWidth={400}
            sliderHeight={300}
            itemHeight={200}
            itemWidth={200}
            loop={true}
          />
        </View>
      </View>

      {/* Mostrar Todos Button */}
     

      {/* Capa de modelos de carros */}
      <View style={styles.overlayModels}>
        <View style={styles.overlayContent}>
          <Text style={styles.overlayText}>Modelos de carros</Text>
          <Carousel 
            data={carModels}
            renderItem={renderCarModel}
            sliderWidth={400}
            sliderHeight={300}
            itemHeight={200}
            itemWidth={200}
            loop={true}
          />
           <TouchableOpacity style={styles.mostrarTodosButton}>
        <Text style={styles.mostrarTodosButtonText}>Mostrar Todos</Text>
      </TouchableOpacity>
          {/* Barra de navegación */}
          <View style={styles.navBar}>
            <TouchableOpacity style={styles.navButton}>
              <Image source={require('../assets/hogar.png')} style={styles.navIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton}>
              <Image source={require('../assets/carros.png')} style={styles.navIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton}>
              <Image source={require('../assets/sobre.png')} style={styles.navIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton}>
              <Image source={require('../assets/usuario.png')} style={styles.navIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Mensaje en la zona superior de la capa principal */}
      <Text style={styles.messageText}>Renta tu carro favorito</Text>

      {/* Barra de búsqueda */}
      <View style={styles.searchContainer}>
        <Image
          style={styles.searchIcon}
          source={require('../assets/busqueda.png')}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar..."
          placeholderTextColor="#fff"
          onChangeText={(text) => setSearchText(text)}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Text style={styles.searchButton}>Buscar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#900202',
  },
  messageText: {
    padding: 30,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffff',
    marginTop: 50,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '75%',  // Ajusta la altura según tus necesidades
    backgroundColor: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 30,
  },
  overlayModels: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '55%',  // Ajusta la altura según tus necesidades
    backgroundColor: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 120,
  },
  overlayContent: {
    alignItems: 'center',
    padding: 30,
  },
  overlayText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#180b0b',
  },
  userInfo: {
    position: 'absolute',
    top: 20,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  userImage: {
    width: 30,
    height: 30,
    borderRadius: 10,
    marginRight: 10,
  },
  userName: {
    
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    padding: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 0,
  },
  searchIcon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    marginRight: 5,
  },
  searchInput: {
    flex: 0.7,
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingLeft: 15,
    paddingRight: 15,
    color: '#000',
  },
  searchButton: {
    fontSize: 16,
    color: '#fff',
    backgroundColor: '#900202',
    padding: 10,
    borderRadius: 20,
    marginLeft: 5,
  },
  carouselItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselImage: {
    width: 200,
    height: 100,
  },
  carouselImageMarcas: {
    width: 80,
    height: 60,
  },
  carouselText: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  modelRating: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  modelPrice: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#900202',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 10,
    bottom: 0,
  },
  navButton: {
    paddingHorizontal: 20,
  },
  navIcon: {
    width: 24,
    height: 24,
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  starIcon: {
    width: 16,
    height: 16,
    marginLeft: 5,
  },
  mostrarTodosButton: {
    backgroundColor: '#900202',
    padding: 10,
    borderRadius: 10,
    marginTop: 0,
  },
  mostrarTodosButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    
  },
});

export default MenuPrincipal;
