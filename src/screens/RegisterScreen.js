import React from 'react';
import {View, Text, SafeAreaView, Button, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {tailwind} from '../../lib/tailwind';
import {useForm, Controller} from 'react-hook-form';
import axios from 'axios';
import {API_KEY, USERS_REGISTER} from '../utils/api';

export default function Login({navigation}) {
  const {control, handleSubmit, errors} = useForm();

  async function registerAPI(data) {
    const {phone, full_name, email, pass} = data;
    try {
      const response = await axios.post(API_KEY + USERS_REGISTER, {
        phone,
        full_name,
        email,
        pass,
      });
      return response;
    } catch (err) {
      return err;
    }
  }

  const onSubmit = async (data) => {
    // const respone = await registerAPI(data)
    // console.log(respone);
    navigation.navigate('Awal');
  };
  return (
    <SafeAreaView>
      <View style={tailwind('p-4 mt-8')}>
        <Text style={tailwind('text-3xl font-bold')}>Selamat Datang!</Text>
        <Text style={tailwind('text-lg')}>
          Lengkapi data berikut dan akun Metro akan terbuat.
        </Text>
      </View>

      <View style={tailwind('p-4')}>
        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
              style={tailwind('border p-3 border-gray-300')}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder="Nama Lengkap"
            />
          )}
          name="full_name"
          rules={{required: true}}
          defaultValue=""
        />
        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
              style={tailwind('border p-3 border-gray-300')}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder="Email"
            />
          )}
          name="email"
          rules={{required: true}}
          defaultValue=""
        />
        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
              style={tailwind('border p-3 border-gray-300')}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder="Password"
              secureTextEntry
            />
          )}
          name="pass"
          rules={{required: true}}
          defaultValue=""
        />
        <Text style={tailwind('mt-8')}>NOMOR HANDPHONE/MISDN</Text>
        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
              style={tailwind('border p-3 border-gray-300')}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder="Contoh: 081392023232XX"
              keyboardType="numeric"
            />
          )}
          name="phone"
          rules={{required: true}}
          defaultValue=""
        />
        <View style={{marginTop: 40}}>
          <TouchableOpacity
            color="#0A57FF"
            style={tailwind('py-3 rounded bg-metrocolor-primary')}
            onPress={handleSubmit(onSubmit)}>
            <Text style={tailwind('text-white text-center font-bold text-lg')}>
              Register
            </Text>
          </TouchableOpacity>
          <Text style={tailwind('text-center mt-6 leading-5 px-5')}>
            Dengan membuat akun saya telah setuju dengan{' '}
            <Text style={tailwind('font-bold text-blue-500')}>
              Syarat & Ketentuan
            </Text>{' '}
            serta Kebijakan Privasi yang ditetapkan oleh Metro.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
