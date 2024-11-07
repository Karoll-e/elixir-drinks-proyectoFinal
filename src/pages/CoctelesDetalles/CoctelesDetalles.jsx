import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { fetchCocktailById } from "../../services/cocktailAPI";
import "./CoctelesDetalles.css";
import CoctelSpinner from "../../components/CoctelSpinner";
import { useCart } from "../Shopping-cart/Hooks/useCart";
import { Link } from "react-router-dom";

function CoctelesDetalles() {
  const { idDrink } = useParams();
  const { addToCart } = useCart();
  const location = useLocation();
  const [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const getCocktailDetails = async () => {
      try {
        setError(null);
        const cocktailData = await fetchCocktailById(idDrink);
        if (!cocktailData) {
          throw new Error("Cocktail no encontrado");
        }
        setCocktail({
          ...cocktailData,
          price: location.state?.price || "$15.00"
        });
      } catch (error) {
        console.error("Error al obtener los detalles del cóctel:", error);
        setError(error.message || "Error al cargar los detalles del cóctel");
      } finally {
        setLoading(false);
      }
    };
    getCocktailDetails();
  }, [idDrink, location.state]);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value) || 1;
    setQuantity(Math.max(1, newQuantity));
  };

  if (loading) return <p><CoctelSpinner /></p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
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
                <span className="ms-2">{cocktail.price}</span>
              </div>
              <p className="lead">{cocktail.strInstructions}</p>
              <div className="d-flex">
                <input
                  className="form-control text-center me-3"
                  id="inputQuantity"
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min="1"
                  style={{ maxWidth: "3rem" }}
                />
                <Link to='/cart'>
                <button
                  className="btn btn-outline-light flex-shrink-0"
                  type="button" onClick={() => {
                    addToCart(cocktail);
                  }}
                >
                  <i className="bi-cart-fill me-1"></i>
                  Add to cart
                </button>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CoctelesDetalles;