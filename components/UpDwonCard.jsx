import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import ReloadCard from './ReloadCard';

const UpDownCard = ({ title, details, type }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={styles.cardContainer}>
      <Pressable style={styles.header} onPress={() => setIsOpen(!isOpen)}>
        <Text style={styles.title}>{title}</Text>
        <Entypo name={isOpen ? 'chevron-thin-up' : 'chevron-thin-down'} size={20} color="black" />
      </Pressable>

      {isOpen && type === 'data' && (
        <ScrollView
          horizontal
          contentContainerStyle={styles.scrollContainer}
          showsHorizontalScrollIndicator={false}
        >
          <ReloadCard />
          <ReloadCard />
          <ReloadCard />
          <ReloadCard />
          <ReloadCard />
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 18,
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  scrollContainer: {
    gap: 15,
    paddingVertical: 10,
  },
});

export default UpDownCard;
