import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


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


    return (
        <div className="d-flex col-10 overflow-auto mt-5 mx-auto" >            
            
            {furryFriends.length ? furryFriends.map((pet, index) => (
                <div className="card col-1" style={{ width: "30rem" }}>
                    {console.log(pet.name, "HERE")}
                    <img src={pet.photo} style={{height: "15rem"}} className="card-img-top" />
                    <div className="card-body d-flex justify-content-between">
                        <div className="card-body-left">
                        <h3 className="card-title">
                            {[pet].name}
                        </h3>
                        <h5 className="card-title ">
                            {pet.species}
                        </h5>
                        </div>
                        <div className="cardBottom">
                        <Link
                                to={`/furry_friends_description/` + pet.id}
                                className="btn btn-outline-primary btn-outline-starwars-1"
                            >
                                Learn More!
                            </Link>
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