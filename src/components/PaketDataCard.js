import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {tailwind, getColor} from '../../lib/tailwind';
import {Dimensions} from 'react-native';

var width = Dimensions.get('window').width; //full width

export default ({data}) => {
  return (
    <TouchableOpacity
      style={{
        width: width,
      }}>
      <View
        style={{
          borderRadius: 8,
          marginVertical: 14,
          alignSelf: 'stretch',
          backgroundColor: '#ffffff',
          marginHorizontal: 12,
          padding: 12,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 0.5,
          },
          shadowOpacity: 0.18,
          shadowRadius: 1.0,
          elevation: 1,
        }}>
        <Text style={tailwind('text-gray-900 text-lg font-bold')}>
          Yellow 1GB / 3Hari
        </Text>
        <Text style={tailwind('text-gray-400 text-sm ')}>
          Kuota Utama 1GB, masa aktif 3 Hari. Internetan aman dengan Pulsa Safe,
          Pembelian paket akan menggantia
        </Text>
        <Text style={tailwind('mt-3 text-gray-900 font-bold')}>Rp.5000</Text>
      </View>
    </TouchableOpacity>
  );
};
