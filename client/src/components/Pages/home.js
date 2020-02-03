import React, { Component } from 'react';
import Jumbotron from '../Jumbotron/jumbotron';
import API from '../../js/bookAPI';
import ResultCard from '../ResultCard/results';
import SearchForm from '../SearchForm/search';
import Navbar from '../NavBar/nav';

class Home extends Component {
	// set my intial state
	state = {
		books: [],
		results: [],
		title: ''
	};
	// when components mount load books
	componentDidMount() {
		this.loadBooks();
	}
	// get my current books
	loadBooks = () => {
		API.getBooks()
			.then((res) => {
				this.setState({ books: res.data });
			})
			.catch((err) => {
				throw err;
			});
	};
	// handle my input change
	handleInputChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};
	// handle submit to request books from api
	handleFormSubmit = (event) => {
		event.preventDefault();
		API.getGoogleSearchBooks(this.state.title)
			.then((res) => {
				this.setState({
					results: res.data.items
				});
			})
			.catch((err) => {
				throw err;
			});
	};
	// handle saving my books
	handleSaveBook = (event) => {
		event.preventDefault();
		// get value of book's current id
		const bookID = event.target.getAttribute('data-id');

		const newState = { ...this.state };

		let targetBook = this.state.results.filter((book) => book.id === bookID);

		const newBook = {
			title: targetBook[0].volumeInfo.title,
			author: targetBook[0].volumeInfo.authors,
			description: targetBook[0].volumeInfo.description,
			image: targetBook[0].volumeInfo.imageLinks.thumbnail,
			link: targetBook[0].volumeInfo.infoLink
		};

		if (this.state.books[bookID]) {
			alert(`You already saved that book.`);
			return;
		} else {
			newState.books[bookID] = newBook;
			// console.log('Target:', targetBook[0])

			this.setState(newState);
			// Changes state to now hold saved books in this.state.books
			console.log('Updated this.state:', this.state.books);

			API.saveBook({
				title: targetBook[0].volumeInfo.title,
				author: targetBook[0].volumeInfo.authors,
				description: targetBook[0].volumeInfo.description,
				image: targetBook[0].volumeInfo.imageLinks.thumbnail,
				link: targetBook[0].volumeInfo.infoLink
			});

			console.log(newState.books);
		}
	};

	render() {
		return (
			<div>
				<Navbar />
				<Jumbotron />
				<div className="container">
					<SearchForm handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} />
					<div className="container" id="main-content">
						{this.state.results.map((book) => {
							return (
								<ResultCard
									key={book.id}
									title={book.volumeInfo.title}
									id={book.id}
									link={book.volumeInfo.infoLink}
									author={book.volumeInfo.authors}
									image={book.volumeInfo.imageLinks.thumbnail}
									description={book.volumeInfo.description}
									saveBook={this.handleSaveBook}
								/>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
