import { Button, Form, InputGroup } from "react-bootstrap";

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
    <InputGroup className={[...(optClass ? optClass : [])].join(" ")}>
      <InputGroup.Text id="basic-addon1">
        <i className="bi bi-search"></i>
      </InputGroup.Text>
      <Form.Control
        placeholder="Поиск"
        value={search}
        onChange={(e) => {
          onSearchChange(e.target.value);
        }}
      />
      <Button variant="outline-secondary" onClick={() => onSearchChange("")}>
        <i className="bi bi-x-lg"></i>
      </Button>
    </InputGroup>
  );
}
