import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {tailwind} from '../../../lib/tailwind';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AppContext} from '../../context/state';

export default function EWalletScreen({navigation}) {
  const {setPilihEWallet} = useContext(AppContext);
  return (
    <View>
      <TouchableOpacity
        style={tailwind(
          'bg-white px-4 py-5 flex flex-row justify-between items-center',
        )}
        onPress={() => {
          navigation.navigate('EWalletDetailed', {
            type: 'GOPAY',
          });
        }}>
        <View style={tailwind('flex flex-row items-center')}>
          <Text>Logo</Text>
          <Text style={tailwind('ml-4 text-gray-900 font-bold')}>
            GOPAY / GOPAY Driver
          </Text>
        </View>
        <View>
          <Ionicons name="chevron-forward-outline" size={26} color="#374151" />
        </View>
      </TouchableOpacity>

      <View
        style={{
          borderTopColor: '#D1D5DB',
          alignSelf: 'stretch',
          borderTopWidth: 0.7,
        }}></View>

      <TouchableOpacity
        style={tailwind(
          'bg-white px-4 py-5 flex flex-row justify-between items-center',
        )}
        onPress={() => {
          navigation.navigate('EWalletDetailed', {
            type: 'OVO',
          });
        }}>
        <View style={tailwind('flex flex-row items-center')}>
          <Text>Logo</Text>
          <Text style={tailwind('ml-4 text-gray-900 font-bold')}>OVO</Text>
        </View>
        <View>
          <Ionicons name="chevron-forward-outline" size={26} color="#374151" />
        </View>
      </TouchableOpacity>

      <View
        style={{
          borderTopColor: '#D1D5DB',
          alignSelf: 'stretch',
          borderTopWidth: 0.7,
        }}></View>
      <TouchableOpacity
        style={tailwind(
          'bg-white px-4 py-5 flex flex-row justify-between items-center',
        )}
        onPress={() => {
          navigation.navigate('EWalletDetailed', {
            type: 'GRAB',
          });
        }}>
        <View style={tailwind('flex flex-row items-center')}>
          <Text>Logo</Text>
          <Text style={tailwind('ml-4 text-gray-900 font-bold')}>
            GRAB DRIVER
          </Text>
        </View>
        <View>
          <Ionicons name="chevron-forward-outline" size={26} color="#374151" />
        </View>
      </TouchableOpacity>
      <View
        style={{
          borderTopColor: '#D1D5DB',
          alignSelf: 'stretch',
          borderTopWidth: 0.7,
        }}></View>
      <TouchableOpacity
        style={tailwind(
          'bg-white px-4 py-5 flex flex-row justify-between items-center',
        )}
        onPress={() => {
          navigation.navigate('EWalletDetailed', {
            type: 'DANA',
          });
        }}>
        <View style={tailwind('flex flex-row items-center')}>
          <Text>Logo</Text>
          <Text style={tailwind('ml-4 text-gray-900 font-bold')}>DANA</Text>
        </View>
        <View>
          <Ionicons name="chevron-forward-outline" size={26} color="#374151" />
        </View>
      </TouchableOpacity>
      <View
        style={{
          borderTopColor: '#D1D5DB',
          alignSelf: 'stretch',
          borderTopWidth: 0.7,
        }}></View>
      <TouchableOpacity
        style={tailwind(
          'bg-white px-4 py-5 flex flex-row justify-between items-center',
        )}
        onPress={() => {
          navigation.navigate('EWalletDetailed', {
            type: 'SHOPEE PAY',
          });
        }}>
        <View style={tailwind('flex flex-row items-center')}>
          <Text>Logo</Text>
          <Text style={tailwind('ml-4 text-gray-900 font-bold')}>
            SHOPEE PAY
          </Text>
        </View>
        <View>
          <Ionicons name="chevron-forward-outline" size={26} color="#374151" />
        </View>
      </TouchableOpacity>
      
      <View
        style={{
          borderTopColor: '#D1D5DB',
          alignSelf: 'stretch',
          borderTopWidth: 0.7,
        }}></View>

      <TouchableOpacity
        style={tailwind(
          'bg-white px-4 py-5 flex flex-row justify-between items-center',
        )}
        onPress={() => {
          navigation.navigate('EWalletDetailed', {
            type: 'LinkAja',
          });
        }}>
        <View style={tailwind('flex flex-row items-center')}>
          <Text>Logo</Text>
          <Text style={tailwind('ml-4 text-gray-900 font-bold')}>LINKAJA</Text>
        </View>
        <View>
          <Ionicons name="chevron-forward-outline" size={26} color="#374151" />
        </View>
      </TouchableOpacity>
    </View>
  );
}
