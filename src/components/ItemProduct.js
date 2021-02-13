import { Text, TouchableOpacity, View } from "react-native";
import { tailwind } from "../../lib/tailwind";
import Ionicons from "react-native-vector-icons/Ionicons"

export default function ItemProduct({ onPress, logo, text, icon }) {
  return (
    <TouchableOpacity style={tailwind("bg-white px-4 py-5 flex flex-row justify-between items-center")}>
      <View style={tailwind("flex flex-row items-center")}>
        <Text>Logo</Text>
        <Text style={tailwind("ml-4 text-gray-900 font-bold")}>LINKAJA</Text>
      </View>
      <View>
        <Ionicons name="chevron-forward-outline" size={26} color="#374151" />
      </View>
    </TouchableOpacity>
  )
}