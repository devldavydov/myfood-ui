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
    <button
      id="btnSet"
      type="button"
      className={["btn", "btn-warning", ...(optClass ? optClass : [])].join(
        " "
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <i className="bi bi-floppy"></i>
    </button>
  );
}
