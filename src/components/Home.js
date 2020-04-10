import React from "react";
import Hero from "./sections/hero";
import MenuPreview from "./sections/menu-preview";
import ShopInfo from "./sections/shop-info";
import NowHiring from "./sections/now-hiring";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <MenuPreview></MenuPreview>
      <ShopInfo></ShopInfo>
      <br />
      <NowHiring></NowHiring>
    </div>
  );
};

export default Home;
