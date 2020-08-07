import React, {FC, useState, useEffect} from 'react';
import styled from 'styled-components';
import getAuthToken from '../../authentication';
import {useHistory} from 'react-router-dom';

const TopPage: FC = () => {
  const [hasToken, sethasToken] = useState(false)
  const history = useHistory();

  useEffect(() => {
    getAuthToken()
    history.push('/search')
  }, [])
  /*
  useEffect (() => {
    if (hasToken) {
      getAuthToken()
    }
  }, [hasToken])*/

  const handleClick = () => {
    sethasToken(true)
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

export default TopPage;