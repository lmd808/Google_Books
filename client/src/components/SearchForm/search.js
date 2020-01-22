import React from 'react';

function SearchForm(props) {
	return (
		<div id="search-form" className="text-center">
			<input
				className="form-control"
				name="title"
				placeholder="Search for a book..."
				type="text"
				onChange={props.handleInputChange}
			/>
			<br />
			<button className="btn btn-block btn-primary" onClick={props.handleFormSubmit} type="submit">
				{' '}
				Search
			</button>
			<br />
		</div>
	);
}

export default SearchForm;
