import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


export default function CharacterCard() {
    const [characters, setCharacters] = useState([])

    console.log(characters)
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(process.env.BACKEND_URL + "/api/characters");
            const data = await res.json();
            setCharacters(data);
        }
        fetchData();
    }, []);

    const learnMoreDescription = () => {
        history(`/description/${characters.id}`);
    };

    return (
      <div className="d-flex col-10 overflow-auto mt-5 mx-auto" >            
            {characters.length ? characters.map((character, index) => (
                <div className="card col-1" style={{ width: "30rem" }}>
                    {console.log(characters.name, "HERE")}
                    <img src={character.photo} className="card-img-top" />
                    <div className="card-body">
                        <h5 style={{ height: "60px" }} className="card-title mt-2">
                            {character.name}
                        </h5>
                        <h5 style={{ height: "60px" }} className="card-title mt-2">
                            {character.nation}
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