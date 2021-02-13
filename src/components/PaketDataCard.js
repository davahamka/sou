import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {tailwind, getColor} from '../../lib/tailwind';
import {Dimensions} from 'react-native';

var width = Dimensions.get('window').width; //full width

export default ({data, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        width: width,
      }}
      onPress={onPress}>
      <View
        style={{
          borderRadius: 8,
          marginVertical: 12,
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
        <Text style={tailwind('text-gray-900 font-bold')}>
          {data.short_dsc}
        </Text>
        <Text style={tailwind('text-gray-400 text-sm mt-1')}>{data.dsc}</Text>
        <Text style={tailwind('mt-3 text-gray-900 font-bold')}>
          Rp{data.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
