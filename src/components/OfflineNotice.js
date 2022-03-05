import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';

import colors from '../utils/colors';
import Text from './Text';

const OfflineNotice = props => {
  const netInfo = useNetInfo();

  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No internet connection</Text>
      </View>
    );

  return null;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 1,
    height: 45,
    backgroundColor: colors.danger,
    width: '100%',
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.white,
    letterSpacing: 0.5,
  },
});

export default OfflineNotice;
