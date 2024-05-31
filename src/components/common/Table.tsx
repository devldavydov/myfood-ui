import TableBody, { ITableBodyRow } from "./TableBody";
import TableHeader, {
  ITableHeaderColumn,
  ITableHeaderColumnSort,
} from "./TableHeader";

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
    <table className={className}>
      <TableHeader
        columns={columns}
        currentSort={currentSort}
        onSort={onSort}
      />
      <TableBody rows={rows} />
    </table>
  );
}
