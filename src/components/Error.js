import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import colors from '../utils/colors';

const Error = ({onPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Oops! 😔</Text>
      <Text style={styles.text}>An unexpected error has ocured</Text>
      <View style={{marginVertical: 20}}>
        <Button title="reload" onPress={onPress} color={colors.primary} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: colors.light,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.black,
  },
});

export default Error;
