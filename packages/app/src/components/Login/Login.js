import  Button from '../Button/Button'
import { Content } from './LoginStyle';
import React from 'react';

const redirectToSpotifyLogin = () => {
  window.location = "http://localhost:8888/login";
}

const Login = () => {
  return (
    <Content>
      <div>
        <h1>Login</h1>
      </div>
      <Button
        width="250px"
        size="18px"
        padding="25px 0"
        onClick={redirectToSpotifyLogin}
      >
      Fazer login
      </Button>
    </Content>
  )
}


  export default Login;















