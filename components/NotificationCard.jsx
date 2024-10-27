import { View, Text, Pressable } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const NotificationCard = ({ id,title, message, type }) => {
    const navigation = useNavigation();
    return (
        <Pressable onPress={()=>navigation.navigate('view',{id})}
        style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20,backgroundColor:'#fff',borderRadius:14,gap:8 }}>
            <Ionicons name="notifications-outline" size={32} color="#880066" />
            <View style={{ flex: 1, gap: 4 }}>
                <Text style={{ fontSize: 14, fontWeight: '500' }}>{type}</Text>
                <Text style={{ fontSize: 18, fontWeight: '700' }}>{title}</Text>
                <Text style={{ fontSize: 16,opacity:0.8 }}>{message}</Text>
            </View>
            <View style={{backgroundColor:'#880066',padding:6,borderRadius:40}}>
                <AntDesign name="arrowright" size={18} color="white" />
            </View>
        </Pressable>

    )
}

export default NotificationCard