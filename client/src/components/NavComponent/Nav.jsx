import React from 'react';
import styled from 'styled-components';


const Container = styled("div")`
  display:flex;
  justify-content:space-between;
  align-items: center;
  width:100%;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
`;

const LogoBox = styled("div")`
  display:flex;
  align-items: center;
  color : rgba(0,0,0,0.4);
  margin-left:30px;
`;

const LogoContainer = styled("div")`
  margin-right : 100px;
  h3{
    color: green;
  }
`;
const LinkBox  = styled("div")`
  display:flex;

  div {
    margin-right:20px;
  }
`;


const ButtonBox = styled("div")`
  display:flex;
  color : rgba(0,0,0,0.4);
  margin-right:30px;

  .Signin{
    margin-right:20px;
  }

`;

const Nav = () => {
  return (
    <>
      <Container>
        <LogoBox>
          <LogoContainer>
            <h3>logo</h3>
          </LogoContainer>

          <LinkBox>
            <div>Home</div>
            <div>Blogs</div>
          </LinkBox>
        </LogoBox>

        <ButtonBox>
          <div className="Signin">Signin</div>
          <div>Signup</div>
        </ButtonBox>
      </Container>
    </>
  );
};

export default Nav;