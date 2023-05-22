import React, { useState, useEffect } from 'react'


export default function AvatarDescription() {
    const [avatars, setAvatars] = useState([])

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(process.env.BACKEND_URL + "/api/previous_avatars");
            const data = await res.json();
            setAvatars(data);
        }
        fetchData();
    }, []);

	return (
        <div>
        {avatars.
            <div className='description-container'>
            <img src={avatar.photo} className='description-pic'/>
            <h1>{avatar.name}</h1>
            <h2 className='description'>Nation: {avatar.nation}</h2>
            <h2 className='description'>Hair Color: {avatar.hair_color}</h2>
            <h2 className='description'>eye Color: {avatar.eye_color}</h2>
            <h2 className='description'>Age at Death: {avatar.age_at_death}</h2>
            <h2 className='description'>Notable Traits: {avatar.notable_traits}</h2>
        </div>
    )): null}
    </div>
	)
}