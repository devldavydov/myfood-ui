import { ReactElement } from "react";

export interface ITableBodyCell {
  value?: string;
  content?: ReactElement;
  className?: string;
}

export interface ITableBodyRow {
  cells: ITableBodyCell[];
  key: string;
}

export interface ITableBodyProps {
  rows: ITableBodyRow[];
}

export default function TableBody({ rows }: ITableBodyProps) {
  return (
    <tbody>
      {rows.map((row) => (
        <tr key={row.key}>
          {row.cells.map((cell, idx) => (
            <td key={row.key + idx} className={cell.className}>
              {cell.content || cell.value || ""}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
