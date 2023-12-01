// App.js
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MostrarMaqueta from './screens/MostrarMaqueta';
import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';
import Register from './screens/Register';
import MenuP from './screens/MenuPrincipal';
import RentaDeCarros from './screens/RentaDeCarros';

const AppNavigator = createStackNavigator(
  {
    MostrarMaqueta: {
      screen: MostrarMaqueta,
      navigationOptions: {
        title: 'Mostrar Maqueta',
      },
    },
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
      },
    },

    MenuP: {
      screen: MenuP,
      navigationOptions: {
        title: 'MenuP',
      },
    },

    Register: {
      screen: Register,
      navigationOptions: {
        title: 'Registrer',
      },
    },

    Login: {
      screen: Login,
      navigationOptions: {
        title: 'Login',
      },
    },
    RentaCarro: {
      screen: RentaDeCarros,
      navigationOptions: {
        title: 'Renta de Carros',
      },
    },
  },
  {
    initialRouteName: 'MostrarMaqueta',
    headerMode: 'none', // Esto oculta la barra de navegación
  }
);

export default createAppContainer(AppNavigator);
