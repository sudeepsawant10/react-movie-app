import React, { useContext } from "react";
import { AppContext } from "../Context";
import Movies from "./Movies";
import Search from "./Search";
const Home = () => {
  // consumer consuming context
  //   const name = useContext(AppContext);

  return (
    <div>
      <Search />
      <Movies />
    </div>
  );
};

export default Home;
