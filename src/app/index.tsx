import React from 'react';

import { ButtonComponent } from '@/components/button';
import { Input } from '@/components/input';
import { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';

import { UserServer } from '@/server/user-server';
import { userStorage } from '@/storage/user';
import { ToastMessage } from '@/utils/toastMessages';
import { router } from 'expo-router';

export default function Index() {

  const [hasUser, setHasUser] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(email: string, password: string) {
    setIsLoading(true);

    if (email.trim().length === 0) {
      setIsLoading(false);
      return ToastMessage.errorToast(
        "Preencha todos os campos!⚠️",
        "Preencha seu e-mail",
      );
    }
    if (password.trim().length === 0) {
      setIsLoading(false);
      return ToastMessage.errorToast(
        "Preencha todos os campos!⚠️",
        "Preencha sua senha",
      );
    }

    const data = await UserServer.handleLogin({ email, password });
    console.log('data', data)
    if (data === undefined) {
      setIsLoading(false)
    }
    if (data.access_token) {
      await userStorage.save(String(data.access_token));
      setIsLoading(false);
      return handleHome();
    }
    setIsLoading(false);
    return;
  }

  async function handleSignUp() {
    router.navigate('/register');
  }

  async function handleHome() {
    router.navigate('/(tabs)/home');
  }

  async function verifyHasUser() {
    const data = await userStorage.get();
    if (data) {
      setHasUser(true);
    }
  }

  useEffect(() => {
    verifyHasUser();
  }, []);

  useEffect(() => {
    if (hasUser) {
      handleHome();
    }
  }, [hasUser]);

  return (
    <>
      {
        !hasUser ? (
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
                  isLoading={isLoading}
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
        ) : null
      }
    </>
  )
}
