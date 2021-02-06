import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import CardActivity from "../components/CardActivity";


export default function ActivityScreen() {
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View style={{marginBottom:10}}> 
          <CardActivity />
          <CardActivity />
          <CardActivity />
          <CardActivity />
          <CardActivity />
          <CardActivity />
          <CardActivity />
          <CardActivity />
          <CardActivity />
          <CardActivity />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}