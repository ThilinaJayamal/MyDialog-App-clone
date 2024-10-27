import { View, Text, ScrollView, Pressable, StyleSheet, Image, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import TopTab from '../components/TopTab'
import UpDwonCard from '../components/UpDwonCard';

const Home = () => {
  const lists = ['money', 'data', 'voice'];
  const [item, setItem] = useState(lists[0]);
  const images = [require('../assets/1.jpg'), require('../assets/2.jpg'), require('../assets/3.jpg')];
  const { width } = useWindowDimensions();

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{ gap: 10, marginBottom: 20 }}
          showsHorizontalScrollIndicator={false}
        >
          {images.map((image, index) => (
            <Image
              key={index}
              source={image}
              style={{ width: width - 40, height: 150, borderRadius: 18 }}
            />
          ))}
        </ScrollView>

        <View style={{ padding: 15, backgroundColor: '#fff', marginBottom: 20, borderRadius: 20 }}>
          <Text style={{ textAlign: 'center' }}>Last updated at 10.00 AM</Text>
        </View>

        <TopTab />

        <UpDwonCard title={'Quick realod'} details={"Heloworld"} type={'data'}/>

        <UpDwonCard title={'Recomonded data packages'} details={"Heloworld"} type={'money'}/>
      </View>
    </ScrollView>
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
    padding: 10, gap: 20,
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
