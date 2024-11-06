import React from "react";
import CocktailList from "./CocktailList";
import HeroProducts from "./HeroProducts";
import SearchHeader from "./SearchSection/SearchHeader";

function Home() {
  return (
    <div style={{ backgroundColor: "var(--primarycolor)" }}>
      <HeroProducts />
      
      <CocktailList />
    </div>
  );
}

export default Home;
