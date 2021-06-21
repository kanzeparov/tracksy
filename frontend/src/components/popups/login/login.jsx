import React from 'react';
// import { useSelector } from 'react-redux';
// import Section from '../../../shared/Section/Section';
import Form from '../../../shared/Form/Form';
import Fieldset from '../../../shared/Fieldset/Fieldset';
import Input from '../../../shared/Input/Input';
import useFormWithValidation from '../../../hooks/useFormWithValidation';
import {
  emailOptions,
  passwordOptions,
} from '../../../utils/formValidationOptions';
import './application-details.css';

function LoginPopup() {
  // const { currentService } = useSelector((state) => state.services);
  const { values, handleChange, errors, isValid } = useFormWithValidation({
    email: '',
    password: '',
  });
  function onLogin() {
    console.log('hey');
  }
  return (
    <div className="login-popup">
      <h1>Введите данные для входа</h1>
      <Form data={values} onSubmit={onLogin}>
        <Fieldset>
          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="Введите email"
            errorMessage={errors.email}
            value={values.email}
            onChange={handleChange}
            validationOptions={emailOptions}
          />
          <Input
            label="Пароль"
            name="password"
            type="password"
            placeholder="Введите пароль"
            errorMessage={errors.password}
            value={values.password}
            onChange={handleChange}
            validationOptions={passwordOptions}
          />
        </Fieldset>
        <button type="submit" disabled={!isValid}>
          Signin
        </button>
      </Form>
    </div>
  );
}

export default LoginPopup;
