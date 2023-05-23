import React, { useState, useEffect, useContext } from 'react'
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export default function FurryFriendsDescription({ }) {
    const { store, actions } = useContext(Context);
    const [pet, setFurryFriends] = useState({})

    const { id } = useParams();


    useEffect(() => {
        fetch(process.env.BACKEND_URL + "/api/furry_friends/" + id)
            .then((res) => res.json())
            .then((data) => setFurryFriends(data))
    }, []);

    return (
        <div>
            <div className='description-container d-flex justify-content-between mx-auto dContainer my-5'>
                <img src={pet.photo} className='description-pic' style={{ height: "30rem", width: "30rem", borderRadius: "14px 0 0 14px" }} />
                <div className='mx-5 my-auto'>
                    <h1>{pet.name}</h1>
                    <h2 className='description'>Nation: {pet.nation}</h2>
                    <h2 className='description'>Hair Color: {pet.hair_color}</h2>
                    <h2 className='description'>eye Color: {pet.eye_color}</h2>
                    <h2 className='description'>Age at Death: {pet.age_at_death}</h2>
                    <h2 className='description'>Notable Traits: {pet.notable_traits}</h2>
                </div>
            </div>
        </div>
    )
}