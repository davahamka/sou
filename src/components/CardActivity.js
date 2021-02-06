import React from "react";
import { View, Text } from "react-native";
import { Grid, Col } from "react-native-easy-grid"
import {tailwind} from "../../lib/tailwind";

export default function CardActivity() {
  return (
    <View style={tailwind("mt-4")}>
      <View style={tailwind("px-4")}>
        <View style={{ backgroundColor: '#fff', borderRadius: 10, padding: 14, shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.18, shadowRadius: 1, elevation: 1 }}>
          {/* <View style={tailwind("bg-white rounded p-4")}> */}
          <Grid>
            <Col size={1}>
              <Text style={tailwind("")}>INDOSAT Voucher 5K</Text>
              <Text style={tailwind("text-sm text-gray-400")}>+6281578608074</Text>
              <Text style={tailwind("mt-2 text-gray-400")}>Pulsa / I5</Text>
              <Text style={tailwind("text-sm text-gray-400")}>Senin, 02 Augustus 2021</Text>
            </Col>
            <Col size={1}>
              <View style={tailwind("flex flex-row justify-end")}>
                <Text style={tailwind("bg-red-100 text-red-500 px-4 py-1 rounded-xl font-bold")}>- Rp. 10.000</Text>
              </View>
            </Col>
          </Grid>
        </View>
      </View>
    </View>
  )
}