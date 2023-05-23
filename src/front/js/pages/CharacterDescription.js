import React, { useState, useEffect, useContext } from 'react'
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export default function CharacterDescription({}) {
    const { store, actions } = useContext(Context);
    const [character, setCharacter] = useState({})

    const { id } = useParams();
    

    useEffect(() => {
        fetch(process.env.BACKEND_URL + "api/characters/" + id)
          .then((res) => res.json())
          .then((data) => setCharacter(data))
      }, []);

	return (
        <div>
            <div className='description-container'>
            <img src={character.photo} className='description-pic'/>
            <h1>{character.name}</h1>
            <h2 className='description'>Nation: {character.nation}</h2>
            <h2 className='description'>Hair Color: {character.hair_color}</h2>
            <h2 className='description'>eye Color: {character.eye_color}</h2>
            <h2 className='description'>Age at Death: {character.age_at_death}</h2>
            <h2 className='description'>Notable Traits: {character.notable_traits}</h2>
        </div>
    </div>
	)
}