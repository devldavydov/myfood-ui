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
    <ul className="pagination">
      {[...Array(pagesCount).keys()].map((p) => {
        return (
          <li
            key={p + 1}
            className={"page-item" + (currentPage == p + 1 ? " active" : "")}
          >
            <a
              role="button"
              className="page-link"
              onClick={() => onPageChange(p + 1)}
            >
              {p + 1}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
