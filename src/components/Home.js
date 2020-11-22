import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Import Materialize
import M from 'materialize-css';
import NavBar from './NavBar';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

import Footer from './Footer';

class Home extends Component {
	componentDidMount() {
		// Auto initialize all the things!
		M.AutoInit();
	}

	render() {
		return (
			<div>
				<Router>
					<NavBar />
					<Switch>
						<Route path="/" exact component={About} />
						<Route path="/About" component={About} />
						<Route path="/Portfolio" component={Portfolio} />
						<Route path="/Contact" component={Contact} />
					</Switch>
				</Router>

				<Footer />
			</div>
		);
	}
}

export default Home;
