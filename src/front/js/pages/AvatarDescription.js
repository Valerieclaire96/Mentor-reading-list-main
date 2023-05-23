import React, { useState, useEffect, useContext } from 'react'
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export default function AvatarDescription({ }) {
    const { store, actions } = useContext(Context);
    const [avatar, setAvatar] = useState({})

    const { id } = useParams();


    useEffect(() => {
        fetch(process.env.BACKEND_URL + "/api/previous_avatars/" + id)
            .then((res) => res.json())
            .then((data) => setAvatar(data))
    }, []);

    return (
        <div>
            <div className='description-container d-flex justify-content-between mx-auto dContainer my-5'>
                <img src={avatar.photo} className='description-pic' style={{ height: "30rem", width: "30rem",borderRadius: "14px 0 0 14px" }} />
                <div className='mx-5 my-auto'>
                    <h1>{avatar.name}</h1>
                    <h2 className='description'>Nation: {avatar.nation}</h2>
                    <h2 className='description'>Hair Color: {avatar.hair_color}</h2>
                    <h2 className='description'>eye Color: {avatar.eye_color}</h2>
                    <h2 className='description'>Age at Death: {avatar.age_at_death}</h2>
                    <h2 className='description'>Notable Traits: {avatar.notable_traits}</h2>
                </div>
            </div>
        </div>
    )
}