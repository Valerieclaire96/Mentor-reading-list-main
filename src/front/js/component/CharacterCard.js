import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



export default function CharacterCard() {
    const [characters, setCharacters] = useState([]);
    const { store, actions } = useContext(Context);
    const [liked, setLiked] = useState(false);


    console.log(characters)
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(process.env.BACKEND_URL + "/api/characters");
            const data = await res.json();
            setCharacters(data);
        }
        fetchData();
    }, []);


    const handleFavorites = (item) => {
        if(store.favorites.includes(item)){
            actions.removeFavorites(item)
        }
        else {
            actions.addFavorites(item)
        }
    }
    return (
      <div className="d-flex col-10 overflow-auto mt-5 mx-auto cards" >            
            {characters?.map((character, index) => (
                <div className="card col-1" style={{ width: "30rem" }}>
                    {console.log(characters.name, "HERE")}
                    <img src={character.photo} style={{height: "15rem"}} className="card-img-top" />
                    <div className="card-body d-flex justify-content-between">
                      <div className="card-body-left">
                        <h3 className="card-title">
                            {character.name}
                        </h3>
                        <h5 className="card-title">
                            {character.nationality}
                        </h5>
                        </div>
                        <div className="cardBottom">
                        <Link
                                to={`/character_description/` + character.id}
                                className="btn btn-light text-dark"
                            >
                                Learn More!
                            </Link>
                            <button
                                onClick={() => {
                                    handleFavorites(character);
                                }}
                                className="favorites-button"
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
