import React, { useState } from 'react'
import data from './data'
import List from './List'
function App() {
	// create a state variable here
	const [people, setPeople] = useState(data)

	// this should clear all records
	function clearAllRecords() {
		setPeople([])
	}
	return (
		<main>
			<section className="container">
				<h3>{people.length} birthdays today</h3>
				<List people={people} />
				<button onClick={clearAllRecords}>Clear All</button>
			</section>
		</main>
	)
}

export default App
