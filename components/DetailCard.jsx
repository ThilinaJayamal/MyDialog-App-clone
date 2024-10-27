import { View, Text } from 'react-native'
import React from 'react'

const DetailCard = ({top,mid,bottom}) => {
  return (
    <View style={{flex:1,backgroundColor:'#880066',padding:14,borderRadius:8,height:'auto',width:'auto'}}>
      <Text style={{color:'#fff',fontSize:12}}>{top}</Text>
      <Text style={{color:'#fff',fontSize:20,fontWeight:'bold'}}>{mid}</Text>
      <Text style={{color:'#fff',fontSize:12}}>{bottom}</Text>
    </View>
  )
}

export default DetailCard