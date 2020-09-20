import * as React from 'react';
import { useEffect, useState } from 'react';
import { redirectUri, b64Auth } from '../../constants/server-constants';
import { Redirect } from 'react-router-dom';

interface SignInApiResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
}

export const AuthCallbackContainer = () => {
  const getAuthCode = (): Promise<string> => { 
    const url = window.location.href
    const code = url.match(/(?:code)=([\S\s]*?)&/)
    return code !== null ? Promise.resolve(code[1]) : Promise.reject(new Error('null code'))
  }

  const getToken = async (authCode: string):Promise<SignInApiResponse> => {
    const handleErrors = (response:Response):Response => {
      if(!response.ok) {
        throw Error(response.statusText)
      }
      return response
    }

    return await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${b64Auth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=authorization_code&code=${authCode}&redirect_uri=${redirectUri}`,
    })
    .then(handleErrors)
    .then<SignInApiResponse>(response => Promise.resolve(response.json()))
    .catch(err => Promise.reject(new Error(err)))
  }
  
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const code = await getAuthCode()
        const data = await getToken(code)
        sessionStorage.setItem('accessToken', data.access_token)
        sessionStorage.setItem('refreshToken', data.refresh_token)
      } catch(error) {
        console.log(error)
      }
    }
    fetchToken()
  }, [])

  return (
    <>
      <p>Loading....</p>
    </>
  )
}