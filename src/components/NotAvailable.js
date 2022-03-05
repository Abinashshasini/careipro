import React from 'react';
import {View, StyleSheet} from 'react-native';

import Text from './Text';
import Colors from '../utils/colors';

const NotAvailable = ({message}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    textTransform: 'capitalize',
    fontWeight: '700',
    letterSpacing: 1,
    color: Colors.danger,
  },
});

export default NotAvailable;
