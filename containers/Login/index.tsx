import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import SmartForm, {
  SmartCheckbox,
  SmartInput,
  SmartButton,
} from '../../components/Form';

import { authenticateUser, removeItem, setItem } from '../../utils';

import './styles';

declare interface LoginForm {
  email: string;
  password: string;
}

const defaultValues: LoginForm = { email: '', password: '' };

const Login = () => {
  const navigate = useNavigate();

  const [hidePass, setHidePass] = React.useState(true);
  const toggleHidePass = () => setHidePass(!hidePass);

  const authenticateVisitor = async (formData: LoginForm) => {
    const data = await authenticateUser(formData.email, formData.password);
    if (data?.token) {
      await setItem('token', data.token);
      navigate('/users');
    }
  };

  const loginWithValidUser = async () => {
    const data = await authenticateUser('eve.holt@reqres.in', 'cityslicka');
    if (data?.token) {
      await setItem('token', data.token);
      navigate('/users');
    }
  };

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
