import React ,{useState}from 'react';
import styled from 'styled-components';
import Base from '../../components/Styles/Base';
import {useDispatch} from "react-redux";
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../../action/user_action';

const Form = styled("form")`
`;

const Input = styled("input")`

`;
const ButtonContainer = styled("div")`
margin: 10px 0 0 0;
`;
const Button = styled("button")`
  width: 100%;
`;

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [info, setInfo] = useState({
    email : "",
    password : ""
  })
  const handleSubmit = (e) => {
      e.preventDefault();

      let body = {
        email : info.email,
        password : info.password
      }

      dispatch(userLogin(body))
        .then(response =>  {
          if(response.payload.loginSuccess) {
            navigate("/")
          } else {
            alert("Login Error")
          }
        })

      setInfo({
        ...info,
        email : "",
        password : ""
      })
  }

  const handleChange = (e) => {
    const prev = {
      ...info,
      [e.target.name] : e.target.value
    }
    setInfo(prev)
  }

  return (
    <Base>
      <h1>Hello</h1>
      <Form onSubmit={handleSubmit}>
        <div>E-mail</div>
        <Input type="email" name={"email"} value={info.email} onChange={handleChange}/>

        <div>Password</div>
        <Input type="password" name={"password"} value={info.password} onChange={handleChange}/>

        <ButtonContainer>
          <Button>Login</Button>
        </ButtonContainer>
      </Form>
    </Base>
  );
};

export default LoginPage;