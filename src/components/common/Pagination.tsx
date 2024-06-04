import { Pagination as PaginationRB } from "react-bootstrap";

export interface IPaginationProps {
  itemsCount: number;
  pageSize: number;
  currentPage: number;
  onPageChange(idx: number): void;
}

export function paginate<T>(
  items: T[],
  pageNumber: number,
  pageSize: number
): T[] {
  const startIndex = (pageNumber - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
}

// TODO: if pages too many: https://react-bootstrap.netlify.app/docs/components/pagination#more-options
export default function Pagination({
  itemsCount,
  pageSize,
  currentPage,
  onPageChange,
}: IPaginationProps) {
  const pagesCount = Math.ceil(itemsCount / pageSize);

  if (pagesCount === 1) {
    return null;
  }

  return (
    <PaginationRB>
      {[...Array(pagesCount).keys()].map((p) => {
        return (
          <PaginationRB.Item
            key={p + 1}
            active={currentPage == p + 1}
            onClick={() => onPageChange(p + 1)}
          >
            {p + 1}
          </PaginationRB.Item>
        );
      })}
    </PaginationRB>
  );
}
