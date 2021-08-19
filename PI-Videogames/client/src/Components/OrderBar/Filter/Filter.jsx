import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Filter.css";
import {
  setVideogames,
  allGenres,
  filterByGenre,
} from "../../../Actions/Actions";

export function Filter() {
  const [filterGenres, setFilterGenres] = useState("");

  const genres = useSelector((state) => state.genres);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allGenres()); // eslint-disable-next-line
  }, [dispatch]);

  useEffect(() => {
    if (filterGenres?.length > 0) {
      setVideogames();
      return () => {
        filterByGenre(filterGenres);
      };
    }
  }, [filterGenres]);

  const handleChange = (e) => {
    e.preventDefault();
    setFilterGenres();
  };

  return (
    <div className="Filter">
        <div className="selector">
          <div className='text-genres'>
            <span>Genres:</span>
          </div>
            <select onChange={(e) => handleChange(e)}>
                <option value="null">--</option>
                {genres?.map((g, index) => (
                    <option key={index} value={g.name}>
                    {g.name}
                    </option>
                ))}
            </select>
        </div>
    </div>
  );
}
