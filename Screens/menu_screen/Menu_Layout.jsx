import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Menu_Layout = () => {
  const navigation = useNavigation()
  return (
    <View style={{ padding: 20, flex: 1, gap: 10 }}>
      <View style={{justifyContent:'center',alignItems:'center',gap:10}}>
        <View style={{ width: 80, height: 80, backgroundColor: '#880066', justifyContent: 'center', alignItems: 'center', borderRadius: 50 }}>
          <FontAwesome5 name="user-astronaut" size={52} color="white" />
        </View>
        <Text onPress={() => navigation.navigate('Profile')}>Profile</Text>
      </View>

      <Text onPress={() => navigation.navigate('Club')}>Club Vision</Text>
      <Text onPress={() => navigation.navigate('Payment')}>Payments & Reloads</Text>
    </View>
  )
}

export default Menu_Layout