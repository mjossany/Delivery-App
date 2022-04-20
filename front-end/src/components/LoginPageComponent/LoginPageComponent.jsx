import React from 'react';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { MainLayout } from '../../styles/Layouts';
import {
  LoginForm, LoginFormButton, LoginFormInput, LoginPageContainer,
} from './Styled';

function LoginPageComponent() {
  return (
    <MainLayout>
      <LoginPageContainer>
        <LoginForm
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
        >
          <LoginForm.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <LoginFormInput
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </LoginForm.Item>
          <LoginForm.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <LoginFormInput
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </LoginForm.Item>
          <LoginForm.Item>
            <LoginFormButton
              type="primary"
              htmlType="submit"
              className="login-form-button"
              disabled="true"
            >
              Log in
            </LoginFormButton>
            {' '}
            Or
            {' '}
            <a href="register-now">Register Now!</a>
          </LoginForm.Item>
        </LoginForm>
      </LoginPageContainer>
    </MainLayout>
  );
}

export default LoginPageComponent;
