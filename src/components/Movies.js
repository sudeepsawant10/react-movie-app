import React from "react";
import { useGlobalContext } from "../Context";
import { NavLink } from "react-router-dom";

const Movies = () => {
  // consumer
  const { movies } = useGlobalContext();
  return (
    <div>
      {movies.map((currMovie) => {
        const { imdbID, Title, Poster } = currMovie;
        return (
          <div>
            <div className="card" style={{ width: "18rem" }}>
              <img src={Poster} className="card-img-top" alt={imdbID} />
              <div className="card-body">
                <h5 className="card-title">CardTitle</h5>
                <p></p>
                <a href={Poster} className="btn btn-primary">
                  Go somewhre
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Movies;
// return (
//   <NavLink to={`movie/${imdbID}`} key={imdbID}>
//     <div className="card">
//       <div className="card-info">
//         <h2>{Title}</h2>
//         <img src={Poster} alt={imdbID} />
//       </div>
//     </div>
//   </NavLink>
// );
