/* eslint-disable */
import React, { forwardRef } from 'react';
import { type InputHTMLAttributes } from 'react';

type OwnProps = {
  id?: string;
  label?: string;
  black?: boolean;
  errorText?: string;
};

export type InputProps = OwnProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'pattern'>;

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    errorText = '',
    type,
    onChange,
    label,
    id,
    value,
    placeholder,
    className,
    black,
  } = props;
  return (
    <div className={`text-field ${black ? 'text-field_row' : ''}`}>
      {label &&
        <label
          htmlFor={id}
          className={`${className} text-field__label`}
        >
          {label}
        </label>}
      <input
        ref={ref}
        onChange={onChange}
        type={type}
        value={value}
        placeholder={placeholder}
        className={`${className}${errorText ? ' text-field_error' : ''}`}
      />
      {
        errorText
        && <span className={`${id}-input-error text-field__input-error text-field__input-error_help`}>{ errorText }</span>
      }
    </div>
  );
});

export default Input;
