import { View, Text} from 'react-native'
import React from 'react'
import { notifications } from '../assets/data';

const ViewNotification = ({route}) => {
  const {id} = route.params;
  const notification = notifications.find((item)=>(item.id == Number(id)));
  return (
    <View style={{padding:20,flex:1,justifyContent:'center',alignItems:'center',gap:10}}>
      <Text style={{fontSize:24,textAlign:'center',fontWeight:'bold'}}>{notification.title}</Text>
      <Text style={{fontSize:20}}>{notification.message}</Text>
      <Text style={{fontSize:14,opacity:0.6}}>{notification.timestamp}</Text>
    </View>
  )
}

export default ViewNotification