import {
  clientId, redirectUri, b64Auth
} from './constants/server-constants';

const getAuthCode = () => {
  if(/localhost:3000\/$/.test(window.location.href)) {    
    window.location.replace(
      "https://accounts.spotify.com/authorize?client_id="+clientId+"&redirect_uri="+redirectUri+"&response_type=code&state=123"
    )
  }
  const url = window.location.href
  const code = url.match(/(?:code)=([\S\s]*?)&/)
  return code !== null ? code[1] : null
}

const saveToken = (key: string, token: string): void => {
  sessionStorage.setItem(key, token);
}

const getToken = async (authCode: string): Promise<string|null> => {
  //requestはx-www-form-urlencodedに指定する必要がある (axiosだと面倒くさいのでfetchで)
  return await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${b64Auth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `grant_type=authorization_code&code=${authCode}&redirect_uri=${redirectUri}`,
  })
  .then(response => response.json())
  .then(data => {
    saveToken('accessToken', data.access_token)
    saveToken('refreshToken', data.refresh_token)
    return data.access_token
  })
  .catch(err => null)
}

const getAuthToken =  async () => {
  //sessionStorage.clear()
  let accessToken = sessionStorage.getItem('accessToken');
  if (!accessToken || accessToken === undefined) {
    const authCode = await getAuthCode();
    accessToken = (authCode) ? await getToken(authCode) : null;
  }
  return accessToken
}
export default getAuthToken;
