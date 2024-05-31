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
    <button
      id="btnDelete"
      type="button"
      className={["btn", "btn-danger", ...(optClass ? optClass : [])].join(" ")}
      onClick={onClick}
      disabled={disabled}
    >
      <i className="bi bi-trash"></i>
    </button>
  );
}
