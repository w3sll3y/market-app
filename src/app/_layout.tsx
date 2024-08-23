import '@/styles/global.css';

import { View, StatusBar } from 'react-native';
import { Slot } from 'expo-router';

import {
  useFonts,
  Inter_500Medium,
  Inter_400Regular,
  Inter_600SemiBold,
} from '@expo-google-fonts/inter';

import Loading from '@/components/loading';
import Toast from 'react-native-toast-message';

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_400Regular,
    Inter_600SemiBold,
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <>
      <View className='flex-1 bg-white-100'>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Slot />
      </View>
      <Toast />
    </>
  )
}