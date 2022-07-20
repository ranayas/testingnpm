import { ButtonHTMLAttributes, FC } from "react";

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ ...props }) => {
  return <button {...props}>Hello world</button>;
};

export default Button;
