import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { notifications } from '../assets/data'
import NotificationCard from '../components/NotificationCard'
import { SafeAreaView } from 'react-native-safe-area-context'


const Notification = () => {
  return (
    <SafeAreaView>
      <FlatList data={notifications} renderItem={({ item }) => {
        return (
          <NotificationCard key={item.id} id={item.id} title={item.title} message={item.message} type={item.type} />
        )
      }}
      contentContainerStyle={{gap:10,padding:10}}
      showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}

export default Notification