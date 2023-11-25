// App.js
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MostrarMaqueta from './screens/MostrarMaqueta';
import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';
import Register from './screens/Register';


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
    
  },
  {
    initialRouteName: 'MostrarMaqueta',
  }
);

export default createAppContainer(AppNavigator);
