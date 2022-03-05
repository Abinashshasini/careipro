import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Colors from '../utils/colors';

const AppButton = ({title, onPress, color = Colors.primary}) => {
  return (
    <View style={styles.button}>
      <Button color={color} title={title} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    width: '100%',
  },
});

export default AppButton;
