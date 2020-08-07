import React, {FC} from 'react';
import styled from 'styled-components';

const TopPage: FC = () => {
  return (
    <Title>
      Welcome to my TopPage
    </Title>
  )
}

const Title = styled.h1`
  text-align: center;
`;

export default TopPage;