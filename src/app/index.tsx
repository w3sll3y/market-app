import { ButtonComponent } from '@/components/button';
import { Input } from '@/components/input';
import { useState } from 'react';
import { Alert, Image, Text, View } from 'react-native';

import { router } from 'expo-router';
import { ToastMessage } from '@/utils/toastMessages';
import { UserServer } from '@/server/user-server';
import { userStorage } from '@/storage/user';

export default function Index() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(email: string, password: string) {
    if (email.trim().length === 0) {
      return ToastMessage.errorToast(
        "Preencha todos os campos!⚠️",
        "Preencha seu e-mail",
      );
    }
    if (password.trim().length === 0) {
      return ToastMessage.errorToast(
        "Preencha todos os campos!⚠️",
        "Preencha sua senha",
      );
    }

    const data = await UserServer.handleLogin({ email, password });
    if (data.access_token) {
      await userStorage.save(String(data.access_token))
      return handleHome();
    }
    return
  }

  async function handleSignUp() {
    router.navigate('/register')
  }

  async function handleHome() {
    router.navigate('/(tabs)/home')
  }

  return (
    <View className='flex-1 bg-primary-300 justify-end relative'>
      <Image
        source={require('../assets/BG.png')}
        className='flex-1 bg-cover object-cover justify-center'
      />
      <View className='bg-white h-3/4 absolute w-full rounded-t-login items-center'>
        <Image
          source={require('../assets/icons/Logo.png')}
          style={{ maxHeight: 220, maxWidth: 220, marginTop: 10 }}
        />
        <View className='w-full px-10'>
          <Text className='px-2 pb-2 text-gray-700 italic'>E-mail</Text>
          <Input>
            <Input.Field
              onChangeText={setEmail}
              autoCapitalize='none'
              value={email}
            />
          </Input>
        </View>
        <View className='w-full px-10 mt-2'>
          <Text className='p-2 text-gray-700 italic'>Senha</Text>
          <Input>
            <Input.Field
              onChangeText={setPassword}
              value={password}
              autoCapitalize='none'
              secureTextEntry={true}
            />
          </Input>
        </View>
        <View className='w-full px-10 mt-5'>
          <ButtonComponent
            onPress={() => handleLogin(email, password)}
            title='Login'
            variant='primary'
          />
          <ButtonComponent
            onPress={handleSignUp}
            title='Cadastrar-se'
            variant='secondary'
          />
          <ButtonComponent
            title='Recuperar senha'
            variant='tertiary'
          />
        </View>
      </View>
    </View>
  )
}