import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { tailwind } from "../../../lib/tailwind";
import Ionicons from "react-native-vector-icons/Ionicons"

export default function PLNScreen({ navigation }) {
  return (
    <View>
      <TouchableOpacity style={tailwind("bg-white px-4 py-5 flex flex-row justify-between items-center")} onPress={()=>navigation.navigate("PLNToken")}>
        <View style={tailwind("flex flex-row items-center")}>
          <Text>Logo</Text>
          <Text style={tailwind("ml-4 text-gray-900 font-bold")}>Token PLN</Text>
        </View>
        <View>
          <Ionicons name="chevron-forward-outline" size={26} color="#374151" />
        </View>
      </TouchableOpacity>

      <View style={{ borderTopColor: "#D1D5DB", alignSelf: "stretch", borderTopWidth: 0.7 }}>

      </View>

      <TouchableOpacity style={tailwind("bg-white px-4 py-5 flex flex-row justify-between items-center")}>
        <View style={tailwind("flex flex-row items-center")}>
          <Text>Logo</Text>
          <Text style={tailwind("ml-4 text-gray-900 font-bold")}>Tagihan PLN</Text>
        </View>
        <View>
          <Ionicons name="chevron-forward-outline" size={26} color="#374151" />
        </View>
      </TouchableOpacity>

    </View>
  )
}