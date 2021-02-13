import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppProvider} from './src/context/state';
import {Image, StatusBar, View, Text} from 'react-native';
import {tailwind} from './lib/tailwind';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './src/screens/HomeScreen';
import ActivityScreen from './src/screens/ActivityScreen';
import AccountScreen from './src/screens/AccountScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import PulsaScreen from './src/screens/home/PulsaScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import LainnyaScreen from './src/screens/LainnyaScreen';
import EditProfileScreen from './src/screens/account/EditProfileScreen';
import PLNScreen from './src/screens/home/PLNScreen';
import PLNTokenScreen from './src/screens/home/PLNTokenScreen';
import GameScreen from './src/screens/home/GameScreen';
import EWalletScreen from './src/screens/home/EWalletScreen';
import EWalletDetailed from './src/screens/home/EWalletDetailed';
import GameDetailedScreen from './src/screens/home/GameDetailedScreen';

function LogoTitle() {
  return (
    <Image
      source={require('./src/assets/logo.png')}
      style={{width: 100, height: 26}}
    />
  );
}

function ActivityTitle() {
  return (
    <View>
      <Text style={tailwind('text-2xl font-bold text-white mb-3')}>
        My Activity
      </Text>
      <View style={tailwind('flex flex-row')}>
        <Text style={tailwind('text-white pr-4')}>Recent</Text>
        <Text style={tailwind('text-white px-4')}>Last Month</Text>
        <Text style={tailwind('text-white px-4')}>Last year</Text>
      </View>
    </View>
  );
}

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTitle: (props) => <LogoTitle {...props} />,
        headerStyle: {
          backgroundColor: '#0A57FF',
          elevation: 0,
        },
        headerLeft: () => null,
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        cardStyle: {
          backgroundColor: '#ffffff',
        },
      }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Lainnya" component={LainnyaScreen} />
    </HomeStack.Navigator>
  );
};

const ActivityStack = createStackNavigator();

const ActivityStackScreen = () => {
  return (
    <ActivityStack.Navigator
      screenOptions={{
        headerTitle: (props) => <ActivityTitle {...props} />,
        headerStyle: {
          backgroundColor: '#0A57FF',
          elevation: 0,
          height: 100,
        },
        headerLeft: () => null,
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        cardStyle: {
          backgroundColor: '#ffffff',
        },
      }}>
      <ActivityStack.Screen name="Home" component={ActivityScreen} />
    </ActivityStack.Navigator>
  );
};

const PaymentStack = createStackNavigator();

const PaymenStackScreen = () => {
  return (
    <PaymentStack.Navigator
      screenOptions={{
        headerTitle: 'Payment',
        headerStyle: {
          backgroundColor: '#ffffff',
          elevation: 0,
          height: 60,
        },
        headerLeft: () => null,
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight: '500',
          color: '#000',
          textAlign: 'center',
        },
        cardStyle: {
          backgroundColor: '#ffffff',
        },
      }}>
      <PaymentStack.Screen name="Home" component={PaymentScreen} />
    </PaymentStack.Navigator>
  );
};

const AccountStack = createStackNavigator();

const AccountStackScreen = () => {
  return (
    <AccountStack.Navigator
      screenOptions={{
        headerTitle: 'My Activity',
        headerStyle: {
          backgroundColor: '#3B82F6',
          elevation: 0,
          height: 0,
        },
        headerLeft: () => null,
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        cardStyle: {
          backgroundColor: '#ffffff',
        },
      }}>
      <AccountStack.Screen name="Home" component={AccountScreen} />
    </AccountStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Awal = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Activity') {
            iconName = focused ? 'newspaper' : 'newspaper-outline';
          } else if (route.name === 'Payment') {
            iconName = focused ? 'wallet' : 'wallet-outline';
          } else if (route.name === 'Account') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#0A57FF',
        inactiveTintColor: '#6b7280',
        labelStyle: {
          marginBottom: 2,
          padding: 0,
          fontWeight: '700',
        },
      }}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Activity" component={ActivityStackScreen} />
      <Tab.Screen name="Payment" component={PaymenStackScreen} />
      <Tab.Screen name="Account" component={AccountStackScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#0A57FF" />
      <AppProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerTitle: '',
              headerStyle: {
                height: 0,
              },
              cardStyle: {
                backgroundColor: '#fff',
              },
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{headerShown: false, headerLeft: () => null}}
            />
            <Stack.Screen
              name="Awal"
              component={Awal}
              options={{headerShown: false, headerLeft: () => null}}
            />
            <Stack.Screen
              name="Pulsa"
              component={PulsaScreen}
              options={{
                headerStyle: {
                  height: 60,
                  elevation: 0,
                },
                headerTitle: 'Pulsa dan Paket Data',
                cardStyle: {
                  backgroundColor: '#f1f1f1',
                },
              }}
            />
            <Stack.Screen
              name="PLN"
              component={PLNScreen}
              options={{
                headerStyle: {
                  height: 60,
                  elevation: 0,
                },
                headerTitle: 'PLN',
                cardStyle: {
                  backgroundColor: '#f1f1f1',
                },
              }}
            />
            <Stack.Screen
              name="PLNToken"
              component={PLNTokenScreen}
              options={{
                headerStyle: {
                  height: 60,
                  elevation: 0,
                },
                headerTitle: 'PLN',
                cardStyle: {
                  backgroundColor: '#f1f1f1',
                },
              }}
            />
            <Stack.Screen
              name="Game"
              component={GameScreen}
              options={{
                headerStyle: {
                  height: 60,
                  elevation: 0,
                },
                headerTitle: 'Game',
                cardStyle: {
                  backgroundColor: '#f1f1f1',
                },
              }}
            />
            <Stack.Screen
              name="GameDetailed"
              component={GameDetailedScreen}
              options={{
                headerStyle: {
                  height: 60,
                  elevation: 0,
                },
                headerTitle: 'Game',
                cardStyle: {
                  backgroundColor: '#f1f1f1',
                },
              }}
            />
            <Stack.Screen
              name="EWallet"
              component={EWalletScreen}
              options={{
                headerStyle: {
                  height: 60,
                  elevation: 0,
                },
                headerTitle: 'E-Wallet',
                cardStyle: {
                  backgroundColor: '#f1f1f1',
                },
              }}
            />
            <Stack.Screen
              name="EWalletDetailed"
              component={EWalletDetailed}
              options={{
                headerStyle: {
                  height: 60,
                  elevation: 0,
                },
                headerTitle: 'E-Wallet',
                cardStyle: {
                  backgroundColor: '#f1f1f1',
                },
              }}
            />
            <Stack.Screen
              name="Edit Profile"
              component={EditProfileScreen}
              options={{
                headerStyle: {
                  height: 60,
                  elevation: 0,
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AppProvider>
    </>
  );
};

export default App;
