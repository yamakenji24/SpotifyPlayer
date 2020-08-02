import {
  clientId, clientSecret, redirectUri, b64Auth
} from './constants/server-constants';

const getAuthCode = () => {
  if(/localhost:3000\/$/.test(window.location.href)) {    
    window.location.replace(
      "https://accounts.spotify.com/authorize?client_id="+clientId+"&redirect_uri="+redirectUri+"&response_type=code&state=123"
    )
  }
  const url = window.location.href
  return url.match(/(?:code)=([\S\s]*?)&/)[1]
}

const getToken = async (authCode) => {
  const response =  await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${b64Auth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `grant_type=authorization_code&code=${authCode}&redirect_uri=${redirectUri}`,
  })
  
  const {
    access_token: accessToken,
    refresh_token: refreshToken,
    expires_in: expiresIn,
  } = await response.json()
  sessionStorage.setItem('accessToken', accessToken);
  sessionStorage.setItem('refreshToken', refreshToken)
  return accessToken;
}

const getAuthToken =  async () => {
  //sessionStorage.clear()
  let accessToken = sessionStorage.getItem('accessToken');
  if (!accessToken || accessToken === undefined) {
    const authCode = await getAuthCode();
    accessToken = await getToken(authCode)
  }
  return accessToken
}
export default getAuthToken;
