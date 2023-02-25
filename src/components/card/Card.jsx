import React from 'react'
import CardTitle from '../cardTitle/CardTitle.jsx'
import CardImage from '../cardImage/CardImage'
import CardInfo from '../cardInfo/CardInfo'
import './Card.css'

function Card({ titleProp, infoProp, imageProp, onClick }) {
	return (
		<div className='card' onClick={onClick} >
			<div className='card-body'>
				{/* Card */}
				<CardTitle titleProp2={titleProp} />
				<CardImage imageProp2={imageProp} />
				<CardInfo infoProp2={infoProp} />
			</div>
		</div>
	)
}

export default Card
