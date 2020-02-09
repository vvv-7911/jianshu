import React, { Component } from 'react';
import { LoginWrapper, LoginBox, Input, Button } from './style';

class Login extends Component {
  state = {  }
  userName = React.createRef();
  password = React.createRef();
  render() { 
    return ( 
      <LoginWrapper>
        <LoginBox>
          <Input placeholder="账号" ref={this.userName}></Input>
          <Input placeholder="密码" type="password" ref={this.password}></Input>
          <Button onClick={() => {
            console.log(this.userName.current.value)
            this.props.login()
          }}>登录</Button>
        </LoginBox>
      </LoginWrapper>
     );
  }
}
 
export default Login;