import React from 'react';
import Section from '../shared/Section/Section';
import Form from '../shared/Form/Form';
import Fieldset from '../shared/Fieldset/Fieldset';
import Input from '../shared/Input/Input';
import useFormWithValidation from '../hooks/useFormWithValidation';
import { emailOptions, passwordOptions } from '../utils/formValidationOptions';

const Login = ({ onLogin }) => {
  const { values, handleChange, errors, isValid } = useFormWithValidation({
    email: '',
    password: '',
  });

  return (
    <Section>
      <h1>Login page</h1>
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
    </Section>
  );
};

export default Login;
