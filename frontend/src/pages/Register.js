import React from 'react';
import Section from '../shared/Section/Section';
import Form from '../shared/Form/Form';
import Fieldset from '../shared/Fieldset/Fieldset';
import Input from '../shared/Input/Input';
import useFormWithValidation from '../hooks/useFormWithValidation';
import {
  nameOptions,
  emailOptions,
  passwordOptions,
} from '../utils/formValidationOptions';

const Register = ({ onRegister }) => {
  const { values, handleChange, errors, isValid } = useFormWithValidation({
    name: '',
    email: '',
    password: '',
  });

  return (
    <Section>
      <h1>Register page</h1>
      <Form data={values} onSubmit={onRegister}>
        <Fieldset>
          <Input
            label="Имя"
            name="name"
            placeholder="Введите имя"
            errorMessage={errors.name}
            value={values.name}
            onChange={handleChange}
            validationOptions={nameOptions}
          />
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
          Signup
        </button>
      </Form>
    </Section>
  );
};

export default Register;
