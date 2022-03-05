import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import EntypoIcon from 'react-native-vector-icons/Entypo';
import colors from '../../../utils/colors';
import Buton from '../../../components/Button';

const PopularClinic = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', marginVertical: 7}}>
        <Text style={styles.title}>Popular Doctors</Text>
        <EntypoIcon
          name="chevron-small-right"
          size={30}
          color={colors.textBlack}
        />
      </View>

      <FlatList
        data={docDetails}
        keyExtractor={item => item.id}
        scrollEnabled={false}
        contentContainerStyle={{flexGrow: 1}}
        ListFooterComponentStyle={{flex: 1, justifyContent: 'flex-end'}}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.wrapper} activeOpacity={0.8}>
            <View style={styles.wrapper__first}>
              <Image
                source={{
                  uri: 'https://unsplash.com/photos/279xIHymPYY/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjQ2NDU3MTky&force=true',
                }}
                style={styles.image}
              />
              <View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.specialization}>{item.category}</Text>
                <Text style={styles.specialization}>
                  <EntypoIcon name="location-pin" color={colors.primary} />
                  {item.address}
                </Text>
              </View>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={[styles.name, {fontSize: 13}]}>Experience</Text>
              <Text style={styles.specialization}>
                {item.exp_year} years experience
              </Text>
              <Text style={styles.specialization}>
                1000 online consulation completed
              </Text>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={[styles.name, {fontSize: 13}]}>Qualification</Text>
              <Text style={styles.specialization}>{item.specialization}</Text>
              <Text
                style={[
                  styles.specialization,
                  {fontWeight: '500', color: colors.secondary},
                ]}>
                Available on {item.available_on}
              </Text>
            </View>
            <View style={{marginVertical: 15}}>
              <Buton
                title="Book Apoinment"
                height={35}
                color={colors.white}
                textColor={colors.info}
                textSize={13}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },

  title: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.textBlack,
    flex: 1,
    letterSpacing: 0.5,
  },

  wrapper: {
    marginVertical: 5,
    borderRadius: 6,
    borderColor: '#e4eaef',
    borderWidth: 1,
    borderStyle: 'solid',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  wrapper__first: {
    flexDirection: 'row',
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    marginRight: 10,
  },

  name: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.textBlack,
    letterSpacing: 0.5,
  },

  specialization: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.lightGrey,
    letterSpacing: 0.5,
    marginTop: 5,
  },
});

export default PopularClinic;

const docDetails = [
  {
    id: 1,
    name: 'Dr. Jhasaketan Mohanty',
    exp_year: 25,
    category: 'Medicine Speciality',
    clinic_name: 'jhasaketan&jayashree clinic',
    address: 'kuansh, Bhadrak',
    available_on: 'Every day',
    specialization:
      'MBBS, MD - Gastrologist, KIMS Bhubaneswar, Post graduate Diploma in Health science.',
  },
  {
    id: 2,
    name: 'Dr. Jayashree mohanty',
    exp_year: '25',
    category: 'Skin Specialist',
    clinic_name: 'jhasaketan&jayashree clinic',
    address: 'kuansh, Bhadrak',
    available_on: 'Every day',
    specialization:
      'MBBS, MD - Gastrologist, KIMS Bhubaneswar, Post graduate Diploma in Health science.',
  },
  {
    id: 3,
    name: 'Dr. Amulya Kumar Das',
    exp_year: '28',
    category: 'Medicine Speciality',
    clinic_name: 'Deenadayal Clinic',
    address: 'Gandhi padia, Bhadrak, Bhadrak',
    available_on: 'From Tue To Sun (Every Week)',
    specialization:
      'MBBS, MD - Gastrologist, KIMS Bhubaneswar, Post graduate Diploma in Health science.',
  },
  {
    id: 4,
    name: 'Dr. S.C Panigrahi',
    exp_year: '30',
    category: 'Gastric',
    clinic_name: 'Deenadayal Clinic',
    address: 'Gandhi padia, Bhadrak, Bhadrak',
    available_on: '21(Mon)March',
    specialization:
      'MBBS, MD - Gastrologist, KIMS Bhubaneswar, Post graduate Diploma in Health science.',
  },
];
