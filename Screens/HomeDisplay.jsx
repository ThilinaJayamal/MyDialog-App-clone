import React, { useRef, useState } from 'react';
import { Text, StyleSheet, Pressable, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { my_connections } from '../assets/data';
import Home from './Home';

// Main Home component
const HomeDisplay = () => {
  // Bottom sheet ref and state
  const bottomSheetModalRef = useRef(null);
  const [connection, setConnection] = useState('076 8464617');
  const snapPoints = ['50%', '75%'];

  // Stack navigator setup
  const Stack = createStackNavigator();

  // Function to handle the modal presentation
  const handlePresentModalPress = () => {
    bottomSheetModalRef.current?.present();
  };

  // Function to log sheet changes
  const handleSheetChanges = (index) => {
    console.log('handleSheetChanges', index);
  };

  return (
    <BottomSheetModalProvider>
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen
            name="MainTabs"
            component={Home}
            options={{
              headerShown: true,
              title: '',
              headerLeft: () => (
                <Pressable onPress={handlePresentModalPress}>
                  <Text style={styles.headerText}>{connection}</Text>
                </Pressable>
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>

      <BottomSheetModal
        ref={bottomSheetModalRef}
        onChange={handleSheetChanges}
        snapPoints={snapPoints}
      >
        <BottomSheetView style={styles.contentContainer}>
          {my_connections.map((number) => (
            <Pressable key={number} onPress={() => setConnection(number)} style={styles.row}>
              <Text>{number}</Text>
            </Pressable>
          ))}
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  headerText: {
    fontSize: 18,
    padding: 15,
    fontWeight:'bold'
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  row: {
    backgroundColor: '#dbdbdb',
    padding: 15,
    width: '100%',
    borderRadius: 8,
    marginBottom: 10, // Added margin for spacing between items
  },
});

export default HomeDisplay;
