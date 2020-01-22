import React, { Component } from 'react';

import  Button from '../Button/Button'
import { Content } from './LoginStyle';

class Login extends Component {
  state = { 
    loading: false
  };

  redirect = () => {
    console.log("click")
  //   const { history } = this.props;
  //   history.push('/http://localhost:8888');
   }

  

  render()  {
    return (
      <>

      <Content>
        <div>
          <h1>Olá</h1>
     
        </div>
        <Button
          width="250px"
          size="18px"
          padding="25px 0"
          onClick={this.redirect}
        />

      </Content>
    </>
    )
  };
}


  export default Login;















