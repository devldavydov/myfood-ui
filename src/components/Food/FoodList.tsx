import { CreateNotificationDanger, NotitficationStore } from "../Notifications";

export interface IFoodListProps {
  store: NotitficationStore;
}

export default function FoodList({ store }: IFoodListProps) {
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
      <div id="blockLoader" className="spinner-border" hidden>
        <span className="visually-hidden">Loading...</span>
      </div>
      <div id="blockList" className="table-responsive">
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
          <tbody id="tblFood"></tbody>
        </table>
      </div>
    </>
  );
}
