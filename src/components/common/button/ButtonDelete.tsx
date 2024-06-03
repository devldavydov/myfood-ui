import { Button } from "react-bootstrap";

export interface IButtonSaveProps {
  optClass?: string[];
  disabled: boolean;
  onClick: () => void;
}

export default function ButtonDelete({
  optClass,
  disabled,
  onClick,
}: IButtonSaveProps) {
  return (
    <Button
      variant="danger"
      className={[...(optClass ? optClass : [])].join(" ")}
      onClick={onClick}
      disabled={disabled}
    >
      <i className="bi bi-trash"></i>
    </Button>
  );
}
