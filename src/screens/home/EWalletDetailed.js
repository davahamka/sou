import React from 'react';
import {View, Text, ScrollView, TextInput, StyleSheet} from 'react-native';
import {useQuery} from 'react-query';
import {tailwind, getColor} from '../../../lib/tailwind';
import PulsaCard from '../../components/PulsaCard';
import {getProductList} from '../../utils/api';

export default ({route}) => {
  const {type} = route.params;
  const [noTujuan, setNoTujuan] = React.useState('');
  const {data} = useQuery(type, () =>
    getProductList('#EMONEY', type === 'GOPAY' ? 'GOJEK' : type),
  );
  console.log(data);
  return (
    <>
      <View style={tailwind('px-4 pt-4 bg-white flex flex-row')}>
        <Text>Logo</Text>
        <Text style={tailwind('ml-3 font-bold text-lg')}>{type}</Text>
      </View>

      <View style={tailwind('px-4 pt-4 bg-white')}>
        <Text>Nomer Tujuan</Text>
        <TextInput
          keyboardType="numeric"
          value={noTujuan}
          onChangeText={(text) => {
            setNoTujuan(text);
          }}
          onSubmitEditing={() => console.log(noTujuan)}
          selectionColor={getColor('blue-500')}
          style={tailwind('border border-gray-300 mt-2 mb-12 p-2 rounded')}
        />
      </View>

      <ScrollView
        style={[styles.scene, {backgroundColor: getColor('gray-100')}]}>
        <View
          style={tailwind(
            'flex flex-row flex-wrap items-center w-full px-2 mt-2 mb-6',
          )}>
          {data?.data.map((item) => (
            <PulsaCard data={item} key={item.kode_produk} />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
