export interface ISearchProps {
  optClass?: string[];
  search: string;
  onSearchChange: (search: string) => void;
}

export default function Search({
  optClass,
  search,
  onSearchChange,
}: ISearchProps) {
  return (
    <div className={["input-group", ...(optClass ? optClass : [])].join(" ")}>
      <span className="input-group-text" id="basic-addon2">
        <i className="bi bi-search"></i>
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="Поиск"
        value={search}
        onChange={(e) => {
          onSearchChange(e.target.value);
        }}
      />
      <span
        role="button"
        className="input-group-text"
        id="basic-addon2"
        onClick={() => onSearchChange("")}
      >
        <i className="bi bi-x-lg"></i>
      </span>
    </div>
  );
}
