import React, { useState, useEffect, useContext } from 'react'
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export default function CitiesDescription({}) {
    const { store, actions } = useContext(Context);
    const [city, setCities] = useState({})

    const { id } = useParams();
    

    useEffect(() => {
        fetch(process.env.BACKEND_URL + "api/cities/" + id)
          .then((res) => res.json())
          .then((data) => setCities(data))
      }, []);

	return (
        <div>
            <div className='description-container'>
            <img src={city.photo} className='description-pic'/>
            <h1>{city.name}</h1>
            <h2 className='description'>Nation: {city.nation}</h2>
            <h2 className='description'>Hair Color: {city.hair_color}</h2>
            <h2 className='description'>eye Color: {city.eye_color}</h2>
            <h2 className='description'>Age at Death: {city.age_at_death}</h2>
            <h2 className='description'>Notable Traits: {city.notable_traits}</h2>
        </div>
    </div>
	)
}