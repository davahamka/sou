import React, {useContext} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {tailwind, getColor} from '../../../lib/tailwind';
import PulsaCard from '../../components/PulsaCard';

export default function PulsaScreen() {
  const [noTujuan, setNoTujuan] = React.useState('');

  return (
    <>
      <View style={tailwind('px-4 pt-4 bg-white flex flex-row')}>
        <Text>Logo</Text>
        <Text style={tailwind('ml-3 font-bold text-lg')}>Token Listrik</Text>
      </View>

      <View style={tailwind('px-4 pt-4 bg-white')}>
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
      </View>

      <ScrollView
        style={[styles.scene, {backgroundColor: getColor('gray-100')}]}>
        <View
          style={tailwind(
            'flex flex-row flex-wrap items-center w-full px-2 mt-2 mb-6',
          )}>
          <PulsaCard data={{kode_produk: 4000}} />
          <PulsaCard data={{kode_produk: 4000}} />
          <PulsaCard data={{kode_produk: 4000}} />
          <PulsaCard data={{kode_produk: 4000}} />
          <PulsaCard data={{kode_produk: 4000}} />
          <PulsaCard data={{kode_produk: 4000}} />
          <PulsaCard data={{kode_produk: 4000}} />
          <PulsaCard data={{kode_produk: 4000}} />
          <PulsaCard data={{kode_produk: 4000}} />
          <PulsaCard data={{kode_produk: 4000}} />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
