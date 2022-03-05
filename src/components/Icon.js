import React from 'react';
import {View} from 'react-native';
import Text from '../components/Text';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Icon({
  name,
  size = 40,
  backgroundColor = '#000',
  iconColor = '#fff',
  serial,
  color,
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {name && (
        <MaterialCommunityIcons
          name={name}
          color={iconColor}
          size={size * 0.5}
        />
      )}
      {serial && (
        <Text
          style={{
            fontWeight: '700',
            fontSize: 23,
            color,
            textTransform: 'uppercase',
          }}>
          {serial}
        </Text>
      )}
    </View>
  );
}

export default Icon;
