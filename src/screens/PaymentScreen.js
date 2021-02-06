import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import {tailwind} from "../../lib/tailwind";
import { Grid, Col } from "react-native-easy-grid";

export default function ActivityScreen() {
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View style={tailwind("p-4 mt-6")}>
          <View style={tailwind("flex flex-row justify-center")}>
            <Text style={tailwind("text-xl font-light text-blue-500")}>Metro Cash</Text>

          </View>
          <View style={tailwind("flex flex-row justify-center")}>
            <Text style={tailwind("mt-4 text-sm font-light")}>Rp.</Text>
            <Text style={tailwind("mt-4 text-3xl font-bold text-gray-800")}>12.000</Text>
          </View>
        </View>

        <View style={tailwind("p-4")}>
          <View style={{backgroundColor:'#fff'}}>
            <Grid>
              <Col></Col>
              <Col style={{flex:1,alignItems:'center', justifyContent:'center'}}>
                <Text>Top Up</Text>
              </Col>
              <Col></Col>
            </Grid>
          </View>
        </View>


      </ScrollView>
    </SafeAreaView>
  )
}