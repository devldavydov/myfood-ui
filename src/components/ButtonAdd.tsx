import { Link } from "react-router-dom";

export interface IButtonAddProps {
  linkTo: string;
}

export default function ButtonAdd({ linkTo }: IButtonAddProps) {
  return (
    <Link to={linkTo} className="btn btn-primary">
      <i className="bi bi-plus-square"></i>
    </Link>
  );
}
