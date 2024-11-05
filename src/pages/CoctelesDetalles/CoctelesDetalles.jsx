import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCocktailById } from "../../services/cocktailAPI";
import "./CoctelesDetalles.css";
import CoctelSpinner from "../../components/CoctelSpinner";

function CoctelesDetalles() {
  const { idDrink } = useParams();
  const [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCocktailDetails = async () => {
      try {
        setError(null);
        const cocktailData = await fetchCocktailById(idDrink);

        if (!cocktailData) {
          throw new Error("Cocktail no encontrado");
        }

        setCocktail(cocktailData);
      } catch (error) {
        console.error("Error al obtener los detalles del cóctel:", error);
        setError(error.message || "Error al cargar los detalles del cóctel");
      } finally {
        setLoading(false);
      }
    };

    getCocktailDetails();
  }, [idDrink]);

  if (loading)
    return (
      <p>
        <CoctelSpinner />
      </p>
    );
  if (error) return <p>{error}</p>;

  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          {loading ? (
            <CoctelSpinner />
          ) : error ? (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          ) : (
            <div className="row gx-4 gx-lg-5 align-items-center">
              <div className="col-md-6">
                <img
                  className="card-img-top mb-5 mb-md-0 rounded"
                  src={cocktail.strDrinkThumb}
                  alt={cocktail.strDrink}
                />
              </div>
              <div className="col-md-6">
                <h1 className="display-5 fw-bolder">{cocktail.strDrink}</h1>
                <div className="fs-5 mb-5">
                  <span className="ms-2">$40.00</span>
                </div>
                <p className="lead">{cocktail.strInstructions}</p>
                <div className="d-flex">
                  <input
                    className="form-control text-center me-3"
                    id="inputQuantity"
                    type="number"
                    defaultValue="1"
                    style={{ maxWidth: "3rem" }}
                  />
                  <button
                    className="btn btn-outline-light flex-shrink-0"
                    type="button"
                  >
                    <i className="bi-cart-fill me-1"></i>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="py-1">
        <div className="container px-4 px-lg-5 mt-5">
          <h2 className="fw-bolder mb-4">Cócteles relacionados</h2>
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {/* TODO - agregar tarjetas relacionadas */}
          </div>
        </div>
      </section>
    </>
  );
}

export default CoctelesDetalles;
