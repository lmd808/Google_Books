import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Pages/home';
import Saved from './components/Pages/saved';
import JumbotronError from './components/Jumbotron/jumbotron404';
import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/saved" component={Saved} />
						<Route component={JumbotronError} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
