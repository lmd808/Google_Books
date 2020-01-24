import React from 'react';
import Navbar from '../NavBar/nav';

function Jumbotron() {
	return (
		<div>
			<Navbar />
			<div className="jumbotron jumbotron-fluid bg-secondary text-white text-center">
				<span className="display-3">Google Book Search</span>
			</div>
		</div>
	);
}

export default Jumbotron;
