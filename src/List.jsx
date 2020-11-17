import React from 'react'

// accept props here
const List = (props) => {
	const { people } = props
	// Map over prop "people" and display only the names in any way you like
	return people.map((item) => {
		return <p key={item.id}>{item.name}</p>
	})
}

export default List
