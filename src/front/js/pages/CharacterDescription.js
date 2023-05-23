import React, { useState, useEffect, useContext } from 'react'
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export default function CharacterDescription({}) {
    const { store, actions } = useContext(Context);
    const [character, setCharacter] = useState({})

    const { id } = useParams();
    

    useEffect(() => {
        fetch(process.env.BACKEND_URL + "/api/characters/" + id)
          .then((res) => res.json())
          .then((data) => setCharacter(data))
      }, []);

	return (
        <div>
            <div className='description-container d-flex justify-content-between mx-auto dContainer my-5'>
            <img src={character.photo} className='description-pic' style={{ height: "30rem", width: "30rem", borderRadius: "14px 0 0 14px"}}/>
            <div className='mx-5 my-auto'>
            <h1>{character.name}</h1>
            <h2 className='description'>Nation: {character.nation}</h2>
            <h2 className='description'>Hair Color: {character.hair_color}</h2>
            <h2 className='description'>eye Color: {character.eye_color}</h2>
            <h2 className='description'>Age: {character.age}</h2>
            <h2 className='description'>Notable Traits: {character.notable_traits}</h2>
        </div>
        </div>
    </div>
	)
}