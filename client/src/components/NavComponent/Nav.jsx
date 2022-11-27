import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

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

  .home_button {
    margin-right:20px;
  }
`;

const Button = styled("button")`
  border: none;
  background-color: transparent;
  color : rgba(0,0,0,0.3);
`;

const ButtonBox = styled("div")`
  display:flex;
  color : rgba(0,0,0,0.4);
  margin-right:30px;

  .Signin{
    margin-right:20px;
  }
`;

const Nav = ({handleLogout}) => {
  const navigate = useNavigate()
  const isLogged = useSelector((state) => state.userReducer.isLogged)
  return (
    <>
      <Container>
        <LogoBox>
          <LogoContainer>
            <h3>IanFlix</h3>
          </LogoContainer>

          <LinkBox>
            <Button className="home_button">Home</Button>
            <Button onClick={handleLogout}>Blogs</Button>
          </LinkBox>
        </LogoBox>

        <ButtonBox>
          {isLogged &&
            isLogged
            ? <Button onClick={handleLogout}>logout</Button>
            : <>
                <Button className="Signin" onClick={() => navigate("/login")}>Signin</Button>
                <Button onClick={() => navigate("/register")} >Signup</Button>
              </>
          }


        </ButtonBox>
      </Container>
    </>
  );
};

export default Nav;