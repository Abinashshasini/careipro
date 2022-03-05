import React, {useState} from 'react';
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';

import Header from '../../components/Header';
import Screen from '../../components/Screen';
import Features from './components/Features';
import Text from '../../components/Text';
import colors from '../../utils/colors';
import PopularClinic from './components/PopularClinic';
import PopularDoctors from './components/PopularDoctors';

const HomeScreen = props => {
  const [refreshing] = useState(false);
  return (
    <Screen style={styles.container}>
      {/*App feature section */}
      <FlatList
        //App header component app bar and search bar
        ListHeaderComponent={<Header />}
        data={features}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.featureContainer} activeOpacity={0.5}>
            <Image source={item.img} style={styles.featureLogo} />
            <Text style={styles.featureText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        refreshing={refreshing}
        onRefresh={() => console.log('refresh')}
        showsVerticalScrollIndicator={false}
        numColumns={4}
        horizontal={false}
        ListFooterComponent={
          <View>
            <Features />
            <PopularClinic />
            <PopularDoctors />
          </View>
        }
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  featureContainer: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },

  featureLogo: {
    width: 35,
    height: 35,
    marginTop: 7,
  },

  featureText: {
    fontSize: 10,
    textAlign: 'center',
    lineHeight: 13,
    marginTop: 7,
    letterSpacing: 0.3,
  },
});

export default HomeScreen;

const features = [
  {name: 'Cold & Fever', id: 1, img: require('../../assets/fever.png')},
  {
    name: 'Bone & Joint Pain',
    id: 2,
    img: require('../../assets/muscle-pain.png'),
  },
  {name: 'Gastric', id: 3, img: require('../../assets/diarrhea.png')},
  {name: 'Skin Problems', id: 4, img: require('../../assets/skin-care.png')},
  {name: 'Hair Problems', id: 5, img: require('../../assets/epidermis.png')},
  {
    name: 'Gynecologycal Problems',
    id: 6,
    img: require('../../assets/uterus.png'),
  },
  {name: 'Ent', id: 7, img: require('../../assets/head.png')},
  {name: 'Show more', id: 8, img: require('../../assets/arrow-right.png')},
];
