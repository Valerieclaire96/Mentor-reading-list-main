import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


export default function BendingCard() {
    const [bending, setBending] = useState([])

    console.log(bending)
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(process.env.BACKEND_URL + "/api/bending_types");
            const data = await res.json();
            setBending(data);
        }
        fetchData();
    }, []);

    const learnMoreDescription = () => {
        history(`/description/${bending.id}`);
    };

    return (
      <div className="d-flex col-10 overflow-auto mt-5 mx-auto" >            
            
            {bending.length ? bending.map((bendingType, index) => (
                <div className="card col-1" style={{ width: "18rem" }}>
                    {console.log(bendingType.name, "HERE")}
                    <img src={bendingType.photo} className="card-img-top" />
                    <div className="card-body">
                        <h5 style={{ height: "60px" }} className="card-title mt-2">
                            {bendingType.name}
                        </h5>
                        <h5 style={{ height: "60px" }} className="card-title mt-2">
                            {bendingType.nation_relation_sub}
                        </h5>
                        <h4>{bendingType.nation_relation}</h4>
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