import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

import EntypoIcon from 'react-native-vector-icons/Entypo';
import colors from '../../../utils/colors';

const PopularClinic = props => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', marginVertical: 7}}>
        <Text style={styles.brandText}>Popular Clinic</Text>
        <EntypoIcon
          name="chevron-small-right"
          size={30}
          color={colors.textBlack}
        />
      </View>

      <FlatList
        horizontal
        data={populatClinics}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.wrapper} activeOpacity={0.8}>
            <Image source={{uri: item.img}} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.address}>
              <EntypoIcon name="location-pin" color={colors.primary} />
              {item.address}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 12,
  },

  brandText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.textBlack,
    flex: 1,
    letterSpacing: 0.5,
    marginBottom: 10,
  },

  wrapper: {
    width: 132,
    marginRight: 10,
    backgroundColor: colors.white,
    borderRadius: 6,
    borderColor: '#e4eaef',
    borderWidth: 1,
    borderStyle: 'solid',
    marginBottom: 5,
  },

  title: {
    color: colors.textBlack,
    textTransform: 'capitalize',
    fontSize: 12,
    letterSpacing: 0.5,
    fontWeight: '700',
    margin: 4,
    marginBottom: 0,
  },

  address: {
    color: colors.greyPrimary,
    textTransform: 'capitalize',
    fontSize: 10,
    letterSpacing: 0.2,
    fontWeight: '500',
    margin: 4,
  },

  image: {
    width: 130,
    height: 100,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
  },
});

export default PopularClinic;

const populatClinics = [
  {
    id: 1,
    title: 'jhasaketan & jayashree clinic',
    address: 'kuansh, Bhadrak',
    img: 'https://unsplash.com/photos/uN8TV9Pw2ik/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTZ8fGNsaW5pY3xlbnwwfHx8fDE2NDU5NTEyNTI&force=true',
  },
  {
    id: 2,
    title: 'Deenadayal Clinic',
    address: 'Gandhi padia, Bhadrak, Bhadrak',
    img: 'https://unsplash.com/photos/9Wa1HgE1XlA/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTd8fGNsaW5pY3xlbnwwfHx8fDE2NDU5NTEyNTI&force=true',
  },
  {
    id: 3,
    title: 'OMM MEDICAL HALL',
    address: 'Aradi chhaka, Bhadrak',
    img: 'https://unsplash.com/photos/z-Jaxjj0KVY/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjB8fGNsaW5pY3xlbnwwfHx8fDE2NDU5NTEyNTI&force=true',
  },
  {
    id: 4,
    title: 'NabaJeeban  ',
    address: 'Ayurvedic Clinic',
    img: 'https://unsplash.com/photos/eflLpWC1Geo/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjQ1OTY1MTE4&force=true',
  },
];
