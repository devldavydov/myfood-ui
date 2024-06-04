import TableBody, { ITableBodyRow } from "./TableBody";
import TableHeader, {
  ITableHeaderColumn,
  ITableHeaderColumnSort,
} from "./TableHeader";
import { Table as TableRB } from "react-bootstrap";

export interface ITableProps {
  className?: string;
  columns: ITableHeaderColumn[];
  currentSort: ITableHeaderColumnSort;
  onSort(sort: ITableHeaderColumnSort): void;
  rows: ITableBodyRow[];
}

export default function Table({
  className,
  columns,
  currentSort,
  onSort,
  rows,
}: ITableProps) {
  return (
    <TableRB responsive className={className}>
      <TableHeader
        columns={columns}
        currentSort={currentSort}
        onSort={onSort}
      />
      <TableBody rows={rows} />
    </TableRB>
  );
}
