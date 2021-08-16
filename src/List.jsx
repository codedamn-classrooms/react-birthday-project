import React from 'react'

// accept props here
const List = (props) => {
	const { people } = props
	// Map over prop "people" and code the right structure

	return people.map((person) => {
		const { id, name, age, image } = person
		return <article />
	})
}

export default List
