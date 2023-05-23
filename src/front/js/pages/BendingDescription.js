import React, { useState, useEffect, useContext } from 'react'
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export default function BendingDescription({ }) {
    const { store, actions } = useContext(Context);
    const [bending, setBending] = useState({})

    const { id } = useParams();


    useEffect(() => {
        fetch(process.env.BACKEND_URL + "/api/bending_types/" + id)
            .then((res) => res.json())
            .then((data) => setBending(data))
    }, []);

    return (
        <div>
            <div className='description-container d-flex justify-content-between mx-auto dContainer my-5'>
                <img src={bending.photo} className='description-pic' style={{ height: "30rem", width: "30rem",borderRadius: "14px 0 0 14px" }} />
                <div className='mx-5 my-auto'>
                    <h1>{bending.name}</h1>
                    <h2 className='description'>Nation: {bending.nation}</h2>
                    <h2 className='description'>Hair Color: {bending.hair_color}</h2>
                    <h2 className='description'>eye Color: {bending.eye_color}</h2>
                    <h2 className='description'>Age at Death: {bending.age_at_death}</h2>
                    <h2 className='description'>Notable Traits: {bending.notable_traits}</h2>
                </div>
            </div>
        </div>
    )
}