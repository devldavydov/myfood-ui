export interface ISearchProps {
  optClass: string[];
  search: string;
  onSearchChange: (search: string) => void;
}

export default function Search({
  optClass,
  search,
  onSearchChange,
}: ISearchProps) {
  return (
    <div className={["input-group", ...optClass].join(" ")}>
      <input
        type="text"
        className="form-control"
        placeholder="Поиск"
        defaultValue={search}
        onChange={(e) => {
          onSearchChange(e.target.value);
        }}
      />
      <span className="input-group-text" id="basic-addon2">
        <i className="bi bi-search"></i>
      </span>
    </div>
  );
}
