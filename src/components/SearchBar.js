import React from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import SearchIcon from 'react-native-vector-icons/FontAwesome';
import colors from '../utils/colors';
import Text from './Text';

const SearchBar = ({
  placeholder,
  onChangeText,
  keyboardType,
  navigate,
  onPress,
}) => {
  return (
    <>
      {navigate ? (
        <TouchableOpacity
          style={styles.container}
          onPress={onPress}
          activeOpacity={0.8}>
          <SearchIcon
            name="search"
            size={15}
            color={colors.textBlack}
            style={{marginHorizontal: 10}}
          />
          <Text style={[styles.text, {color: colors.greyPrimary}]}>
            {placeholder}
          </Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.container}>
          <SearchIcon
            name="search"
            size={15}
            color={colors.textBlack}
            style={{marginHorizontal: 10}}
          />
          <TextInput
            style={styles.text}
            placeholder={placeholder}
            onChangeText={text => onChangeText(text)}
            keyboardType={keyboardType}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    height: 40,
    borderRadius: 8,
    flexDirection: 'row',
    elevation: 3,
  },

  text: {
    fontSize: 14,
    textTransform: 'capitalize',
    fontWeight: '500',
    flex: 1,
    letterSpacing: 0.5,
  },
});

export default SearchBar;
