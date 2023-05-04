import { InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  varient: 'contained' | 'outlined';
};

const Input = (props: InputProps) => {
  const { onChange, ...other } = props;

  return <input type="text" onChange={onChange} {...other} />;
};

export default Input;
