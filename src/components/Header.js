import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';

import colors from '../utils/colors';
import Text from '../components/Text';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SearchBar from '../components/SearchBar';

const Header = () => {
  //Function to navigate user to local serach page
  const handleNavigateToSearch = () => {};

  return (
    <View style={{backgroundColor: colors.white, height: 130}}>
      <View style={styles.container}>
        {/* Image container for profile image */}
        <TouchableOpacity>
          <Image
            source={{
              uri: 'https://unsplash.com/photos/-DOZVXI47I0/download?ixid=MnwxMjA3fDB8MXxhbGx8OXx8fHx8fDJ8fDE2NDU5NDM0ODU&force=true',
            }}
            resizeMethod="resize"
            style={styles.image}
            fadeDuration={300}
          />
        </TouchableOpacity>
        {/* Welcome message and name container*/}
        <View style={styles.nameContainer}>
          <Image
            source={require('../assets/logo.jpeg')}
            resizeMethod="resize"
            style={styles.logo}
            fadeDuration={300}
          />
          <Text style={styles.description}>Good health means better life</Text>
        </View>
        {/*User notification container container*/}
        <TouchableOpacity style={styles.location}>
          <Text style={styles.locationTitle}>
            Your location <FontAwesome name="chevron-down" size={12} />
          </Text>
          <Text style={styles.locationDesc} numberOfLines={1}>
            3F5R+MH5, Samaraipur, Bhadrak, Odisha 756100, India
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <SearchBar
          placeholder="Search in your area"
          navigate
          onPress={handleNavigateToSearch}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 70,
    flexDirection: 'row',
    paddingRight: 5,
    paddingLeft: 15,
    maxHeight: 60,
    alignItems: 'center',
  },

  image: {
    height: 45,
    width: 45,
    borderRadius: 10,
  },

  nameContainer: {
    flex: 1,
    paddingLeft: 15,
    height: '100%',
    justifyContent: 'center',
  },

  location: {
    justifyContent: 'center',
    color: colors.primary,
    width: 100,
  },

  locationTitle: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'capitalize',
  },

  locationDesc: {
    color: colors.textBlack,
    fontSize: 11,
    marginTop: 3,
  },

  logo: {
    height: 25,
    width: 140,
  },

  description: {
    color: colors.textBlack,
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'capitalize',
    marginTop: 5,
    marginLeft: 10,
  },

  searchContainer: {
    marginHorizontal: 15,
    marginTop: 5,
  },
});

export default Header;
