import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { IFood, getFoodList } from "../../services/FoodService";
import Loader from "../Loader";
import Notification, { INotification } from "../Notification";
import Pagination, { paginate } from "../Pagination";

export default function FoodList() {
  const [foodList, setFoodList] = useState<IFood[]>([]);
  const [showLoading, setShowLoading] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [notification, setNotification] = useState<INotification>(
    {} as INotification
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
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
  const pagedFoodList = paginate<IFood>(
    filteredFoodList,
    currentPage,
    pageSize
  );

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
            <thead>
              <tr className="table-light">
                <th className="align-middle">Наименование</th>
                <th className="align-middle">Бренд</th>
                <th className="align-middle">ККал, 100г.</th>
                <th className="align-middle">Комментарий</th>
                <th className="align-middle text-center">
                  <i className="bi bi-gear"></i>
                </th>
              </tr>
            </thead>
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
