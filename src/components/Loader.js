import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

import colors from '../utils/colors';

const Loader = props => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    zIndex: 1,
  },
});

export default Loader;
