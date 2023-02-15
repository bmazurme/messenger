import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useErrorHandler } from 'react-error-boundary';
import { Controller, useForm } from 'react-hook-form';

import useUser from '../../hook/useUser';
import { useSignUpMutation } from '../../store';

import { Button, Input } from '../form-components';
import FormFooter from '../FormFooter';
import { InfoTooltip } from '../popups';

import { Urls } from '../../utils/constants';

type FormPayload = {
  email: string;
  login: string;
  first_name: string;
  second_name: string;
  phone: string;
  password: string;
};

const inputs = [
  {
    name: 'email',
    placeholder: 'E-mail',
    pattern: {
      value: /[a-z0-9._%+-]+@[a-z0-9.-]+[.{0}][a-z]{2,3}$/,
      message: 'Email is invalid',
    },
    required: true,
    autoComplete: 'current-email',
  },
  {
    name: 'login',
    placeholder: 'Login',
    pattern: {
      value: /^[a-zA-Z0-9_-]{3,15}$/,
      message: 'Login is invalid',
    },
    required: true,
    autoComplete: 'current-login',
  },
  {
    name: 'first_name',
    placeholder: 'First name',
    pattern: {
      value: /^[a-zA-Z0-9_-]{3,15}$/,
      message: 'First name is invalid',
    },
    required: true,
    autoComplete: 'current-first_name',
  },
  {
    name: 'second_name',
    placeholder: 'Second name',
    pattern: {
      value: /^[a-zA-Z0-9_-]{3,15}$/,
      message: 'Second name is invalid',
    },
    required: true,
    autoComplete: 'current-second_name',
  },
  {
    name: 'phone',
    placeholder: 'Phone',
    pattern: {
      value: /^[a-zA-Z0-9_-]{3,15}$/,
      message: 'Phone name is invalid',
    },
    required: true,
    autoComplete: 'current-phone_name',
  },
  {
    name: 'password',
    placeholder: 'Password',
    pattern: {
      value: /^[a-zA-Z0-9_-]{3,15}$/,
      message: 'Password is invalid',
    },
    required: true,
    autoComplete: 'current-password',
  },
];

export default function SignUp() {
  const errorHandler = useErrorHandler();
  const userData = useUser();
  const navigate = useNavigate();
  const [signUp] = useSignUpMutation();
  const [isInfoToolTipPopupOpen, setIsInfoToolTipPopupOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (userData) {
      navigate('/');
    }
  });

  const { control, handleSubmit } = useForm<FormPayload>({
    defaultValues: {
      email: '',
      login: '',
      first_name: '',
      second_name: '',
      phone: '',
      password: '',
    },
  });

  const handleCloseAllPopups = () => setIsInfoToolTipPopupOpen(false);
  const onSubmit = handleSubmit(async (data) => {
    try {
      const result: unknown = await signUp(data as Omit<User, 'id' | 'display_name'>);
      setIsSuccess((result as Record<string, Record<string, string>>).error.code !== 'ERR_BAD_REQUEST');
      setIsInfoToolTipPopupOpen(true);
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } catch ({ status, data: { reason } }) {
      errorHandler(new Error(`${status}: ${reason}`));
    }
  });

  return (
    <div className="identity">
      <h2 className="identity__title">Регистрация</h2>
      <form className="form form_identity" onSubmit={onSubmit}>
        {inputs.map((input) => (
          <Controller
            key={input.name}
            name={input.name as keyof FormPayload}
            rules={{
              pattern: input.pattern,
              required: input.required,
            }}
            control={control}
            render={({ field, fieldState }) => (
              <Input
                {...field}
                {...input}
                className="input inbox__input"
                errorText={fieldState.error?.message}
              />
            )}
          />
        ))}
        <Button className="button button_signup" variant="filled">
          <span>SignUp</span>
        </Button>
        <FormFooter url={Urls.SIGNIN} label="SignIn" />
      </form>
      {isInfoToolTipPopupOpen ? (
        <InfoTooltip
          isOpen={isInfoToolTipPopupOpen}
          onClose={handleCloseAllPopups}
          isSuccess={isSuccess}
          text={
            isSuccess
              ? 'You have successfully registered!'
              : 'Oops..! Something went wrong'
          }
        />
      ) : null}
    </div>
  );
}
