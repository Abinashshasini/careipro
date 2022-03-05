import AsyncStorage from '@react-native-async-storage/async-storage';

//Storing a value in Async storage
const storeValue = async (storage_Key, value) => {
  try {
    await AsyncStorage.setItem(storage_Key, value);
  } catch (error) {
    console.error('storing a value error: ', error);
  }
};

//Storing an object in Async storage
const storeObject = async (storage_Key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(storage_Key, jsonValue);
  } catch (error) {
    console.error('storing a object error: ', error);
  }
};

//Getting a value in Async storage
const getValue = async storage_Key => {
  try {
    const value = await AsyncStorage.getItem(storage_Key);
    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.error('storing a value error: ', error);
  }
};

//Getting an object in Async storage
const getObject = async storage_Key => {
  try {
    const jsonValue = await AsyncStorage.getItem(storage_Key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error('storing a object error: ', error);
  }
};

//Removing a value from Async storage
const removeValue = async storage_Key => {
  try {
    await AsyncStorage.removeItem(storage_Key);
  } catch (error) {
    console.error('removing a value error: ', error);
  }
};

//Clearing the Async storage
const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error('error: ', error);
  }
};

export default {
  getValue,
  getObject,
  storeValue,
  storeObject,
  removeValue,
  clearStorage,
};
