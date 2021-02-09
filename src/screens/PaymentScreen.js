import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { tailwind } from "../../lib/tailwind";
import { Grid, Col, Row } from "react-native-easy-grid";

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
          <View style={{ backgroundColor: '#fff' }}>
            <Grid>
              <Col></Col>
              <Col style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Top Up</Text>
              </Col>
              <Col></Col>
            </Grid>
          </View>
        </View>

        <View style={tailwind("p-4")}>
          <View style={{ backgroundColor: '#fff' }}>
            <Text style={tailwind("text-base text-gray-500 font-bold")}>Recent Activity</Text>
            <View style={tailwind("mt-3")}>
              <View style={{ backgroundColor: '#fff', borderTopLeftRadius: 6, borderTopRighttRadius: 6, padding: 14, shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.18, shadowRadius: 1, elevation: 1 }}>
                <Grid>
                  <Col size={3}>
                    <Text>Transaksi</Text>
                    <Text style={tailwind("font-light text-gray-400")}>PEMBELIAN INDOSAT 5K</Text>
                  </Col>
                  <Col size={1}>
                    <Text style={tailwind("font-bold")}>-1.024.600</Text>
                  </Col>
                </Grid>
              </View>
            </View>
            <View style={{ borderTopWidth: 1, borderTopColor: "rgba(229, 231, 235, 0.5)" }}>
              <View style={{ backgroundColor: '#fff', padding: 16, shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.18, shadowRadius: 1, elevation: 1 }}>
                <Grid>
                  <Col size={3}>
                    <Text>Transaksi</Text>
                    <Text style={tailwind("font-light text-gray-400")}>PEMBELIAN INDOSAT 5K</Text>
                  </Col>
                  <Col size={1}>
                    <Text style={tailwind("font-bold")}>-1.024.600</Text>
                  </Col>
                </Grid>
              </View>
            </View>
            <View style={{ borderTopWidth: 1, borderTopColor: "rgba(229, 231, 235, 0.5)" }}>
              <View style={{ backgroundColor: '#fff', padding: 16, shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.18, shadowRadius: 1, elevation: 1 }}>
                <Grid>
                  <Col size={3}>
                    <Text>Transaksi</Text>
                    <Text style={tailwind("font-light text-gray-400")}>PEMBELIAN INDOSAT 5K</Text>
                  </Col>
                  <Col size={1}>
                    <Text style={tailwind("font-bold")}>-1.024.600</Text>
                  </Col>
                </Grid>
              </View>
            </View>
            <View style={{ borderTopWidth: 1, borderTopColor: "rgba(229, 231, 235, 0.5)" }}>
              <View style={{ flex: 1, flexDirection: 'row', borderBottomLeftRadius: 6, borderBottomRightRadius: 6, justifyContent: 'center', backgroundColor: '#fff', padding: 16, shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.18, shadowRadius: 1, elevation: 1 }}>
                <Text>SEE MORE</Text>
              </View>
            </View>
          </View>
        </View>




      </ScrollView>
    </SafeAreaView>
  )
}