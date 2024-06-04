import { useNavigate, useParams } from "react-router-dom";
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
import ButtonSave from "../common/button/ButtonSave";
import ButtonDelete from "../common/button/ButtonDelete";
import ButtonLink from "../common/button/ButtonLink";
import { Col, Form, Row } from "react-bootstrap";

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
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="name">
              <Form.Label column sm={2} className="fw-bold">
                Наименование
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  defaultValue={foodItem.name}
                  onChange={(e) =>
                    setFoodItem({ ...foodItem, name: e.target.value })
                  }
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="brand">
              <Form.Label column sm={2} className="fw-bold">
                Бренд
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  defaultValue={foodItem.brand}
                  onChange={(e) =>
                    setFoodItem({ ...foodItem, brand: e.target.value })
                  }
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="cal100">
              <Form.Label column sm={2} className="fw-bold">
                ККал, 100г.
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  defaultValue={foodItem.cal100}
                  step="0.01"
                  type="number"
                  onChange={(e) =>
                    setFoodItem({
                      ...foodItem,
                      cal100: parseFloat(e.target.value),
                    })
                  }
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="prot100">
              <Form.Label column sm={2} className="fw-bold">
                Белки, 100г.
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  defaultValue={foodItem.prot100}
                  step="0.01"
                  type="number"
                  onChange={(e) =>
                    setFoodItem({
                      ...foodItem,
                      prot100: parseFloat(e.target.value),
                    })
                  }
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="fat100">
              <Form.Label column sm={2} className="fw-bold">
                Жиры, 100г.
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  defaultValue={foodItem.fat100}
                  step="0.01"
                  type="number"
                  onChange={(e) =>
                    setFoodItem({
                      ...foodItem,
                      fat100: parseFloat(e.target.value),
                    })
                  }
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="carb100">
              <Form.Label column sm={2} className="fw-bold">
                Углеводы, 100г.
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  defaultValue={foodItem.carb100}
                  step="0.01"
                  type="number"
                  onChange={(e) =>
                    setFoodItem({
                      ...foodItem,
                      carb100: parseFloat(e.target.value),
                    })
                  }
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="comment">
              <Form.Label column sm={2} className="fw-bold">
                Комментарий
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  as="textarea"
                  defaultValue={foodItem.comment}
                  onChange={(e) =>
                    setFoodItem({
                      ...foodItem,
                      comment: e.target.value,
                    })
                  }
                />
              </Col>
            </Form.Group>
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
          </Form>
        </>
      )}
    </>
  );
}
