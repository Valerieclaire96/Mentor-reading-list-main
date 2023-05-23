import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export default function Navbar() {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const { store, actions } = useContext(Context);

  useEffect(() => {
    console.log("favorites", store.favorites);
    setFavoriteItems(store.favorites);
  }, [store.favorites]);

  return (
    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="/">
        <img src="https://occ-0-2794-1001.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABU1-JRbb0a_bBhPJeiAAGzO4WD7ZOmd0OvHlIhU8ybxBzHxmwuC2qQF4mVAGzQi0ulXc-Q0k_P4KykHJ73o_pcGdAEydHX-Y9VErmh-rvRLj.png?r=2ca" width="100" height="35" className="logo" />
      </a>
      <div style={{ marginRight: "7rem" }} className="dropdown">
        <button
          className="btn btn-light text-dark dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favorites
        </button>
        <ul className="dropdown-menu">
          {favoriteItems.length ? (
            favoriteItems.map((item) => {
              return (
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  className="dropdown-item"
                >
                  {item.name}
                  <button
                    onClick={() => {
                      actions.removeFavorite(item);
                    }}
                  >
                    X
                  </button>{" "}
                </li>
              );
            })
          ) : (
            <li>
              No favorites.
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};