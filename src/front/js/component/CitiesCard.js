import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



export default function CitiesCard() {
    const [cities, setCities] = useState([]);
    const { store, actions } = useContext(Context);
    const [liked, setLiked] = useState(false);


    console.log(cities)
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(process.env.BACKEND_URL + "/api/cities");
            const data = await res.json();
            setCities(data);
            actions.setItem(data)

        }
        fetchData();
    }, []);


    useEffect(() => {
        if (
            store.favorites.find((x) => {
                for (let i in x) {
                    if (cities[i] && cities[i].name === x[i].name) {
                        return true;
                    }
                }
            })
        ) {
            setLiked(true);
        } else {
            setLiked(false);
        }
    }, [store.favorites]);


    return (
      <div className="d-flex col-10 overflow-auto mt-5 mx-auto cards" >            
            
            {cities.length ? cities.map((city, index) => (
                <div className="card col-1" style={{ width: "30rem" }}>
                    {console.log(city.name, "HERE")}
                    <img src={city.photo} style={{height: "15rem"}} className="card-img-top" />
                    <div className="card-body d-flex justify-content-between">
                        <div className="card-body-left">
                        <h5 
                         className="card-title">
                            {city.name}
                        </h5>
                        <h5 
                         className="card-title">
                            {city.nation}
                        </h5>
                        </div>
                        <div className="cardBottom">
                        <Link
                                to={`/cities_description/` + city.id}
                                className="btn btn-light text-dark"
                            >
                                Learn More!
                            </Link>
                            <button
                                onClick={() => {
                                    actions.addFavorite(city);
                                }}
                                className="favorites-button "
                                style={{
                                    background: "transparent",
                                    border: "none",
                                    outline: "none",
                                  }}
                            >
                                ❤️️
                            </button>
                        </div>
                    </div>
                </div>
            )) : null}
        </div>
    )
  }