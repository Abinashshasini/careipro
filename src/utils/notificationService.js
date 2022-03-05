import messaging from '@react-native-firebase/messaging';
import storage from './asyncStorage';
//React native flash message component to display fals messages
import {showMessage} from 'react-native-flash-message';
import colors from './colors';
import API from '../environment/Api';

export const handleRequestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  if (enabled) {
    handleGetFCMToken();
  }
};

//Function to get the user device ID and save it in the storage
const handleGetFCMToken = async () => {
  try {
    const user = await storage.getObject('@user_data');
    //getting the device ID
    const fcmToken = await messaging().getToken();
    storage.storeValue('@user_fcmtoken', fcmToken);
    getTokenByUserId(fcmToken);
    return messaging().onTokenRefresh(token => {
      //If the token refresh then update the token
      let data = {
        userid: user.userid,
        username: user.username,
        token: fcmToken,
        refresh_token: token,
      };
      updateTokenByUserId(user.userid, data);
    });
  } catch (error) {
    console.error('Getting the user device ID error', error);
  }
};

//Function to check if there is a user with device token in data base
const getTokenByUserId = async fcm_token => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const user = await storage.getObject('@user_data');

    const res = await API.get(`getfcmtokenidbyuserid/${user.userid}`, config);

    let data = {
      userid: user.userid,
      username: user.username,
      token: fcm_token,
      refresh_token: null,
    };

    if (res.data.length > 0) {
      updateTokenByUserId(user.userid, data);
    } else {
      createNewUsersToken(data);
    }
  } catch (error) {
    console.error('Getting the token by user ID error', error);
  }
};

//Function to update the token in the data base by user ID
const updateTokenByUserId = async (user_id, details) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    await API.put(`updatefcmtokenid/${user_id}`, details, config);
  } catch (error) {
    console.error(
      'Updating the token in the data base by user id error',
      error,
    );
  }
};

//Function to create a new user with token in tha data base
const createNewUsersToken = async details => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    await API.post('createnewfcmtokenid', details, config);
  } catch (error) {
    console.error('Creating the token in the data base error', error);
  }
};

//Function to listion if there is any notifiction
export const handleListinNotification = async () => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
    navigation.navigate(remoteMessage.data.type);
  });

  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });

  messaging().onMessage(remoteMessage => {
    console.log('remoteMessage: ', remoteMessage);
    showMessage({
      message: remoteMessage.notification.title,
      description: remoteMessage.notification.body,
      type: 'warning',
      backgroundColor: colors.warning,
    });
  });
};
