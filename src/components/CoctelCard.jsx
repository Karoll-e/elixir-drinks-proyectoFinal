import React from 'react'
import './CoctelCard.css'
import { useCart } from '../pages/Shopping-cart/Hooks/useCart';

// function CoctelCard({cocktail}) {
//   return (
//     <div className="card" style={{ width: "18rem" }}>
//       <img src={cocktail.strDrinkThumb} className="card-img-top" alt={cocktail.strDrink} />
//       <div className="card-body">
//         <h5 className="card-title">{cocktail.strDrink}</h5>
//         <p className="card-text">Price: {cocktail.price ? cocktail.price : "N/A"}</p>
//         <a href="#" className="btn btn-primary">View Details</a>
//       </div>
//     </div>
//   );
// }

// export default CoctelCard



const CoctelCard = ({cocktail}) => {

  const {addToCart} = useCart()
  return (
    <div className="cont">
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
            <span className="product-card__price">{cocktail.price ? cocktail.price : "N/A"}</span>
            <button className="product-card__btn" onClick={() => addToCart(cocktail)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoctelCard;
