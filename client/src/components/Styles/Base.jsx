import React from 'react';
import styled from "styled-components";

const Container = styled("div")`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
`;

const Base = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default Base;