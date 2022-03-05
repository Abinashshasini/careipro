import React from 'react';
import {StyleSheet, SafeAreaView, View, TouchableOpacity} from 'react-native';
import colors from '../utils/colors';

import Loader from './Loader';
import Text from './Text';
import Iconicons from 'react-native-vector-icons/Ionicons';

// import {useSelector} from 'react-redux';

function Screen({children, style}) {
  // const loading = useSelector(state => state.loading.loading);
  const loading = false;

  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>
        {loading && <Loader />}
        {children}
        <View style={StyleSheet.absoluteFill}>
          <TouchableOpacity style={styles.helpContainer} activeOpacity={0.9}>
            <Text style={styles.text}>
              <Iconicons name="call" />
              Need Help ?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  view: {
    flex: 1,
  },

  helpContainer: {
    position: 'absolute',
    bottom: 0,
    right: -25,
    transform: [{rotate: '90deg'}],
    backgroundColor: colors.secondary,
    marginBottom: 80,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
  },

  text: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '700',
  },
});

export default Screen;
