import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


export default function CitiesCard() {
    const [cities, setCities] = useState([])

    console.log(cities)
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(process.env.BACKEND_URL + "/api/cities");
            const data = await res.json();
            setCities(data);
        }
        fetchData();
    }, []);

    const learnMoreDescription = () => {
        history(`/description/${cities.id}`);
    };

    return (
      <div className="d-flex col-10 overflow-auto mt-5 mx-auto" >            
            
            {cities.length ? cities.map((city, index) => (
                <div className="card col-1" style={{ width: "18rem" }}>
                    {console.log(city.name, "HERE")}
                    <img src={city.photo} className="card-img-top" />
                    <div className="card-body">
                        <h5 style={{ height: "60px" }} className="card-title mt-2">
                            {city.name}
                        </h5>
                        <h5 style={{ height: "60px" }} className="card-title mt-2">
                            {city.nation}
                        </h5>
                        <div className="cardBottom">
                            <button onClick={learnMoreDescription} className="btn btn-secondary">
                                Learn More
                            </button>
                            {/* <button
              onClick={(e) => handleClick(e)}
              className={activeFav ? "fas fa-heart" : "far fa-heart"}
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
              }}
            ></button> */}
                        </div>
                    </div>
                </div>
            )) : null}
        </div>
    )
  }