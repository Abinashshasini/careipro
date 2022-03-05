import axios from 'axios';

//Version to update in the profile page for user
export const Version = {
  version: '1.0.0',
};

export const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

//Axios create baseUrls for Vechile-owner server
export const vechile_owner = axios.create({
  baseURL: 'http://careipro.com:9010/vehicle-owner/', //Test server
});

//Axios create baseUrls for page_data different servers
export const page_data = axios.create({
  baseURL: 'http://careipro.com:9010/vehicle-owner-app-page-data/', //Test server
});

//Axios create baseUrls for Global_Apis different servers
export const global_apis = axios.create({
  baseURL: 'http://careipro.com:9010/global-apis/', //Test server
});
