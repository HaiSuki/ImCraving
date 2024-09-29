/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomePage from './pages/Home';

import GradientBlur from './components/global/GradientBlur';
import {Platform, useWindowDimensions} from 'react-native';
import {HomeIcon} from './components/global/icons/tabbar';
import {Clipboard, LeafyGreen, PizzaIcon} from 'lucide-react-native';
import StatsPage from './pages/Stats';
import ResultsPage from './pages/ResultPage';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({route, options, navigation}) => <></>,
        animation: Platform.OS === 'android' ? 'slide_from_bottom' : 'default',
      }}>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Result" component={ResultsPage} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
export default function Router() {
  const {width, height} = useWindowDimensions();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            elevation: 0,
            backgroundColor: 'transparent',
            height: 80,
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: '#F44BF4',
          tabBarInactiveTintColor: '#fff',
          tabBarLabelStyle: {
            fontSize: 0,
            marginBottom: -20,
          },
          tabBarLabel: '',
          tabBarBackground: () => <GradientBlur width={width} height={80} />,
        })}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarIcon: ({color, focused, size}) => (
              <HomeIcon color={color} focused={focused} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Stats"
          component={StatsPage}
          options={{
            tabBarIcon: ({color, focused, size}) => (
              <LeafyGreen color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
