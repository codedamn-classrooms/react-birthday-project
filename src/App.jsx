import React, { useState } from 'react'
import data from './data'
import List from './List'
function App() {
	// create a state variable here

	// this should clear all records
	function clearAllRecords() {}
	return (
		<main>
			<section className="container">
				{/* change this to state variable data */}
				<h3>{[].length} birthdays today</h3>
				<List people={[]} />
				<button onClick={clearAllRecords}>Clear All</button>
			</section>
		</main>
	)
}

export default App
