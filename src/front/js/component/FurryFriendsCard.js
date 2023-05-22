import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


export default function FurryFriendsCard() {
    const [furryFriends, setFurryFriends] = useState([])

    console.log(furryFriends)
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(process.env.BACKEND_URL + "/api/furry_friends");
            const data = await res.json();
            setFurryFriends(data);
        }
        fetchData();
    }, []);

    const learnMoreDescription = () => {
        history(`/description/${furryFriends.id}`);
    };

    return (
        <div className="d-flex col-10 overflow-auto mt-5 mx-auto" >            
            
            {furryFriends.length ? furryFriends.map((pet, index) => (
                <div className="card col-1" style={{ width: "18rem" }}>
                    {console.log(pet.name, "HERE")}
                    <img src={pet.photo} className="card-img-top" />
                    <div className="card-body">
                        <h5 style={{ height: "60px" }} className="card-title mt-2">
                            {[pet].name}
                        </h5>
                        <h5 style={{ height: "60px" }} className="card-title mt-2">
                            {pet.species}
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