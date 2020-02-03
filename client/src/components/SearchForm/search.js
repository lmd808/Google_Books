import React from 'react';

function SearchForm(props) {
	return (
		<div className="container">
			<div className="row">
				<div className="col-6 - offset-3">
					<div id="search-form" className=" container text-center">
						<input
							className="form-control"
							name="title"
							placeholder="Find A New Book..."
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
				</div>
			</div>
		</div>
	);
}

export default SearchForm;
