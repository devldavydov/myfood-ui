import { Link, useNavigate, useParams } from "react-router-dom";
import { IFood, delFood, getFood } from "../../services/FoodService";
import { useEffect, useState } from "react";
import Loader from "../Loader";
import Notification, { INotification } from "../Notification";

export interface IFoodItemProps {
  isEdit: boolean;
}

export default function FoodItem({ isEdit }: IFoodItemProps) {
  const [foodItem, setFoodItem] = useState<IFood>({} as IFood);
  const [showLoading, setShowLoading] = useState(isEdit);
  const [showLoadError, setShowLoadError] = useState(false);
  const [showItemForm, setShowItemForm] = useState(!isEdit);
  const [notification, setNotification] = useState<INotification>(
    {} as INotification
  );
  const [btnDisabled, setBtnDisabled] = useState(false);
  const navigate = useNavigate();
  const { key } = useParams();

  useEffect(() => {
    if (!isEdit) {
      // Set new empty food item
      setFoodItem({} as IFood);
      return;
    }

    // Load when edit
    getFood(key as string)
      .finally(() => {
        setShowLoading(false);
      })
      .then((result) => {
        setFoodItem(result);
        setShowItemForm(true);
      })
      .catch((error: Error) => {
        setNotification({
          visible: true,
          cls: "danger",
          msg: `Ошибка: ${error.message}`,
        });
        setShowLoadError(true);
      });
  }, []);

  const onDelete = (key: string) => {
    if (!confirm("Вы действительно хотите удалить еду?")) return;

    setNotification({ visible: false });
    setBtnDisabled(true);

    delFood(key)
      .finally(() => {
        setBtnDisabled(false);
      })
      .then(() => navigate("/food"))
      .catch((error: Error) => {
        setNotification({
          visible: true,
          cls: "danger",
          msg: `Ошибка: ${error.message}`,
        });
      });
  };

  const onSave = () => {};

  return (
    <>
      <Loader showLoading={showLoading} />
      <Notification notification={notification} />

      {/* Edit mode */}

      {showLoadError && (
        <>
          <a href="/food" className="btn btn-primary">
            <i className="bi bi-box-arrow-left"></i>
          </a>
        </>
      )}
      {showItemForm && (
        <>
          <form>
            <div className="row mb-3">
              <label htmlFor="name" className="col-sm-2 col-form-label fw-bold">
                Наименование
              </label>
              <div className="col-sm-4">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={foodItem.name}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="brand"
                className="col-sm-2 col-form-label fw-bold"
              >
                Бренд
              </label>
              <div className="col-sm-4">
                <input
                  type="text"
                  className="form-control"
                  id="brand"
                  value={foodItem.brand}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="cal100"
                className="col-sm-2 col-form-label fw-bold"
              >
                ККал, 100г.
              </label>
              <div className="col-sm-4">
                <input
                  type="text"
                  className="form-control"
                  id="cal100"
                  value={foodItem.cal100}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="prot100"
                className="col-sm-2 col-form-label fw-bold"
              >
                Белки, 100г.
              </label>
              <div className="col-sm-4">
                <input
                  type="text"
                  className="form-control"
                  id="prot100"
                  value={foodItem.prot100}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="fat100"
                className="col-sm-2 col-form-label fw-bold"
              >
                Жиры, 100г.
              </label>
              <div className="col-sm-4">
                <input
                  type="text"
                  className="form-control"
                  id="fat100"
                  value={foodItem.fat100}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="carb100"
                className="col-sm-2 col-form-label fw-bold"
              >
                Углеводы, 100г.
              </label>
              <div className="col-sm-4">
                <input
                  type="text"
                  className="form-control"
                  id="carb100"
                  value={foodItem.carb100}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="comment"
                className="col-sm-2 col-form-label fw-bold"
              >
                Комментарий
              </label>
              <div className="col-sm-4">
                <textarea
                  className="form-control"
                  id="comment"
                  value={foodItem.comment}
                />
              </div>
            </div>
            <Link to="/food" className="btn btn-primary me-2">
              <i className="bi bi-box-arrow-left"></i>
            </Link>
            <button
              id="btnSet"
              type="button"
              className="btn btn-warning me-2"
              onClick={onSave}
              disabled={btnDisabled}
            >
              <i className="bi bi-floppy"></i>
            </button>
            {isEdit && (
              <button
                id="btnDelete"
                type="button"
                className="btn btn-danger"
                disabled={btnDisabled}
                onClick={() => onDelete(foodItem.key)}
              >
                <i className="bi bi-trash"></i>
              </button>
            )}
          </form>
        </>
      )}
    </>
  );
}
