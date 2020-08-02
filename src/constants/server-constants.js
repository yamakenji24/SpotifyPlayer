import base64 from 'react-native-base64'

export const authEndpoint = "https://accounts.spotify.com/authorize";
export const clientId = process.env.REACT_APP_CLIENT_ID;
export const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
export const redirectUri = process.env.REACT_APP_REDIRECT_URI;
export const scopes = process.env.REACT_APP_SCOPES;
export const b64Auth = base64.encode(clientId+":"+clientSecret)
