import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { tailwind } from "../../../lib/tailwind";

export default function EditProfileScreen() {
  return (
    <View style={tailwind('h-full')}>
      <View style={tailwind('p-4')}>
        <Text>Image</Text>
        <Text style={tailwind("text-center text-xl font-bold")}>Dava Mohammad Hamka</Text>
      </View>
      <View style={tailwind('px-4 mt-16')}>
        <Text>Nama</Text>
        <TextInput style={{ borderBottomWidth: 1, borderBottomColor: '#D1D5DB', paddingBottom: 4 }} value="Dava Mohammad Hamka" />
      </View>
      <View style={tailwind('px-4 mt-4')}>
        <Text>MISDN / Nomer Ponsel</Text>
        <TextInput style={{ borderBottomWidth: 1, borderBottomColor: '#D1D5DB', paddingBottom: 4 }} value="66281578608074" editable={false} selectTextOnFocus={false} />
      </View>
      <View style={tailwind('px-4 absolute w-full bottom-0 pb-20')}>
        <TouchableOpacity color="#0A57FF" style={tailwind("py-3 rounded bg-metrocolor-primary")} onPress={() => navigation.navigate("Awal")}>
          <Text style={tailwind("text-white text-center font-bold text-lg")}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}