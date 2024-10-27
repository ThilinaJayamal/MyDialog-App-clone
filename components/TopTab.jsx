import { View, Text, ScrollView, Pressable, StyleSheet, Image, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import DetailCard from '../components/DetailCard';
import Button from '../components/Button';

const Home = () => {
  const lists = ['money', 'data', 'voice', 'sms'];
  const [item, setItem] = useState(lists[0]);

  return (
    <View style={styles.container}>

      <View style={styles.tabContainer}>
        {lists.map((title, index) => (
          <Pressable
            key={index}
            style={styles.tabButton}
            onPress={() => setItem(title)}
          >
            <Text style={[styles.tabText, title === item ? styles.tabBarActive : styles.tabBarInActive]}>
              {title}
            </Text>
          </Pressable>
        ))}
      </View>

      {item === 'data' && (
        <View style={styles.cardContainer}>
          <View style={styles.dataContainer}>
            <DetailCard top="Anytime" mid="19.5 GB" bottom="remaining" />
            <DetailCard top="Anytime" mid="4.5 GB" bottom="remaining" />
          </View>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <Button text={'usage history'} bgColor={'#fff'} color={'red'} borderColor={'gray'} />
            <Button text={'data add-on'} bgColor={'red'} color={'#fff'} borderColor={'red'} />
          </View>
        </View>
      )}

      {item === 'money' && (
        <View style={styles.detailContainer}>
          <DetailCard top="Prepaid Balance" mid="Rs.100.00" bottom="Valid until 07 Oct 2025" />
          <DetailCard top="Loan Balance" mid="Rs.00.00" bottom="" />
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <Button text={'transaction'} bgColor={'#fff'} color={'red'} borderColor={'gray'} />
            <Button text={'reload'} bgColor={'red'} color={'#fff'} borderColor={'red'} />
          </View>
        </View>
      )}

      {item === 'voice' && (
        <View style={styles.detailContainer}>
          <DetailCard top="Prepaid Balance" mid="250min" bottom="Valid until 07 Oct 2025" />
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <Button text={'usage history'} bgColor={'#fff'} color={'red'} borderColor={'gray'} />
          </View>
        </View>
      )}

      {item === 'sms' && (
        <View style={styles.detailContainer}>
          <DetailCard top="Prepaid Balance" mid="84" bottom="Valid until 07 Oct 2025" />
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <Button text={'usage history'} bgColor={'#fff'} color={'red'} borderColor={'gray'} />
          </View>
        </View>
      )}
    </View>

  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    padding: 20,
  },
  container: {
    flexDirection: 'column',
  },
  tabBarActive: {
    fontWeight: 'bold',
    borderColor: '#880066',
    color: '#880066',
  },
  tabBarInActive: {
    fontWeight: 'normal',
    borderColor: '#f4f4f4',
    opacity: 0.7,
  },
  cardContainer: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 10,
    gap: 10,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 15,
  },
  tabText: {
    textTransform: 'uppercase',
    borderBottomWidth: 5,
    textAlign: 'center',
    paddingVertical: 10,
  },
  detailContainer: {
    backgroundColor: '#fff',
    padding: 10,
    flexDirection: 'column',
    gap: 10,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  dataContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    gap: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
});

export default Home;
