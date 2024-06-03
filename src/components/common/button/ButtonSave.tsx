import { Button } from "react-bootstrap";

export interface IButtonSaveProps {
  optClass?: string[];
  disabled: boolean;
  onClick: () => void;
}

export default function ButtonSave({
  optClass,
  disabled,
  onClick,
}: IButtonSaveProps) {
  return (
    <Button
      variant="warning"
      className={[...(optClass ? optClass : [])].join(" ")}
      onClick={onClick}
      disabled={disabled}
    >
      <i className="bi bi-floppy"></i>
    </Button>
  );
}
