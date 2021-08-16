import React, { useState } from 'react'
import data from './data'
import List from './List'
function App() {
	return (
		<main>
			<section className="container">
				{/* Make change to "0" here */}
				<h3>0 birthdays today</h3>
				{/* pass data to list component */}
				<List />
			</section>
		</main>
	)
}

export default App