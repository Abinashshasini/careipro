import React, {useEffect} from 'react';
import {PermissionsAndroid} from 'react-native';
import {WebView} from 'react-native-webview';
import HomeScreen from './src/screens/Home/HomeScreen';

// ...
const APP = () => {
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Example App',
          message: 'Example App access to your location ',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
        // alert('You can use the location');
      } else {
        console.log('location permission denied');
        alert('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  useEffect(() => {
    requestLocationPermission();
  }, []);

  return <HomeScreen />;
};

export default APP;
