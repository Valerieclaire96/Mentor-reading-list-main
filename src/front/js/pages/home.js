import React, { useState, useEffect } from 'react'
import Card from '../component/Card'

export default function Home(props) {
	const [characters, setCharacters] = useState([])
	const [bendingTypes, setBendingTypes] = useState([])
	const [cities, setCities] = useState([])
	const [furryFriends, setFurryFriends] = useState([])
	const [previousAvatars, setPreviousAvatars] = useState([])

	useEffect(() => {
		if (
			JSON.parse(localStorage.getItem("characters")) &&
			JSON.parse(localStorage.getItem("bending_types")) &&
			JSON.parse(localStorage.getItem("cities")) &&
			JSON.parse(localStorage.getItem("furry_friends")) &&
			JSON.parse(localStorage.getItem("previous_avatars"))
		) {
			setCharacters(JSON.parse(localStorage.getItem("characters")));
			setBendingTypes(JSON.parse(localStorage.getItem("bending_types")));
			setCities(JSON.parse(localStorage.getItem("cities")));
			setFurryFriends(JSON.parse(localStorage.getItem("furry_friends")));
			setPreviousAvatars(JSON.parse(localStorage.getItem("previous_avatars")));
		} else {
			fetch(process.env.BACKEND_URL + "/api/characters")
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					setCharacters(data.results);
					localStorage.setItem("characters", JSON.stringify(data.results));
				});
			fetch(process.env.BACKEND_URL + "/api/bending_types")
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					setBendingTypes(data.results);
					localStorage.setItem("bending_types", JSON.stringify(data.results));
				});
			fetch(process.env.BACKEND_URL + "/api/cities")
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					setCities(data.results);
					localStorage.setItem("cities", JSON.stringify(data.results));
				});
			fetch(process.env.BACKEND_URL + "/api/furry_friends")
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					setFurryFriends(data.results);
					localStorage.setItem("furry_friends", JSON.stringify(data.results));
				});
			fetch(process.env.BACKEND_URL + "/api/previous_avatars")
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					setPreviousAvatars(data.results);
					localStorage.setItem("previous_avatars", JSON.stringify(data.results));
				});
		}
	})
	return (
		<div className='home-container'>
			<h2 className='title'>Characters</h2>
			<div className='home-card-container'>
				{characters.length
					? characters.map((character) => {
						return <Card character={character} />;
					})
					: null}
			</div>
			<h2 className='title'>Bending Abilities</h2>
			<div className='home-card-container'>
				{bendingTypes.length
					? bendingTypes.map((bendingType) => {
						return <Card bendingType={bendingType} />;
					})
					: null}
			</div>
			<h2 className='title'>Cities</h2>
			<div className='home-card-container'>
				{cities.length
					? cities.map((city) => {
						return <Card city={city} />;
					})
					: null}
			</div>
			<h2 className='title'>Furry Friends</h2>
			<div className='home-card-container'>
				{furryFriends.length
					? furryFriends.map((furryFriend) => {
						return <Card furryFriend={furryFriend} />;
					})
					: null}
			</div>
			<h2 className='title'>Previous Avatars</h2>
			<div className='home-card-container'>
				{previousAvatars.length
					? previousAvatars.map((avatar) => {
						return <Card avatar={avatar} />;
					})
					: null}
			</div>
		</div>
	)
}