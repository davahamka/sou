import React from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import {tailwind} from "../../lib/tailwind";
import { Grid, Col } from "react-native-easy-grid";

export default function ActivityScreen({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View style={tailwind("p-4 mt-4")}>
          <View>
            <Grid>
              <Col size={1}>
                <Text>Adwq</Text>
              </Col>
              <Col size={2}>
                <Text style={tailwind("text-2xl text-gray-900 font-bold")}>Dava Hamka</Text>
                <Text>+6281578608074</Text>
              </Col>
            </Grid>
          </View>
        </View>

        <View style={tailwind("p-4")}>
          <TouchableOpacity style={{borderBottomColor:"#E5E7EB", paddingVertical:12, borderBottomWidth:1}} onPress={()=>{navigation.navigate("Edit Profile")}}>
            <Text style={tailwind("text-gray-800 font-light text-lg")}>Edit Profile</Text>
          </TouchableOpacity>
          <View style={{borderBottomColor:"#E5E7EB", paddingVertical:12, borderBottomWidth:1}}>
            <Text style={tailwind("text-gray-800 font-light text-lg")}>Kode Referral</Text>
          </View>
          <View style={{borderBottomColor:"#E5E7EB", paddingVertical:12, borderBottomWidth:1}}>
            <Text style={tailwind("text-gray-800 font-light text-lg")}>Ubah PIN Transaksi</Text>
          </View>
          <View style={{borderBottomColor:"#E5E7EB", paddingVertical:12, borderBottomWidth:1}}>
            <Text style={tailwind("text-gray-800 font-light text-lg")}>Nomer Terdaftar</Text>
          </View>
          <View style={{borderBottomColor:"#E5E7EB", paddingVertical:12, borderBottomWidth:1}}>
            <Text style={tailwind("text-gray-800 font-light text-lg")}>Help Centre</Text>
          </View>
          <TouchableOpacity style={{borderBottomColor:"#E5E7EB", paddingVertical:12, borderBottomWidth:1}} onPress={()=>{navigation.navigate("Login")}}>
            <Text style={tailwind("text-gray-800 font-light text-lg")}>Logout</Text>
          </TouchableOpacity>
        </View>


      </ScrollView>
    </SafeAreaView>
  )
}