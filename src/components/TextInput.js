import React from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import defaultStyles from '../utils/style';

const AppTextInput = ({
  iconFirst,
  width = '100%',
  iconSecond,
  handleSecondIconChange,
  secondIconColor,
  ...otherProps
}) => {
  return (
    /* Inpute box with icons and text inpute */
    <View style={[styles.container, {width}]}>
      {iconFirst && (
        <MaterialCommunityIcons
          name={iconFirst}
          size={20}
          color={defaultStyles.Colors.primary}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.Colors.greyPrimary}
        style={[defaultStyles.text, styles.inpute]}
        {...otherProps}
      />
      {iconSecond && (
        <TouchableOpacity onPress={handleSecondIconChange}>
          <MaterialCommunityIcons
            name={iconSecond}
            size={20}
            color={secondIconColor}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: defaultStyles.Colors.border,
    paddingBottom: 5,
    marginVertical: 5,
  },

  icon: {
    marginHorizontal: 5,
  },

  inpute: {
    flex: 1,
  },
});

export default AppTextInput;
