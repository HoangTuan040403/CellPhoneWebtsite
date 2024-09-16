import React from 'react';
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style';
import InputForm from '../../components/InputForm/InputForm';
import { Button, Image } from 'antd';
import imageLogo from '../../assets/images/logostore.png';
import { ReactReduxContext } from 'react-redux';

const SignInPage = () => {
  return (
 
    <div style={{display:'flex', alignItems:'center', justifyContent:'center', background:'rgba(0,0,0,0.53)', height:'100vh'}}>
    <div style={{width:'800px', height:'445px', borderRadius:'6px', background:'#fff', display:'flex'}}>
      <WrapperContainerLeft>
      <h1>Xin chào</h1>
      <p>Đăng nhập hoặc Tạo tài khoản</p>
      <InputForm style={{marginBottom: '10px'}} placeholder="abc@gmail.com"/>
      <InputForm placeholder="password"/> 
      <Button
            size={20}
            style={{
              background: 'rgb(255, 57, 69)',
              borderRadius: '4px',
              height: '48px',
              width: '100%',
              margin: '26px 0 10px'
            }}
          >
            <span style={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}>Đăng nhập</span>
          </Button>
          <p><WrapperTextLight>Quên mật khẩu?</WrapperTextLight></p>
          <p>Chưa có tài khoản <WrapperTextLight>Tạo tài khoản</WrapperTextLight></p>
          </WrapperContainerLeft>
          <WrapperContainerRight>
            <Image src={imageLogo} preview={false} alt="image-logo" height="203px" width="203px"/>
            
          </WrapperContainerRight>
    </div>
    </div>
  );
};

export default SignInPage;

