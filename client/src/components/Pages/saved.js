import React, { Component } from 'react';
import Jumbotron from '../Jumbotron/jumbotron';
import API from '../../js/bookAPI';
import ResultCard from '../ResultCard/results';
import NavBar from '../NavBar/nav';
import Navbar from '../NavBar/nav';

class Saved extends Component {
	state = {
		results: []
	};

	componentDidMount() {
		API.getBooks()
			.then((res) => {
				this.setState({ results: res.data });
			})
			.catch((err) => {
				throw err;
			});
	}
	// handle the deletion of a book from my saved array
	handleDeleteBook = (event) => {
		event.preventDefault();

		const bookID = event.target.getAttribute('data-id');

		const newState = { ...this.state };

		newState.results = this.state.results.filter((book) => book._id !== bookID);
		// Filters out any books with the matching target id

		API.deleteBook(bookID)
			.then((response) => {
				this.setState(newState);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	render() {
		return (
			<div>
				<Navbar />
				<Jumbotron />
				<div className="container">
					<h3>My Books </h3>
					<div className="container-fluid" id="main-content">
						{/* map out my array of results */}
						{this.state.results.map((book) => {
							return (
								// result card will have the following fields populating it
								<ResultCard
									key={book._id}
									title={book.title}
									id={book._id}
									link={book.link}
									author={book.authors}
									image={book.image}
									description={book.description}
									deleteBook={this.handleDeleteBook}
								/>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default Saved;
