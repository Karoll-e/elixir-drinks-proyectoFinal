import React from 'react'
import './CoctelCard.css'
import { useNavigate } from 'react-router-dom';

const CoctelCard = ({cocktail}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/cocktail/${cocktail.idDrink}`)
    ;
  };

  return (
    <div className="cont" onClick={handleClick}>
      <div className="product-card">
        <div className="product-card__image">
          <img
            src={cocktail.strDrinkThumb}
            alt={cocktail.strDrink}
          />
        </div>
        <div className="product-card__info">
          <h2 className="product-card__title text-truncate mb-3">{cocktail.strDrink}</h2>
          <div className="product-card__price-row">
            <span className="product-card__price">{cocktail.price ? cocktail.price : ""}</span>
            <button className="product-card__btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoctelCard;
