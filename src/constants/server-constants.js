import base64 from 'react-native-base64'

export const authEndpoint = "https://accounts.spotify.com/authorize";
export const clientId = process.env.REACT_APP_CLIENTID;
export const clientsecret = process.env.REACT_APP_CLIENTSECRET;
export const redirectUri = "http://localhost:3000/";
export const scopes = 'user-read-private user-read-email';
export const basic_authorization = base64.encode(clientId+":"+clientsecret)
export const authorization_code = process.env.REACT_APP_AUTHORIZATION
