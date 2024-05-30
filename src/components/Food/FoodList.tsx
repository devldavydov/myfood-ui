import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { IFood, getFoodList } from "../../services/FoodService";
import Loader from "../Loader";
import Notification, { INotification } from "../Notification";
import Pagination, { paginate } from "../Pagination";
import TableHeader, {
  ITableHeaderColumn,
  ITableHeaderColumnSort,
  SortOrder,
} from "../TableHeader";

const columns: ITableHeaderColumn[] = [
  {
    key: "name",
    title: "Наименование",
    className: "align-middle",
    isSortable: true,
  },
  {
    key: "brand",
    title: "Бренд",
    className: "align-middle",
    isSortable: true,
  },
  {
    key: "cal100",
    title: "ККал, 100г.",
    className: "align-middle",
    isSortable: true,
  },
  {
    key: "comment",
    title: "Комментарий",
    className: "align-middle",
    isSortable: false,
  },
  {
    key: "settings",
    title: "Настройки",
    icon: <i className="bi bi-pencil"></i>,
    className: "align-middle text-center",
    isSortable: false,
  },
];

export default function FoodList() {
  const [foodList, setFoodList] = useState<IFood[]>([]);
  const [showLoading, setShowLoading] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [notification, setNotification] = useState<INotification>(
    {} as INotification
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<ITableHeaderColumnSort>({
    colKey: columns[0].key,
    order: SortOrder.ASC,
  });
  const pageSize = 10;

  useEffect(() => {
    getFoodList()
      .finally(() => {
        setShowLoading(false);
      })
      .then((result) => {
        setShowResult(true);
        setFoodList(result);
      })
      .catch((error: Error) => {
        setNotification({
          visible: true,
          cls: "danger",
          msg: `Ошибка: ${error.message}`,
        });
      });
  }, []);

  const filteredFoodList = foodList.filter((f) => {
    const pattern = search.toLocaleUpperCase();
    return (
      f.name.toLocaleUpperCase().indexOf(pattern) !== -1 ||
      f.brand.toLocaleUpperCase().indexOf(pattern) !== -1 ||
      f.comment.toLocaleUpperCase().indexOf(pattern) !== -1
    );
  });
  const sortedFoodList = filteredFoodList.sort((a, b) => {
    const asc = sort.order === SortOrder.ASC;
    switch (sort.colKey) {
      // name
      case columns[0].key:
        return asc
          ? a.name.localeCompare(b.name)
          : -1 * a.name.localeCompare(b.name);
      // brand
      case columns[1].key:
        return asc
          ? a.brand.localeCompare(b.brand)
          : -1 * a.brand.localeCompare(b.brand);
      // cal100
      case columns[2].key:
        return asc ? a.cal100 - b.cal100 : b.cal100 - a.cal100;
    }
    return 0;
  });
  const pagedFoodList = paginate<IFood>(sortedFoodList, currentPage, pageSize);

  return (
    <>
      <div className="row mb-3">
        <div className="col-4">
          <Link to="/food/create" className="btn btn-primary">
            <i className="bi bi-plus-square"></i>
          </Link>
        </div>
        <div className="col-8">
          <div className="input-group float-end">
            <input
              type="text"
              className="form-control"
              placeholder="Поиск"
              defaultValue={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
            />
            <span className="input-group-text" id="basic-addon2">
              <i className="bi bi-search"></i>
            </span>
          </div>
        </div>
      </div>

      <Loader showLoading={showLoading} />

      <Notification notification={notification} />

      {showResult && (
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <TableHeader
              currentSort={sort}
              columns={columns}
              onSort={(sort) => {
                setSort(sort);
                setCurrentPage(1);
              }}
            />
            <tbody id="tblFood">
              {pagedFoodList.map((f) => {
                return (
                  <tr key={f.key}>
                    <td className="align-middle">{f.name}</td>
                    <td className="align-middle">{f.brand}</td>
                    <td className="align-middle">{f.cal100}</td>
                    <td className="align-middle">{f.comment}</td>
                    <td className="align-middle text-center">
                      <Link
                        to={`edit/${f.key}`}
                        className="btn btn-sm btn-warning"
                      >
                        <i className="bi bi-pencil"></i>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Pagination
            itemsCount={filteredFoodList.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={(idx: number) => setCurrentPage(idx)}
          />
        </div>
      )}
    </>
  );
}
