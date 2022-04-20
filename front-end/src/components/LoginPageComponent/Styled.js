import {
  Button,
  Form, Input,
} from 'antd';
import styled from 'styled-components';

export const LoginPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const LoginForm = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  align-items: center;
`;

export const LoginFormInput = styled(Input)`

`;

export const LoginFormButton = styled(Button)`

`;
