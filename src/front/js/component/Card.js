import React, { useContext, useState, useEffect } from 'react'
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


const defaultInfo = {
    id: null,
    name: "Aang",
    nationality: "Air Nation",
    photo: "https://occ-0-33-1348.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABWa6GUEhbPN67UWEf3hf9cgJqo-ChmjDXtoTDyrkoxTL9V1HexawqkAmBR13c-sxJAK83eB5NiB3dn2tkBATvfh1HzXnc6B1kuFw.jpg?r=67a"
}
export default function Card(props) {
    const { store, actions } = useContext(Context);
    const history = useNavigate();

  

    const learnMoreDescription = () => {
        if (props.characters) {
            actions.setItem(props.characters);
            history(`description/${props.character.id}`)
        } else if (props.bending_types) {
            actions.setItem(props.bending_types);
            history(`description/${props.bending_types.id}`)
        } else if (props.cities) {
            actions.setItem(props.cities);
            history(`description/${props.citys.id}`)
        } else if (props.furry_frineds) {
            actions.setItem(props.furry_frineds);
            history(`description/${props.furry_frineds.id}`)
        } else if (props.previous_avatars) {
            actions.setItem(props.previous_avatars);
            history(`description/${props.previous_avatars.id}`)
        }
    }
    return (
        <div className='card-container'>
            {props.character ? (
                <div>
                <h3 className='card-name'>{props.characters.name}</h3>
                <img src={props.character.photo}/>
                </div>
            ) : props.bending_type ? (
                <div>
                <h3 className='card-name'>{props.bending_types.name}</h3>
                <img src={props.bending_type.photo}/>
                </div>
            ) : props.cities ? (
                <div>
                <h3 className='card-name'>{props.cities.name}</h3>
                <img src={props.cities.photo}/>
                </div>
            ) : props.furry_frineds ? (
                <div>
                <h3 className='card-name'>{props.furry_frineds.name}</h3>
                <img src={props.furry_frineds.photo}/>
                </div>
            ) : props.previous_avatars ? (
                <div>
                <h3 className='card-name'>{props.previous_avatars.name}</h3>
                <img src={props.previous_avatars.photo}/>
                </div>
            ) : null
            }
            <div className='btn-container'>
                <button onClick={learnMoreDescription} className='btn btn-secondary'>Learn More</button>
            </div>
        </div>
    )
}