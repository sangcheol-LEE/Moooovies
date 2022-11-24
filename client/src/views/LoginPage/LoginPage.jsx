import React ,{useState}from 'react';
import styled from 'styled-components';
import Base from '../../components/Styles/Base';

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
  const [info, setInfo] = useState({
    email : "",
    password : ""
  })
  const handleSubmit = (e) => {
      e.preventDefault();

      // 리덕스 코드 넣고

      const prev = {
        ...info,
        email : "",
        password : "",
      }
      setInfo(prev)
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