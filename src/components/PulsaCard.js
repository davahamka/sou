import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {tailwind, getColor} from '../../lib/tailwind';

export default ({data, onPress}) => {
  return (
    <>
      <TouchableOpacity
        style={tailwind('w-1/2 rounded-md my-2')}
        onPress={onPress}>
        <View style={tailwind('px-2')}>
          <Text
            style={{
              textAlign: 'center',
              backgroundColor: 'white',
              paddingVertical: 20,
              fontWeight: '700',
              color: getColor('gray-800'),
              borderRadius: 4,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 0.5,
              },
              shadowOpacity: 0.18,
              shadowRadius: 1.0,
              elevation: 1,
            }}>
            {data.short_dsc || data.kode_produk}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};
