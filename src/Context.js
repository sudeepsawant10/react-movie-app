// context(warehouse)
// Provider
// Consumer

import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const API_URL = `https://www.omdbapi.com/?apikey=fd8e9906&s=titanic`;

// Provider function
const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState({ show: false, msg: "" });

  const getMovies = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      //   console.log(data.Response);
      //   console.log(data.Search);
      if (data.Response === "True") {
        setMovies(data.Search);
        setIsLoading(false);
      } else {
        setIsError({ show: true, msg: data.error });
      }
    } catch (error) {
      console.log(error);
    }
  };
  // ON FIRST PAGE LOAD
  useEffect(() => {
    getMovies(API_URL);
  }, []);
  return (
    <AppContext.Provider value={{ isLoading, movies, isError }}>
      {children}
    </AppContext.Provider>
  );
};

// Global custom hooks
const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext, useGlobalContext };
