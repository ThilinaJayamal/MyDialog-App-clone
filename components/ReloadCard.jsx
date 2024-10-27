import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const ReloadCard = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.amountContainer}>
        <Text style={styles.amountText}>Rs.100</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>BUY</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'column',
    borderRadius: 18,
    elevation:4
  },
  amountContainer: {
    flex: 1,
    backgroundColor: '#e8e8e8',
    padding: 10,
    borderTopLeftRadius:8,
    borderTopRightRadius:8,
  },
  amountText: {
    color: 'gray',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    borderBottomLeftRadius:8,
    borderBottomRightRadius:8,
  },
  buttonText: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ReloadCard;
