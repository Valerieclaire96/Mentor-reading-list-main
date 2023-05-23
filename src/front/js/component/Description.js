import React, { useState, useEffect, useContext } from 'react'
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export default function Description(id) {
    const { store, actions } = useContext(Context);
    const [avatars, setAvatars] = useState([])


    return (
        <div>
            <div className='description-container'>
                <img src={avatars.photo} className='description-pic' />
                <h1>{avatars.name}</h1>
                <h2 className='description'>Nation: {avatars.nation}</h2>
                <h2 className='description'>Hair Color: {avatars.hair_color}</h2>
                <h2 className='description'>eye Color: {avatars.eye_color}</h2>
                <h2 className='description'>Age at Death: {avatars.age_at_death}</h2>
                <h2 className='description'>Notable Traits: {avatars.notable_traits}</h2>
            </div>
        </div>
    )
}