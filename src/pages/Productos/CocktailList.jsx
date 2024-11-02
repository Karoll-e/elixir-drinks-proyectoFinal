import React, { useState, useEffect } from "react";
import { fetchCocktails } from "../../services/cocktailAPI";
import CoctelCard from "../../components/CoctelCard";
import "./CocktailList.css";
import CoctelSpinner from "../../components/CoctelSpinner";
 import { Search } from "lucide-react";

function CocktailList() {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cocktailNames = ["margarita", "daiquiri", "gin tonic"];

    const getCocktails = async () => {
      try {
        setError(null);
        const cocktailsData = await fetchCocktails(cocktailNames);

        // Validate that we received an array
        if (!Array.isArray(cocktailsData)) {
          throw new Error("Received invalid data format from API");
        }

        // Add a random price between $5 and $20 for each cocktail
        const cocktailsWithPrice = cocktailsData
          .map((cocktail) => {
            // Validate required properties
            if (!cocktail || !cocktail.idDrink) {
              console.warn(
                "Cocktail data missing required properties:",
                cocktail
              );
              return null;
            }

            return {
              ...cocktail,
              price: `$${(Math.random() * (20 - 5) + 5).toFixed(2)}`,
            };
          })
          .filter(Boolean); // Remove any null entries

        setCocktails(cocktailsWithPrice);
      } catch (error) {
        console.error("Error fetching cocktails:", error);
        setError(error.message || "Error al cargar los cócteles");
      } finally {
        setLoading(false);
      }
    };

    getCocktails();
  }, []);

  return (
    <div className="container-fluid p-0">
      <div className="search-header text-center py-5">
        <div className="container">
          <h1 className="mb-2 cursive-font">
            ¿Tienes un coctel favorito?
          </h1>
          <p className="text-white mb-4 fs-5">
            Estamos seguros de que aquí lo encontrarás
          </p>

          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control bg-dark text-white"
                  placeholder="Ej: Mojito"
                  aria-label="Búsqueda de cocteles"
                />
                <button className="btn btn-outline-none" type="button">
                <Search color="white"/>
                </button>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mt-3">
            <div className="col-auto">
              <div className="dropdown me-2">
                <button
                  className="btn btn-outline-light dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  Sabor
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Dulce
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Ácido
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Amargo
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-auto">
              <div className="dropdown">
                <button
                  className="btn btn-outline-light dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  Intensidad
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Suave
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Medio
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Fuerte
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="cocteles-card">
        <div className="container py-5">
          {loading ? (
            <CoctelSpinner />
          ) : error ? (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          ) : !cocktails.length ? (
            <div className="text-center text-white">
              No se encontraron cócteles disponibles.
            </div>
          ) : (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
              {cocktails.map((cocktail) => (
                <div className="col" key={cocktail.idDrink}>
                  <CoctelCard cocktail={cocktail} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CocktailList;
