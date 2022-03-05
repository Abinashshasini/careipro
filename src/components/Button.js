import React from 'react';
import {StyleSheet, View, Pressable} from 'react-native';
import colors from '../utils/colors';

import Text from './Text';

const AppButton = ({
  title,
  onPress,
  color = colors.buttonPrimary,
  disabled = false,
  textSize = 15,
  height = 35,
  width,
  textColor = color.textBlack,
}) => {
  return (
    <View style={[styles.buttonView, width]}>
      <Pressable
        style={[
          styles.button,
          {
            backgroundColor: disabled ? colors.greyPrimary : color,
            height,
            width,
          },
        ]}
        onPress={onPress}
        android_ripple={{color: '#e4eaef', borderless: true}}
        disabled={disabled}>
        <Text
          style={[styles.buttonText, {fontSize: textSize, color: textColor}]}>
          {title}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 6,
    borderColor: colors.info,
    borderWidth: 1,
    borderStyle: 'solid',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    textTransform: 'uppercase',
    fontWeight: '500',
    letterSpacing: 0.4,
  },
});

export default AppButton;
