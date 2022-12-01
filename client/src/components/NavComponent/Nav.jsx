import React,{useCallback, } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import axios from 'axios';

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
    cursor: pointer;
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
  cursor: pointer;
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
  const navigate = useNavigate()
  const isLogged = useSelector((state) => state.userReducer.isLogged)

  const handleLogout = useCallback(() => {
    axios.get("/api/users/logout")
    .then(response => {
        if(response.data.success) {
          navigate('/login')
        }else {
          alert("로그아웃 실패")
        }
    })
  },[navigate])

  return (
    <>
      <Container>
        <LogoBox>
          <LogoContainer>
            <h3 onClick={() => navigate("/")}>IanFlix</h3>
          </LogoContainer>

          <LinkBox>
            <Button className="home_button" onClick={() => navigate("/favorite")}>Blogs</Button>
            <Button onClick={handleLogout}>Temp</Button>

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