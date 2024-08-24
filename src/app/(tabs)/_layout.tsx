import { FontAwesome6 } from '@expo/vector-icons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Tabs } from 'expo-router';
import { StatusBar, View } from 'react-native';

export default function TabLayout() {

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Tabs
        screenOptions={{ tabBarActiveTintColor: '#6c5ce7', headerShown: false, tabBarShowLabel: false }}
      >
        <Tabs.Screen
          name="home"
          options={{
            tabBarIcon: ({ color }) => <FontAwesome6 size={24} name="house" color={color} />,
          }}
        />
        <Tabs.Screen
          name="new_list"
          options={{
            tabBarIcon: ({ color }) => <FontAwesome6 size={24} name="list-check" color={color} />,
          }}
        />
        <Tabs.Screen
          name="history"
          options={{
            tabBarIcon: ({ color }) => <FontAwesome5 size={24} name="history" color={color} />,
          }}
        />
        <Tabs.Screen
          name="upload"
          options={{
            tabBarIcon: ({ color }) => <FontAwesome6 size={24} name="upload" color={color} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color }) => <FontAwesome5 size={24} name="user-alt" color={color} />,
          }}
        />
      </Tabs>
    </View>
  );
}
