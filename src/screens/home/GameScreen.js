import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {tailwind} from '../../../lib/tailwind';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function GameScreen({navigation}) {
  return (
    <View>
      <TouchableOpacity
        style={tailwind(
          'bg-white px-4 py-5 flex flex-row justify-between items-center',
        )}
        onPress={() => {
          navigation.navigate('GameDetailed', {type: 'Arena of Valor'});
        }}>
        <View style={tailwind('flex flex-row items-center')}>
          <Text>Logo</Text>
          <Text style={tailwind('ml-4 text-gray-900 font-bold')}>
            Arena of Valor
          </Text>
        </View>
        <View>
          <Ionicons name="chevron-forward-outline" size={26} color="#374151" />
        </View>
      </TouchableOpacity>

      <View
        style={{
          borderTopColor: '#D1D5DB',
          alignSelf: 'stretch',
          borderTopWidth: 0.7,
        }}></View>

      <TouchableOpacity
        style={tailwind(
          'bg-white px-4 py-5 flex flex-row justify-between items-center',
        )}
        onPress={() => {
          navigation.navigate('GameDetailed', {type: 'Rules Of Survival'});
        }}>
        <View style={tailwind('flex flex-row items-center')}>
          <Text>Logo</Text>
          <Text style={tailwind('ml-4 text-gray-900 font-bold')}>
            Rules of Survival
          </Text>
        </View>
        <View>
          <Ionicons name="chevron-forward-outline" size={26} color="#374151" />
        </View>
      </TouchableOpacity>

      <View
        style={{
          borderTopColor: '#D1D5DB',
          alignSelf: 'stretch',
          borderTopWidth: 0.7,
        }}></View>
      <TouchableOpacity
        style={tailwind(
          'bg-white px-4 py-5 flex flex-row justify-between items-center',
        )}
        onPress={() => {
          navigation.navigate('GameDetailed', {type: 'COD Mobile'});
        }}>
        <View style={tailwind('flex flex-row items-center')}>
          <Text>Logo</Text>
          <Text style={tailwind('ml-4 text-gray-900 font-bold')}>
            COD Mobile
          </Text>
        </View>
        <View>
          <Ionicons name="chevron-forward-outline" size={26} color="#374151" />
        </View>
      </TouchableOpacity>
      <View
        style={{
          borderTopColor: '#D1D5DB',
          alignSelf: 'stretch',
          borderTopWidth: 0.7,
        }}></View>
      <TouchableOpacity
        style={tailwind(
          'bg-white px-4 py-5 flex flex-row justify-between items-center',
        )}
        onPress={() => {
          navigation.navigate('GameDetailed', {type: 'Free Fire'});
        }}>
        <View style={tailwind('flex flex-row items-center')}>
          <Text>Logo</Text>
          <Text style={tailwind('ml-4 text-gray-900 font-bold')}>
            Free Fire
          </Text>
        </View>
        <View>
          <Ionicons name="chevron-forward-outline" size={26} color="#374151" />
        </View>
      </TouchableOpacity>
      <View
        style={{
          borderTopColor: '#D1D5DB',
          alignSelf: 'stretch',
          borderTopWidth: 0.7,
        }}></View>
      <TouchableOpacity
        style={tailwind(
          'bg-white px-4 py-5 flex flex-row justify-between items-center',
        )}
        onPress={() => {
          navigation.navigate('GameDetailed', {type: 'Ragnarok Mobile'});
        }}>
        <View style={tailwind('flex flex-row items-center')}>
          <Text>Logo</Text>
          <Text style={tailwind('ml-4 text-gray-900 font-bold')}>
            Ragnarok Mobile
          </Text>
        </View>
        <View>
          <Ionicons name="chevron-forward-outline" size={26} color="#374151" />
        </View>
      </TouchableOpacity>
      <View
        style={{
          borderTopColor: '#D1D5DB',
          alignSelf: 'stretch',
          borderTopWidth: 0.7,
        }}></View>
      <TouchableOpacity
        style={tailwind(
          'bg-white px-4 py-5 flex flex-row justify-between items-center',
        )}
        onPress={() => {
          navigation.navigate('GameDetailed', {type: 'Steam'});
        }}>
        <View style={tailwind('flex flex-row items-center')}>
          <Text>Logo</Text>
          <Text style={tailwind('ml-4 text-gray-900 font-bold')}>Steam</Text>
        </View>
        <View>
          <Ionicons name="chevron-forward-outline" size={26} color="#374151" />
        </View>
      </TouchableOpacity>
    </View>
  );
}
