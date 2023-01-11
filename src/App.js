import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
	const [color, setColor] = useState('');
	const [isError, setError] = useState(false);
	const [list, setList] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		try {
			let colors = new Values(color).all(10);
			setError(false);
			console.log(colors);
		} catch (error) {
			setError(true);
			console.log(error);
		}
	};

	return (
		<>
			<section className="container">
				<h3>Color Generator</h3>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						value={color}
						onChange={(e) => setColor(e.target.value)}
						className={`${isError ? 'error' : null}`}
					/>
					<button className="btn" type="submit" placeholder="#522d80">
						submit
					</button>
				</form>
			</section>
			<section className="colors">
				{list.map((color, index) => {
					return <SingleColor key={index} {...color} index={index} />;
				})}
			</section>
		</>
	);
}

export default App;
