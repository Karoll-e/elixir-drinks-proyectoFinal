import React from "react";
import "./CoctelesDetalles.css";

function CoctelesDetalles() {
  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0 rounded"
                src="https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg"
                alt="Product preview"
              />
            </div>
            <div className="col-md-6">
              <h1 className="display-5 fw-bolder">Shop item template</h1>
              <div className="fs-5 mb-5">
                <span className="ms-2">$40.00</span>
              </div>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
                at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi
                alias magni, accusamus eius blanditiis delectus ipsam minima ea iste
                laborum vero?
              </p>
              <div className="d-flex">
                <input
                  className="form-control text-center me-3"
                  id="inputQuantity"
                  type="number"
                  defaultValue="1"
                  style={{ maxWidth: "3rem" }}
                />
                <button className="btn btn-outline-light flex-shrink-0" type="button">
                  <i className="bi-cart-fill me-1"></i>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-1">
        <div className="container px-4 px-lg-5 mt-5">
          <h2 className="fw-bolder mb-4">Related products</h2>
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            
          </div>
        </div>
      </section>
    </>
  );
}

export default CoctelesDetalles;