import React, {useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {tailwind, getColor} from '../../../lib/tailwind';
import PulsaCard from '../../components/PulsaCard';
import {useQuery} from 'react-query';
import {getProductList} from '../../utils/api';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Modalize} from 'react-native-modalize';
import BulanList from '../../components/BulanList';

export default function PulsaScreen() {
  const [noTujuan, setNoTujuan] = React.useState('');
  const [pilihBulan, setPilihBulan] = React.useState('');
  const {data} = useQuery('TOKEN PLN', () => getProductList('#TOKEN', ''));

  const bulan = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const modalizeRef = useRef(null);

  const windowWidth = Dimensions.get('window').width;

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const onClose = () => {
    modalizeRef.current?.close();
  };
  return (
    <>
      <View style={tailwind('px-4 pt-4 bg-white flex items-center flex-row')}>
        <Image
          style={{
            width: 40,
            height: 40,
          }}
          source={{
            uri: `http://dev.pasukanlangit.id/_next/image?url=http%3A%2F%2Fciptasolusiaplikasi.com%2Ficon%2FIcon_bpjs.png&w=64&q=75`,
          }}
        />
        <Text style={tailwind('ml-3 font-bold text-lg')}>BPJS Kesehatan</Text>
      </View>

      <View style={tailwind('px-4 pt-4 bg-white')}>
        <Text>Nomer BPJS</Text>
        <TextInput
          keyboardType="numeric"
          value={noTujuan}
          onChangeText={(text) => {
            setNoTujuan(text);
          }}
          onSubmitEditing={() => console.log(noTujuan)}
          selectionColor={getColor('blue-500')}
          style={tailwind('border border-gray-300 mt-2 mb-2 p-2 rounded')}
        />
      </View>

      <View style={tailwind('px-4 pt-2 bg-white')}>
        <Text>Sampai dengan</Text>
        <TouchableOpacity
          onPress={onOpen}
          selectionColor={getColor('blue-500')}
          style={tailwind(
            'border border-gray-300 mt-2 mb-12 p-2 h-12 flex flex-row items-center rounded',
          )}>
          <Text>
            {pilihBulan} {pilihBulan && 'bulan'}
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          position: 'absolute',
          flex: 1,
          width: windowWidth,
          bottom: 0,
        }}>
        <View
          style={{
            height: 80,
            backgroundColor: 'white',
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={tailwind('bg-gray-400 rounded-xl py-3 px-20')}>
            <Text style={tailwind('text-white font-bold text-lg')}>
              Lanjut Pembayaran
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modalize
        ref={modalizeRef}
        scrollViewProps={{
          showsHorizontalScrollIndicator: false,
          showsVerticalScrollIndicator: false,
        }}>
        <View style={tailwind('my-4')}>
          {bulan.map((item) => (
            <BulanList
              value={item}
              onPress={() => {
                setPilihBulan(item);
                onClose();
              }}
            />
          ))}
        </View>
      </Modalize>
    </>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
