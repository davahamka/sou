import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {tailwind} from '../../lib/tailwind';

export default ({value, onPress}) => {
  return (
    <TouchableOpacity
      style={tailwind(
        'bg-white px-4 py-5 flex flex-row justify-between items-center',
      )}
      onPress={onPress}>
      <View style={tailwind('flex flex-row items-center')}>
        <Text style={tailwind('ml-4 text-gray-900 text-lg ')}>
          {value} bulan
        </Text>
      </View>
      <View>
        <Ionicons name="chevron-forward-outline" size={26} color="#374151" />
      </View>
    </TouchableOpacity>
  );
};
