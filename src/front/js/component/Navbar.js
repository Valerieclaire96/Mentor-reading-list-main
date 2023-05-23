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
    <nav className="navbar">
      <Link to="/">
        <span
          style={{ marginLeft: "4rem", color: "gold" }}
          className="navbar-brand mb-0 h1"
        >
          {/* <img  className="logo" src={Logo}></img> */}
        </span>
      </Link>
      <div style={{ marginRight: "4rem" }} className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
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