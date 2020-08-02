import {
  clientId, clientSecret, redirectUri
} from './constants/server-constants';

function authentication() {
  if(/localhost:3000\/$/.test(window.location.href)) {    
    window.location.replace(
      "https://accounts.spotify.com/authorize?client_id="+clientId+"&redirect_uri="+redirectUri+"&response_type=token&state=123"
    )
  }
  let url = window.location.href
  let accessToken = url.match(/#(?:access_token)=([\S\s]*?)&/)[1]
  return accessToken;
}

export default function getAuthToken() {
  //sessionStorage.clear()
  let accessToken = sessionStorage.getItem('accessToken');
  if (accessToken) {
    return accessToken;
  } else {
    accessToken = authentication();
    sessionStorage.setItem('accessToken', accessToken);
    return accessToken;
  }
}
