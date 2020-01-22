import React from 'react';
import Navbar from '../NavBar/nav';

function Jumbotron() {
	return (
		<div>
			<Navbar />
			<div className="jumbotron jumbotron-fluid bg-secondary text-white">
				<span className="display-3">
					Google Books: <em>Keep Reading</em>
				</span>
			</div>
		</div>
	);
}

export default Jumbotron;
