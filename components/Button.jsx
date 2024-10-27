import { Text, Pressable } from 'react-native'
import React from 'react'

const Button = ({text,color,bgColor,borderColor}) => {
  return (
    <Pressable style={{flex:1,padding:10,backgroundColor:bgColor,borderRadius:40,borderWidth:2,borderColor:borderColor}}>
        <Text style={{textTransform:'uppercase',textAlign:'center',fontWeight:'700',color:color}}>{text}</Text>
    </Pressable>
  )
}

export default Button