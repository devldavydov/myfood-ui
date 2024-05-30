import { ReactElement } from "react";

export interface ITableHeaderColumn {
  key: string;
  title: string;
  icon?: ReactElement;
  className: string;
  isSortable: boolean;
}

export enum SortOrder {
  ASC,
  DESC,
}

export interface ITableHeaderColumnSort {
  colKey: string;
  order: SortOrder;
}

export interface ITableHeaderProps {
  columns: ITableHeaderColumn[];
  currentSort: ITableHeaderColumnSort;
  onSort(sort: ITableHeaderColumnSort): void;
}

export default function TableHeader({
  columns,
  currentSort,
  onSort,
}: ITableHeaderProps) {
  const raiseSort = (colKey: string) => {
    let newSort = { ...currentSort };
    if (newSort.colKey === colKey) {
      newSort.order =
        currentSort.order === SortOrder.ASC ? SortOrder.DESC : SortOrder.ASC;
    } else {
      newSort.colKey = colKey;
      newSort.order = SortOrder.ASC;
    }

    onSort(newSort);
  };

  const renderSortIcon = (c: ITableHeaderColumn) => {
    if (!c.isSortable || c.key !== currentSort.colKey) return null;
    if (currentSort.order === SortOrder.ASC)
      return <i className="bi bi-sort-up-alt"></i>;
    return <i className="bi bi-sort-down"></i>;
  };

  return (
    <thead>
      <tr className="table-light">
        {columns.map((c) => {
          let condAttr: { [k: string]: string } = {};
          if (c.isSortable) condAttr["role"] = "button";

          return (
            <th
              key={c.key}
              className={c.className}
              {...condAttr}
              onClick={() => {
                if (!c.isSortable) return;
                raiseSort(c.key);
              }}
            >
              {c.icon || c.title} {renderSortIcon(c)}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}
