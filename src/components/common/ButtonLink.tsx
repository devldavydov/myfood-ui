import { Link } from "react-router-dom";

export interface IButtonLinkProps {
  linkTo: string;
  iconClass: string;
  optClass?: string[];
}

export default function ButtonLink({
  linkTo,
  iconClass,
  optClass,
}: IButtonLinkProps) {
  return (
    <Link
      to={linkTo}
      className={["btn", "btn-primary", ...(optClass ? optClass : [])].join(
        " "
      )}
    >
      <i className={"bi " + iconClass}></i>
    </Link>
  );
}
