import type { HTMLAttributes, FC } from "react";

export interface ReactButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
}

const ReactButton: FC<ReactButtonProps> = ({ text, ...props }) => {
  return <button {...props}>{text}</button>;
};

export default ReactButton;
