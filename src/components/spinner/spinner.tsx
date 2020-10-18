import * as React from "react";
import spinner from "../../assets/spinner.gif";

interface IProps {
  className?: string;
}

export const Spinner = ({ className }: IProps): JSX.Element => {
  return <img src={spinner} alt="spinner" className={className} />;
};
