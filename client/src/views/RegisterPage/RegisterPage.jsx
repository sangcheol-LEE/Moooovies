import React,{useState}from 'react';
import Base from '../../components/Styles/Base';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { userRegister } from '../../action/user_action';

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



const RegisterPage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [info, setInfo] = useState({
    name : "",
    email : "",
    password : "",
    password_confirm : ""
  });
  const handleSubmit = (e) => {
      e.preventDefault();
      const {email, password, password_confirm , name} = info
      if(password !== password_confirm) {
          setInfo({
            ...info,
            email : "",
            password : "",
            name: "",
            password_confirm: "",
          })
        return alert("비밀번호와 비밀번호 확인이 맞지 않습니다.")
      } else {
          let body = {
            name,
            email,
            password,
            password_confirm
          }

          dispatch(userRegister(body))
            .then(response =>  {
              if(response.payload.success) {
                navigate("/login")
              } else {
                alert("회원가입에 실패하셨습니다.")
              }
            })

          setInfo({
            ...info,
            email : "",
            password : "",
            name: "",
            password_confirm: "",
          })
      }
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
      <h1>회원가입</h1>
      <Form onSubmit={handleSubmit}>

        <div>이름</div>
        <Input type="text" name={"name"} value={info.name} onChange={handleChange}/>

        <div>E-mail</div>
        <Input type="email" name={"email"} value={info.email} onChange={handleChange}/>

        <div>Password</div>
        <Input type="password" name={"password"} value={info.password} onChange={handleChange}/>

        <div>password confirm</div>
        <Input type="password" name={"password_confirm"} value={info.password_confirm} onChange={handleChange}/>

        <ButtonContainer>
          <Button>Login</Button>
        </ButtonContainer>

      </Form>
    </Base>
  );
};

export default RegisterPage;