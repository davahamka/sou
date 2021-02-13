import React, {useContext, useRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {tailwind, getColor} from '../../../lib/tailwind';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import PulsaCard from '../../components/PulsaCard';
import PaketDataCard from '../../components/PaketDataCard';
import {checkOperator} from '../../utils/helpers';
import {AppContext} from '../../context/state';
import {Modalize} from 'react-native-modalize';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Col, Grid} from 'react-native-easy-grid';
import {dataPulsa} from '../../utils/dummy';

const FirstRoute = ({onOpen, data, setPilihan}) => {
  return (
    <ScrollView style={[styles.scene, {backgroundColor: getColor('gray-100')}]}>
      <View
        style={tailwind(
          'flex flex-row flex-wrap items-center w-full px-2 mt-2 mb-6',
        )}>
        {data.map((item) => (
          <PulsaCard
            key={item.kode_produk}
            data={item}
            onPress={() => {
              onOpen();
              setPilihan(item);
            }}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const SecondRoute = () => {
  return (
    <ScrollView style={[styles.scene, {backgroundColor: getColor('gray-100')}]}>
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
  );
};

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: '#0A57FF'}}
    style={{backgroundColor: 'white'}}
    renderLabel={({route, focused, color}) => {
      let colorName;

      if (route.title === 'Pulsa') {
        colorName = focused
          ? getColor('metrocolor-primary')
          : getColor('gray-400');
      } else if (route.title === 'Paket Data') {
        colorName = focused
          ? getColor('metrocolor-primary')
          : getColor('gray-400');
      }

      return (
        <Text style={{color: colorName, margin: 8, fontWeight: '700'}}>
          {route.title}
        </Text>
      );
    }}
  />
);

const initialLayout = {width: Dimensions.get('window').width};

export default function PulsaScreen() {
  const {pilihPulsaData} = useContext(AppContext);
  const [index, setIndex] = React.useState(pilihPulsaData);
  const [operator, setOperator] = React.useState('Operator');
  const [noTujuan, setNoTujuan] = React.useState('');
  const [pilihan, setPilihan] = React.useState('');
  const [routes] = React.useState([
    {key: 'first', title: 'Pulsa'},
    {key: 'second', title: 'Paket Data'},
  ]);
  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const onClose = () => {
    modalizeRef.current?.close();
  };

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'first':
        return (
          <FirstRoute
            onOpen={onOpen}
            data={dataPulsa}
            setPilihan={setPilihan}
          />
        );
      case 'second':
        return <SecondRoute />;
      default:
        return null;
    }
  };

  return (
    <>
      <View style={tailwind('px-4 pt-4 bg-white flex flex-row items-center')}>
        <Text>Logo</Text>
        <Text style={tailwind('ml-3 text-lg font-bold')}>{operator}</Text>
      </View>

      <View style={tailwind('px-4 pt-4 bg-white')}>
        <Text>Nomer Tujuan</Text>
        <TextInput
          keyboardType="numeric"
          value={noTujuan}
          onChangeText={(text) => {
            setNoTujuan(text);
            setOperator(checkOperator(text));
          }}
          onSubmitEditing={() => console.log(noTujuan)}
          selectionColor={getColor('blue-500')}
          style={tailwind('border border-gray-300 my-2 p-2 rounded')}
        />
      </View>

      <TabView
        renderTabBar={renderTabBar}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />

      <Modalize
        ref={modalizeRef}
        snapPoint={360}
        scrollViewProps={{
          showsHorizontalScrollIndicator: false,
          showsVerticalScrollIndicator: false,
        }}
        withHandle={false}>
        <View style={tailwind('px-4 py-6')}>
          <Text style={tailwind('text-lg font-bold text-gray-800')}>
            Informasi Pelanggan
          </Text>
          <View style={tailwind('pt-4 flex flex-row justify-between')}>
            <Text style={tailwind('text-gray-500')}>Nomer Ponsel</Text>
            <Text style={tailwind('text-gray-500')}>{noTujuan}</Text>
          </View>
        </View>

        <View
          style={{
            borderTopColor: getColor('gray-100'),
            alignSelf: 'stretch',
            borderTopWidth: 10,
          }}></View>

        <View style={tailwind('px-4 py-6')}>
          <Text style={tailwind('text-lg font-bold text-gray-800')}>
            Detail Pembyaran
          </Text>
          <View style={tailwind('pt-6 flex flex-row justify-between')}>
            <Text style={tailwind('text-gray-500')}>
              {operator + ' ' + pilihan.kode_produk}
            </Text>
            <Text style={tailwind('text-gray-500')}>Rp.{pilihan.price}</Text>
          </View>
          <View style={tailwind('pt-2 flex flex-row justify-between')}>
            <Text style={tailwind('text-gray-500')}>Biaya Transaksi</Text>
            <Text style={tailwind('text-gray-500')}>Rp.0</Text>
          </View>
        </View>

        <Grid style={tailwind('px-4 pt-2')}>
          <Col>
            <TouchableOpacity
              style={tailwind('p-4 bg-blue-50 rounded-xl mr-2')}
              onPress={onClose}>
              <Text
                style={tailwind(
                  'text-center font-bold text-metrocolor-primary',
                )}>
                Ubah
              </Text>
            </TouchableOpacity>
          </Col>
          <Col>
            <TouchableOpacity
              style={tailwind('p-4 bg-metrocolor-primary rounded-xl ml-2')}>
              <Text style={tailwind('text-center font-bold text-white')}>
                Konfirmasi
              </Text>
            </TouchableOpacity>
          </Col>
        </Grid>
      </Modalize>
    </>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
