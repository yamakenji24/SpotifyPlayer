import * as React from 'react';
import styled from 'styled-components';
import { clientId, redirectUri } from '../../constants/server-constants';

export const AuthLayout = ():JSX.Element => {
  const handleClick = () => {
    window.location.href = 
      "https://accounts.spotify.com/authorize?client_id="+clientId+"&redirect_uri="+redirectUri+"&response_type=code&state=123" 
  }

  return (
    <>
      <Title>
        Welcome to my TopPage
      </Title>

      <Button onClick={handleClick}>
        Login 
      </Button>
    </>
  )
}

const Title = styled.h1`
  text-align: center;
`;
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;