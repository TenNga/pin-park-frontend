import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';

const navigation = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    initialRouteParams: 'Components',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigation);
