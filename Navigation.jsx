import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Screens/HomeDisplay';
import { NavigationContainer } from '@react-navigation/native';
import Support from './Screens/Support';
import Myoffer from './Screens/Myoffer';
import Notifi from './Screens/Notifi';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

import { createStackNavigator } from '@react-navigation/stack'
import ClubVision from './Screens/menu_screen/ClubVision'
import Payment from './Screens/menu_screen/Payment'
import Profile from './Screens/menu_screen/Profile'
import Menu_Layout from './Screens/menu_screen/Menu_Layout'
import ViewNotitfication from './Screens/ViewNotification'

const Navigation = () => {
    //stack
    const Stack = createStackNavigator();
    const StackGroup = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name='Menu_list' component={Menu_Layout} options={{ title: 'Menu' }} />
                <Stack.Screen name='Profile' component={Profile} />
                <Stack.Screen name='Club' component={ClubVision} />
                <Stack.Screen name='Payment' component={Payment} />
            </Stack.Navigator>
        )
    }

    //Tab
    const NotificationStackGroup = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name='notification' component={Notifi} options={{headerShown:false}}/>
                <Stack.Screen name='view' component={ViewNotitfication} options={{headerTitle:'Notification',headerTitleAlign:'center'}}/>
            </Stack.Navigator>
        )
    }

    const Tab = createBottomTabNavigator();
    const TabGroup = () => {
        return (
            <Tab.Navigator screenOptions={{ headerShown: false,tabBarActiveTintColor:'#880066' }}>
                <Tab.Screen name='Home' component={Home} options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="home" size={size} color={color} />
                    ),
                    title: 'Home'
                }} />
                <Tab.Screen name='Support' component={Support} options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="support-agent" size={size} color={color} />
                    ),
                    title: 'Support'
                }} />
                <Tab.Screen name='Myoffer' component={Myoffer} options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="local-offer" size={size} color={color} />
                    ),
                    title: 'My offer'
                }} />
                  <Tab.Screen name='Notification' component={NotificationStackGroup} options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="notifications" size={size} color={color} />
                    ),
                    title: 'Notification'
                }} />
                <Tab.Screen name='Menu' component={StackGroup} options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="menu" size={size} color={color} />
                    ),
                    title: 'Menu'
                }} />
            </Tab.Navigator>
        )
    }
    return (

        <NavigationContainer>
            <TabGroup />
        </NavigationContainer>
    )
}

export default Navigation