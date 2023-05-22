import React, { useState, useEffect } from 'react'
import AvatarCard from '../component/AvatarCard';
import BendingCard from '../component/BendingCard';
import CharacterCard from '../component/CharacterCard';
import CityCard from '../component/CitiesCard';
import FurryFriendCard from '../component/FurryFriendsCard';

export default function Home() {

	return (
		<div className='home-container'>
			<CharacterCard/>
			<BendingCard/>
			<CityCard/>
			<FurryFriendCard/>
			<AvatarCard/>
		</div>
	)
}