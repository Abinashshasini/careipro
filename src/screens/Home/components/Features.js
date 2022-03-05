import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import Text from '../../../components/Text';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../utils/colors';

const features = [
  {
    id: 1,
    name: 'Doctors',
    img: 'https://unsplash.com/photos/UIp163xCV6w/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTB8fGRvY3RvcnN8ZW58MHx8fHwxNjQ1OTQ4NzAw&force=true',
  },
  {
    id: 2,
    name: 'Clinics',
    img: 'https://unsplash.com/photos/e7MJLM5VGjY/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8Y2xpbmljfGVufDB8fHx8MTY0NTk1MTI1Mg&force=true',
  },
  {
    id: 3,
    name: 'Medicine',
    img: 'https://unsplash.com/photos/FEPfs43yiPE/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjQ1OTUxMjg5&force=true',
  },
  {
    id: 4,
    name: 'Ayurveda',
    img: 'https://unsplash.com/photos/RoGdv1kk5XM/download?force=true',
  },
];

const Features = props => {
  return (
    <View style={styles.container}>
      {features.map(m => (
        <TouchableOpacity activeOpacity={0.7} key={m.id}>
          <ImageBackground
            source={{uri: m.img}}
            style={styles.featureImage}
            imageStyle={{borderRadius: 8}}>
            <Text style={styles.featureText}>{m.name}</Text>
          </ImageBackground>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 15,
    alignItems: 'center',
  },

  featureImage: {
    backgroundColor: colors.primary,
    width: 70,
    height: 100,
    borderRadius: 8,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  featureText: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.white,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
});

export default Features;
