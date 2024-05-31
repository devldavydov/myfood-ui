export interface ISearchProps {
  classNameFloat: string;
  search: string;
  onSearchChange: (search: string) => void;
}

export default function Search({
  classNameFloat,
  search,
  onSearchChange,
}: ISearchProps) {
  return (
    <div className={"input-group " + classNameFloat}>
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
