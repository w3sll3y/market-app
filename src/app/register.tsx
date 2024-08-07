import { ButtonComponent } from '@/components/button';
import { Input } from '@/components/input';
import { useState } from 'react';
import { Alert, Image, Text, View } from 'react-native';

import { router, useNavigation } from 'expo-router';

export default function Register() {
  const navigate = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    navigate.goBack();
  }

  return (
    <View className='flex-1 bg-primary-300 justify-end relative'>
      <Image
        source={require('../assets/BG.png')}
        className='flex-1 bg-cover object-cover'
      />
      <View className='bg-white h-3/4 absolute w-full rounded-t-login items-center'>
        <Image
          source={require('../assets/icons/Logo.png')}
          style={{ maxHeight: 220, maxWidth: 220, marginTop: 5 }}
        />
        <View className='w-full px-10'>
          <Text className='px-2 pb-2 text-gray-700 italic'>Nome</Text>
          <Input>
            <Input.Field
              onChangeText={setName}
              value={name}
            />
          </Input>
        </View>
        <View className='w-full px-10'>
          <Text className='p-2 text-gray-700 italic'>E-mail</Text>
          <Input>
            <Input.Field
              onChangeText={setEmail}
              value={email}
            />
          </Input>
        </View>
        <View className='w-full px-10'>
          <Text className='p-2 text-gray-700 italic'>Senha</Text>
          <Input>
            <Input.Field
              onChangeText={setPassword}
              value={password}
              secureTextEntry={true}
            />
          </Input>
        </View>
        <View className='w-full px-10 mt-2'>
          <ButtonComponent
            title='Cadastrar'
            variant='primary'
          />
          <ButtonComponent
            onPress={handleLogin}
            title='Voltar para login'
            variant='secondary'
          />
        </View>
      </View>
    </View>
  )
}