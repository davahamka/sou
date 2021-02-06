import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import ActivityScreen from './src/screens/ActivityScreen';
import AccountScreen from './src/screens/AccountScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import PulsaScreen from './src/screens/PulsaScreen';
import { Image, StatusBar, View, Text } from "react-native";
import {tailwind} from './lib/tailwind';


function LogoTitle() {
  return (
    <Image
      source={require('./src/assets/logo.png')}
      style={{ width: 100, height: 26 }}
    />
  );
}

function ActivityTitle() {
  return (
    <View>
      <Text style={tailwind("text-2xl font-bold text-white mb-3")}>My Activity</Text>
      <View style={tailwind("flex flex-row")}>
        <Text style={tailwind("text-white pr-4")}>Recent</Text>
        <Text style={tailwind("text-white px-4")}>Last Month</Text>
        <Text style={tailwind("text-white px-4")}>Last year</Text>
      </View>
    </View>
  );
}


const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTitle: props => <LogoTitle {...props} />,
        headerStyle: {
          backgroundColor: '#0A57FF',
          elevation: 0,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        cardStyle: {
          backgroundColor: "#fff"
        }
      }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  )
}

const ActivityStack = createStackNavigator();

const ActivityStackScreen = () => {
  return (
    <ActivityStack.Navigator
      screenOptions={{
        headerTitle: props => <ActivityTitle {...props} />,
        headerStyle: {
          backgroundColor: '#0A57FF',
          elevation: 0,
          height: 100
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        cardStyle: {
          backgroundColor: "#fff"
        }
      }}>
      <ActivityStack.Screen name="Home" component={ActivityScreen} />
    </ActivityStack.Navigator>
  )
}

const PaymentStack = createStackNavigator();

const PaymenStackScreen = () => {
  return (
    <PaymentStack.Navigator
      screenOptions={{
        headerTitle: "Payment",
        headerStyle: {
          backgroundColor: '#fff',
          elevation: 0,
          height: 60,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: '500',
          color:'#000',
          textAlign:'center'
        },
        cardStyle: {
          backgroundColor: "#fff"
        }
      }}>
      <PaymentStack.Screen name="Home" component={PaymentScreen} />
    </PaymentStack.Navigator>
  )
}

const AccountStack = createStackNavigator();

const AccountStackScreen = () => {
  return (
    <AccountStack.Navigator
      screenOptions={{
        headerTitle: "My Activity",
        headerStyle: {
          backgroundColor: '#3B82F6',
          elevation: 0,
          height: 0
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        cardStyle: {
          backgroundColor: "#fff"
        }
      }}>
      <AccountStack.Screen name="Home" component={AccountScreen} />
    </AccountStack.Navigator>
  )
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Awal = () => {
  return (
    <Tab.Navigator>
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
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerTitle: "",
          headerStyle:{
            height:0
          }
        }}>
          <Stack.Screen name="Awal" component={Awal} />
          <Stack.Screen name="Pulsa" component={PulsaScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};


export default App;
