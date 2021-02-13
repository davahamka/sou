import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';
import {tailwind, getColor} from '../../../lib/tailwind';
import PulsaCard from '../../components/PulsaCard';
import {useQuery} from 'react-query';
import {getProductList} from '../../utils/api';

export default function PulsaScreen() {
  const [noTujuan, setNoTujuan] = React.useState('');
  const {data} = useQuery('TOKEN PLN', () => getProductList('#TOKEN', ''));
  return (
    <>
      <View style={tailwind('px-4 pt-4 bg-white flex items-center flex-row')}>
        <Image
          style={{
            width: 40,
            height: 40,
          }}
          source={{
            uri: `http://dev.pasukanlangit.id/_next/image?url=http%3A%2F%2Fciptasolusiaplikasi.com%2Ficon%2FIcon_pln.png&w=64&q=75`,
          }}
        />
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
          {data?.data.map((item) => (
            <PulsaCard key={item.kode_produk} data={item} />
          ))}
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
