import React from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import SmartForm, {
  SmartCheckbox,
  SmartInput,
  SmartButton,
} from '../../components/Form';

import { authenticateUser } from '../../utils/api';
import { setItem } from '../../utils';

import './styles';
import toastState from '../../atoms/toasts';

declare interface LoginForm {
  email: string;
  password: string;
}

const defaultValues: LoginForm = { email: '', password: '' };

const Login = () => {
  const [toasts, setToasts] = useRecoilState(toastState);
  const addToast = (msg: string, bg = 'success') =>
    setToasts([...toasts, { msg, bg }]);

  const navigate = useNavigate();

  const [hidePass, setHidePass] = React.useState(true);
  const toggleHidePass = () => setHidePass(!hidePass);

  const login = async (email: string, password: string) => {
    try {
      const data = await authenticateUser(email, password);
      await setItem('token', data.token);
      addToast('You are successfully logged in.');
      navigate('/users');
    } catch {
      addToast('Authentication failed.', 'danger');
    }
  };

  const authenticateVisitor = async (formData: LoginForm) =>
    await login(formData.email, formData.password);

  const loginWithValidUser = async () =>
    await login('eve.holt@reqres.in', 'cityslicka');

  return (
    <React.Fragment>
      <SmartForm<LoginForm>
        mode="onChange"
        onSubmit={authenticateVisitor}
        defaultValues={defaultValues}
        className="login-form"
      >
        <h6>Hello there, Sign in to continue</h6>
        <SmartInput
          label="Email"
          name="email"
          className="login-form-group"
          rules={{
            required: 'Email is required.',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address.',
            },
          }}
        />
        <SmartInput
          label="Password"
          name="password"
          type={hidePass ? 'password' : 'text'}
          className="login-form-group"
          append={
            <Button
              onClick={toggleHidePass}
              className="icon-btn input-icon-btn"
            >
              <i
                className={`bi ${
                  hidePass ? 'bi-eye-slash-fill' : 'bi-eye-fill'
                }`}
              />
            </Button>
          }
          rules={{
            required: 'Password is required.',
          }}
        />
        <SmartCheckbox
          name="acceptTerms"
          className="login-form-group"
          label={
            <div>
              By creating or logging into account, you are agreeing with our{' '}
              <a href="#">Terms & Conditions</a> and{' '}
              <a href="#"> Privacy Policy</a>.
            </div>
          }
          rules={{
            required: 'Terms & Conditions are required.',
          }}
        />
        <SmartButton variant="primary" type="submit" label="Next" />
      </SmartForm>
      <Button variant="link" onClick={loginWithValidUser} className="link-btn">
        Signin with company SSO
      </Button>
    </React.Fragment>
  );
};

export default Login;
