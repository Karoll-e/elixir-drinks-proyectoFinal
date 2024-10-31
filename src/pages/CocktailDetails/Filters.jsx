import React, { useState } from "react";

const Filters = ({ onFilterChange }) => {
  const [alcoholic, setAlcoholic] = useState("");
  const [category, setCategory] = useState("");
  const [glassType, setGlassType] = useState("");
  const [ingredient, setIngredient] = useState("");

  const handleFilterChange = () => {
    onFilterChange({
      alcoholic,
      category,
      glassType,
      ingredient,
    });
  };

  return (
    <div>
      <label>
        Alcoholic:
        <select value={alcoholic} onChange={(e) => setAlcoholic(e.target.value)}>
          <option value="">All</option>
          <option value="Alcoholic">Alcoholic</option>
          <option value="Non_Alcoholic">Non-Alcoholic</option>
        </select>
      </label>

      <label>
        Category:
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="e.g. Ordinary Drink"
        />
      </label>

      <label>
        Glass Type:
        <input
          type="text"
          value={glassType}
          onChange={(e) => setGlassType(e.target.value)}
          placeholder="e.g. Cocktail glass"
        />
      </label>

      <label>
        Ingredient:
        <input
          type="text"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          placeholder="e.g. Tequila"
        />
      </label>

      <button onClick={handleFilterChange}>Apply Filters</button>
    </div>
  );
};

export default Filters;
