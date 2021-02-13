import React from 'react';
import {View, Text, ScrollView, TextInput, StyleSheet} from 'react-native';
import {tailwind, getColor} from '../../../lib/tailwind';
import PaketDataCard from '../../components/PaketDataCard';
import PulsaCard from '../../components/PulsaCard';

export default ({route}) => {
  const {type} = route.params;
  const [noTujuan, setNoTujuan] = React.useState('');

  return (
    <>
      <View style={tailwind('px-4 pt-4 bg-white flex flex-row pb-8')}>
        <Text>Logo</Text>
        <Text style={tailwind('ml-3 font-bold text-lg')}>{type}</Text>
      </View>

      {/* <View style={tailwind('px-4 pt-4 bg-white')}>
        <Text>Nomer Meter</Text>
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
      </View> */}

      <ScrollView
        style={[styles.scene, {backgroundColor: getColor('gray-100')}]}>
        <View style={tailwind('flex flex-row flex-wrap w-full mt-2 mb-6')}>
          <PaketDataCard data={{kode_produk: 4000}} />
          <PaketDataCard data={{kode_produk: 4000}} />
          <PaketDataCard data={{kode_produk: 4000}} />
          <PaketDataCard data={{kode_produk: 4000}} />
          <PaketDataCard data={{kode_produk: 4000}} />
          <PaketDataCard data={{kode_produk: 4000}} />
          <PaketDataCard data={{kode_produk: 4000}} />
          <PaketDataCard data={{kode_produk: 4000}} />
          <PaketDataCard data={{kode_produk: 4000}} />
          <PaketDataCard data={{kode_produk: 4000}} />
          <PaketDataCard data={{kode_produk: 4000}} />
          <PaketDataCard data={{kode_produk: 4000}} />
          <PaketDataCard data={{kode_produk: 4000}} />
          <PaketDataCard data={{kode_produk: 4000}} />
          <PaketDataCard data={{kode_produk: 4000}} />
          <PaketDataCard data={{kode_produk: 4000}} />
          <PaketDataCard data={{kode_produk: 4000}} />
          <PaketDataCard data={{kode_produk: 4000}} />
          <PaketDataCard data={{kode_produk: 4000}} />
          <PaketDataCard data={{kode_produk: 4000}} />
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
