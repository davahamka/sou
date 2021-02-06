import React from "react";
import { SafeAreaView, ScrollView, View, Text, Button } from "react-native";
import { Grid, Row, Col } from "react-native-easy-grid"
import Swiper from "react-native-swiper";
import {tailwind} from "../../lib/tailwind";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">

        <View style={tailwind('h-36 bg-metrocolor-primary p-4')}>
          <View style={tailwind('flex flex-row')}>
            <View style={tailwind('flex flex-col')}>
              <Text style={tailwind('text-white text-xl font-medium')}>Hi, Dava</Text>
              <Text style={tailwind('text-white text-sm font-light')}>6281578608074</Text>
            </View>
          </View>
        </View>

        <View style={tailwind('px-4')}>
          <View style={tailwind('bg-white -mt-10 rounded-lg p-4')}>
            <Grid>
              <Row>
                <Col>
                  <Text style={tailwind("text-center")}>Pulsa</Text>
                </Col>
                <Col>
                  <Text style={tailwind("text-center")}>Data</Text>
                </Col>
                <Col>
                  <Text style={tailwind("text-center")}>PLN</Text>
                </Col>
                <Col>
                  <Text style={tailwind("text-center")}>E-Wallet</Text>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Text style={tailwind("text-center text-sm")}>Tagihan</Text>
                </Col>
                <Col>
                  <Text style={tailwind("text-center text-sm")}>Game</Text>
                </Col>
                <Col>
                  <Text style={tailwind("text-center text-sm")}>Voucher</Text>
                </Col>
                <Col>
                  <Text style={tailwind("text-center text-sm")}>Lainnya</Text>
                </Col>
              </Row>
            </Grid>
          </View>
        </View>

        <View style={tailwind("px-4 pt-10")}>
          <View style={tailwind("bg-blue-100 p-4 rounded")}>
            <View style={tailwind("flex flex-row  mb-2")}>
              <Text>Logo</Text>
              <Text style={tailwind("ml-2 text-blue-500")}>Pemberitahuan</Text>
            </View>
            <Text style={tailwind("text-blue-500 font-light leading-5")}>
              Pada per tanggal 20 Januari 2020 potongan pajak sebesar 1,5% dari
              setiap transaksi yang dilakukan. Hal tersebut diberlakukan sejak
              peraturan pemerintah yang terbaru.
              </Text>
          </View>
        </View>

        <View style={tailwind("px-4 pt-10")}>
          <Text style={tailwind("text-xl text-gray-800 font-semibold")}>Info dan Promosi</Text>
          <Swiper>
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

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Pulsa')}
          />
        </View>


      </ScrollView>
    </SafeAreaView>
  )
}