import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import EntypoIcon from 'react-native-vector-icons/Entypo';
import colors from '../../../utils/colors';

const PopularClinic = props => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.title}>Popular Doctors</Text>
        <EntypoIcon
          name="chevron-small-right"
          size={30}
          color={colors.textBlack}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    marginHorizontal: 15,
  },

  title: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.textBlack,
    flex: 1,
    letterSpacing: 0.5,
  },
});

export default PopularClinic;
