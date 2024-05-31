import { Link, useNavigate, useParams } from "react-router-dom";
import {
  IFood,
  IFoodSet,
  delFood,
  getFood,
  setFood,
} from "../../services/FoodService";
import { useEffect, useState } from "react";
import Loader from "../common/Loader";
import Notification, { INotification } from "../common/Notification";
import ButtonSave from "../common/ButtonSave";
import ButtonDelete from "../common/ButtonDelete";
import ButtonLink from "../common/ButtonLink";

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

  const onSave = () => {
    setNotification({ visible: false });
    setBtnDisabled(true);

    setFood({
      isEdit: isEdit,
      food: {
        key: isEdit ? foodItem.key : "",
        name: foodItem.name,
        brand: foodItem.brand,
        cal100: foodItem.cal100,
        prot100: foodItem.prot100,
        fat100: foodItem.fat100,
        carb100: foodItem.carb100,
        comment: foodItem.comment,
      } as IFood,
    } as IFoodSet)
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

  return (
    <>
      <Loader showLoading={showLoading} />
      <Notification notification={notification} />

      {showLoadError && (
        <ButtonLink linkTo="/food" iconClass="bi-box-arrow-left" />
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
                  defaultValue={foodItem.name}
                  onChange={(e) =>
                    setFoodItem({ ...foodItem, name: e.target.value })
                  }
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
                  defaultValue={foodItem.brand}
                  onChange={(e) =>
                    setFoodItem({ ...foodItem, brand: e.target.value })
                  }
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
                  type="number"
                  className="form-control"
                  step="0.01"
                  id="cal100"
                  defaultValue={foodItem.cal100}
                  onChange={(e) =>
                    setFoodItem({
                      ...foodItem,
                      cal100: parseFloat(e.target.value),
                    })
                  }
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
                  type="number"
                  className="form-control"
                  id="prot100"
                  step="0.01"
                  defaultValue={foodItem.prot100}
                  onChange={(e) =>
                    setFoodItem({
                      ...foodItem,
                      prot100: parseFloat(e.target.value),
                    })
                  }
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
                  type="number"
                  className="form-control"
                  id="fat100"
                  step="0.01"
                  defaultValue={foodItem.fat100}
                  onChange={(e) =>
                    setFoodItem({
                      ...foodItem,
                      fat100: parseFloat(e.target.value),
                    })
                  }
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
                  type="number"
                  className="form-control"
                  id="carb100"
                  step="0.01"
                  defaultValue={foodItem.carb100}
                  onChange={(e) =>
                    setFoodItem({
                      ...foodItem,
                      carb100: parseFloat(e.target.value),
                    })
                  }
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
                  defaultValue={foodItem.comment}
                  onChange={(e) =>
                    setFoodItem({ ...foodItem, comment: e.target.value })
                  }
                />
              </div>
            </div>
            <ButtonLink
              linkTo="/food"
              iconClass="bi-box-arrow-left"
              optClass={["me-2"]}
            />
            <ButtonSave
              optClass={["me-2"]}
              onClick={onSave}
              disabled={btnDisabled}
            />
            {isEdit && (
              <ButtonDelete
                disabled={btnDisabled}
                onClick={() => onDelete(foodItem.key)}
              />
            )}
          </form>
        </>
      )}
    </>
  );
}
