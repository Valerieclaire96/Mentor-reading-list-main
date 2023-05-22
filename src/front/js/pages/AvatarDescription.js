import React, { useState, useEffect } from 'react'


export default function AvatarDescription() {
    const [avatars, setAvatars] = useState()

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(process.env.BACKEND_URL + "/api/previous_avatars/" + id);
            const data = await res.json();
            const history = useNavigate();
            // console.log("//room objects by id", data);
            setAvatars(data);
        }
        fetchData();
    }, [id]);
	return (
		<div className='description-container'>
            <img src={avatars.photo} className='description-pic'/>
            <h1>{avatars.name}</h1>
            <h2 className='description'>Nation: {avatars.nation}</h2>
            <h2 className='description'>Hair Color: {avatars.hair_color}</h2>
            <h2 className='description'>eye Color: {avatars.eye_color}</h2>
            <h2 className='description'>Age at Death: {avatars.age_at_death}</h2>
            <h2 className='description'>Notable Traits: {avatars.notable_traits}</h2>
        </div>
	)
}