import { Link } from "react-router-dom";

export default function FoodItem() {
  return (
    <>
      <div id="blockLoader" className="spinner-border" hidden>
        <span className="visually-hidden">Loading...</span>
      </div>
      <div id="blockError" hidden>
        <a href="/food" className="btn btn-primary">
          <i className="bi bi-box-arrow-left"></i>
        </a>
      </div>
      <div id="blockFound">
        <form>
          <div className="row mb-3">
            <label htmlFor="name" className="col-sm-2 col-form-label fw-bold">
              Наименование
            </label>
            <div className="col-sm-4">
              <input type="text" className="form-control" id="name" value="" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="brand" className="col-sm-2 col-form-label fw-bold">
              Бренд
            </label>
            <div className="col-sm-4">
              <input type="text" className="form-control" id="brand" value="" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="cal100" className="col-sm-2 col-form-label fw-bold">
              ККал, 100г.
            </label>
            <div className="col-sm-4">
              <input
                type="text"
                className="form-control"
                id="cal100"
                value=""
              />
            </div>
          </div>
          <div className="row mb-3">
            <label
              htmlFor="prot100"
              className="col-sm-2 col-form-label fw-bold"
            >
              БЖУ, 100г.
            </label>
            <div className="col-sm-4">
              <input type="text" className="form-control" id="pfc" value="" />
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
              <textarea className="form-control" id="comment"></textarea>
            </div>
          </div>
          <Link to="/food" className="btn btn-primary me-2">
            <i className="bi bi-box-arrow-left"></i>
          </Link>
          <button id="btnSet" type="button" className="btn btn-warning me-2">
            <i className="bi bi-floppy"></i>
          </button>
          <button id="btnDelete" type="button" className="btn btn-danger">
            <i className="bi bi-trash"></i>
          </button>
        </form>
      </div>
    </>
  );
}
