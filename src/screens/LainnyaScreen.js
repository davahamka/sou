import React from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { tailwind } from "../../lib/tailwind";
import { Grid, Col, Row } from "react-native-easy-grid";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function LainnyScreen({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View style={tailwind("p-6 bg-metrocolor-primary")}>
        </View>

        <View style={tailwind("mx-4 p-4 rounded -mt-6 bg-white")}>
          <Grid>
            <Row>
              <Col>
                <TouchableOpacity onPress={() => navigation.navigate("Pulsa")}>
                  <Icon name="rocket" size={30} color="#900" style={tailwind('text-center')} />
                  <Text style={tailwind("text-center mt-2")}>Pulsa</Text>
                </TouchableOpacity>
              </Col>
              <Col>
                <TouchableOpacity>
                  <Icon name="rocket" size={30} color="#900" style={tailwind('text-center')} />
                  <Text style={tailwind("text-center mt-2")}>Data</Text>
                </TouchableOpacity>
              </Col>
              <Col>
                <TouchableOpacity onPress={() => navigation.navigate("PLN")}>
                  <Icon name="rocket" size={30} color="#900" style={tailwind('text-center')} />
                  <Text style={tailwind("text-center mt-2")}>PLN</Text>
                </TouchableOpacity>
              </Col>
              <Col>
                <TouchableOpacity onPress={() => navigation.navigate("EWallet")}>
                  <Icon name="rocket" size={30} color="#900" style={tailwind('text-center')} />
                  <Text style={tailwind("text-center mt-2")}>E-Wallet</Text>
                </TouchableOpacity>
              </Col>
            </Row>
            <Row style={tailwind("mt-6")}>
              <Col>
                <Icon name="rocket" size={30} color="#900" style={tailwind('text-center')} />
                <Text style={tailwind("text-center mt-2")}>Tagihan</Text>
              </Col>
              <Col>
                <TouchableOpacity onPress={() => navigation.navigate("Game")}>
                  <Icon name="rocket" size={30} color="#900" style={tailwind('text-center')} />
                  <Text style={tailwind("text-center mt-2")}>Game</Text>
                </TouchableOpacity>
              </Col>
              <Col>
                <Icon name="rocket" size={30} color="#900" style={tailwind('text-center')} />
                <Text style={tailwind("text-center mt-2")}>Voucher</Text>
              </Col>
              <Col>
                <TouchableOpacity onPress={() => navigation.navigate("Lainnya")}>
                  <Icon name="rocket" size={30} color="#900" style={tailwind('text-center')} />
                  <Text style={tailwind("text-center mt-2")}>Lainnya</Text>
                </TouchableOpacity>
              </Col>
            </Row>
          </Grid>
        </View>


      </ScrollView>
    </SafeAreaView>
  )
}