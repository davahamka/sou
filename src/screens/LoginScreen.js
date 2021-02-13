import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { tailwind } from "../../lib/tailwind";
import { useForm, Controller } from "react-hook-form";

export default function Login({ navigation }) {
  const { control, errors, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <SafeAreaView>

      <View style={tailwind("p-4 mt-20")}>
        <Text style={tailwind("text-3xl font-bold")}>Selamat Datang!</Text>
        <Text>Masukkan nomer ponsel dan password anda.</Text>
      </View>

      <View style={tailwind("p-4")}>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={tailwind("border p-3 border-gray-300")}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
              keyboardType="number-pad"
              placeholder="MSIDN/Nomer Ponsel"
            />
          )}
          name="full_name"
          rules={{ required: true }}
          defaultValue=""
          
        />
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={tailwind("border p-3 border-gray-300")}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
              placeholder="Password"
              secureTextEntry
            />
          )}
          name="pass"
          rules={{ required: true }}
          defaultValue=""
        />
        <View style={{ marginTop: 40 }}>
          <TouchableOpacity color="#0A57FF" style={tailwind("py-3 rounded bg-metrocolor-primary")} onPress={() => navigation.navigate("Awal")}>
            <Text style={tailwind("text-white text-center font-bold text-lg")}>Login</Text>
          </TouchableOpacity>
        </View>
        <Text style={tailwind("my-3")}>Belum punya akun?</Text>
        <TouchableOpacity color="#0A57FF" style={tailwind("py-3 rounded bg-white border border-metrocolor-primary")} onPress={() => {navigation.navigate("Register")}}>
          <Text style={tailwind("text-metrocolor-primary text-center font-bold text-lg")}>Register</Text>
        </TouchableOpacity>
      </View>


    </SafeAreaView>
  )
}