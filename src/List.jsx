import React from 'react'

// accept props here
const List = (props) => {
	const { people } = props
	// Map over prop "people" and code the right structure

	return people.map((person) => {
		const { id, name, age, image } = person
		return (
			<article key={id} className="person">
				<img src={image} alt={name} />
				<div>
					<h4>{name}</h4>
					<p>{age} years</p>
				</div>
			</article>
		)
	})
}

export default List
