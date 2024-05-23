import { Link } from "react-router-dom";
import { CreateNotificationDanger } from "../Notifications";
import { NotitficationStore } from "../../store/NotificationStore";
import { useEffect, useState } from "react";
import { IFood, getFoodList } from "../../services/FoodService";

export interface IFoodListProps {
  store: NotitficationStore;
}

export default function FoodList({ store }: IFoodListProps) {
  const [foodList, setFoodList] = useState<IFood[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    getFoodList()
      .then((result) => {
        setFoodList(result);
      })
      .catch(() => {
        setLoadError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="row mb-3">
        <div className="col-4">
          <a role="button" href="/food/set" className="btn btn-primary">
            <i className="bi bi-plus-square"></i>
          </a>
        </div>
        <div className="col-8">
          <div className="input-group float-end">
            <input type="text" className="form-control" />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="btnSearch"
              onClick={() =>
                store.addNotification(CreateNotificationDanger("test"))
              }
            >
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>
      </div>

      {loading && (
        <div className="spinner-border">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      {!loading && loadError && (
        <div className="alert alert-danger">Ошибка загрузки</div>
      )}

      {!loading && !loadError && (
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
              {foodList.map((f) => {
                return (
                  <tr key={f.key}>
                    <td className="align-middle">{f.name}</td>
                    <td className="align-middle">{f.brand}</td>
                    <td className="align-middle">{f.cal100}</td>
                    <td className="align-middle">{f.comment}</td>
                    <td className="align-middle text-center">
                      <Link to={f.key} className="btn btn-sm btn-warning">
                        <i className="bi bi-pencil"></i>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
