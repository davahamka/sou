import React, {useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Grid, Row, Col} from 'react-native-easy-grid';
import Swiper from 'react-native-swiper';
import {tailwind} from '../../lib/tailwind';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {AppContext} from '../context/state';

export default function HomeScreen({navigation}) {
  const {setPilihPulsaData} = useContext(AppContext);
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={tailwind('h-36 bg-metrocolor-primary p-4')}>
          <View style={tailwind('flex flex-row')}>
            <View style={tailwind('flex flex-col')}>
              <Text style={tailwind('text-white text-xl font-medium')}>
                Hi, Dava
              </Text>
              <Text style={tailwind('text-white text-sm font-light')}>
                6281578608074
              </Text>
            </View>
          </View>
        </View>

        <View style={tailwind('px-4')}>
          <View style={tailwind('bg-white -mt-10 rounded-lg p-4')}>
            <Grid>
              <Row>
                <Col>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Pulsa');
                      setPilihPulsaData(0);
                    }}>
                    <Icon
                      name="rocket"
                      size={30}
                      color="#900"
                      style={tailwind('text-center')}
                    />
                    <Text style={tailwind('text-center mt-2')}>Pulsa</Text>
                  </TouchableOpacity>
                </Col>
                <Col>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Pulsa');
                      setPilihPulsaData(1);
                    }}>
                    <Icon
                      name="rocket"
                      size={30}
                      color="#900"
                      style={tailwind('text-center')}
                    />
                    <Text style={tailwind('text-center mt-2')}>Data</Text>
                  </TouchableOpacity>
                </Col>
                <Col>
                  <TouchableOpacity onPress={() => navigation.navigate('PLN')}>
                    <Icon
                      name="rocket"
                      size={30}
                      color="#900"
                      style={tailwind('text-center')}
                    />
                    <Text style={tailwind('text-center mt-2')}>PLN</Text>
                  </TouchableOpacity>
                </Col>
                <Col>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('EWallet')}>
                    <Icon
                      name="rocket"
                      size={30}
                      color="#900"
                      style={tailwind('text-center')}
                    />
                    <Text style={tailwind('text-center mt-2')}>E-Wallet</Text>
                  </TouchableOpacity>
                </Col>
              </Row>
              <Row style={tailwind('mt-6')}>
                <Col>
                  <Icon
                    name="rocket"
                    size={30}
                    color="#900"
                    style={tailwind('text-center')}
                  />
                  <Text style={tailwind('text-center mt-2')}>BPJS</Text>
                </Col>
                <Col>
                  <TouchableOpacity onPress={() => navigation.navigate('Game')}>
                    <Icon
                      name="rocket"
                      size={30}
                      color="#900"
                      style={tailwind('text-center')}
                    />
                    <Text style={tailwind('text-center mt-2')}>Game</Text>
                  </TouchableOpacity>
                </Col>
                <Col>
                  <Icon
                    name="rocket"
                    size={30}
                    color="#900"
                    style={tailwind('text-center')}
                  />
                  <Text style={tailwind('text-center mt-2')}>Voucher</Text>
                </Col>
                <Col>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Lainnya')}>
                    <Icon
                      name="rocket"
                      size={30}
                      color="#900"
                      style={tailwind('text-center')}
                    />
                    <Text style={tailwind('text-center mt-2')}>Lainnya</Text>
                  </TouchableOpacity>
                </Col>
              </Row>
            </Grid>
          </View>
        </View>

        <View style={tailwind('px-4 pt-10')}>
          <View style={tailwind('bg-blue-100 p-4 rounded')}>
            <View style={tailwind('flex flex-row  mb-2 items-center')}>
              <Ionicon name="megaphone-outline" size={16} color="#3B82F6" />
              <Text style={tailwind('ml-2 text-blue-500')}>Pemberitahuan</Text>
            </View>
            <Text style={tailwind('text-blue-500 font-light leading-5')}>
              Pada per tanggal 20 Januari 2020 potongan pajak sebesar 1,5% dari
              setiap transaksi yang dilakukan. Hal tersebut diberlakukan sejak
              peraturan pemerintah yang terbaru.
            </Text>
          </View>
        </View>

        <View style={tailwind('px-4 pt-10')}>
          <Text style={tailwind('text-xl text-gray-800 font-semibold')}>
            Info dan Promosi
          </Text>
          <Swiper style={{height: 260}}>
            <View>
              <Text>Hello Swiper</Text>
            </View>
            <View>
              <Text>Hello Swiper</Text>
            </View>
            <View>
              <Text>Hello Swiper</Text>
            </View>
          </Swiper>
        </View>

        <View style={tailwind('px-4 pt-10')}>
          <Text style={tailwind('text-xl text-gray-800 font-semibold')}>
            Kenali Metro Lebih Dekat
          </Text>
          <Swiper style={{height: 200}}>
            <View>
              <Text>Hello Swiper</Text>
            </View>
            <View>
              <Text>Hello Swiper</Text>
            </View>
            <View>
              <Text>Hello Swiper</Text>
            </View>
          </Swiper>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
