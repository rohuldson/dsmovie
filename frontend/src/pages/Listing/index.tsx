import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { BASE_URL } from "utils/requests";
import { MoviePage } from "types/movie";

function Listing() {
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    axios.get(`${BASE_URL}/movies?size=12&page=2`).then((response) => {
      const data = response.data as MoviePage;
      setPageNumber(data.number);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <p>{pageNumber}</p>
      <Pagination />
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
            <MovieCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Listing;
