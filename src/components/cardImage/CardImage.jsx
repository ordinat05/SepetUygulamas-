import React from 'react'
import './CardImage.css'


function CardImage({ imageProp2 }) {
	return (
		<div className='card-image'>
			{/* CardImage */}
			<img src={imageProp2} alt="" />
		</div>
	)
}

export default CardImage
