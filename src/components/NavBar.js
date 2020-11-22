import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import Materialize
import M from 'materialize-css';

import './NavBar.css';

class NavBar extends Component {
	componentDidMount() {
		// Auto initialize all the things!
		M.AutoInit();
	}

	render() {
		return (
			<div>
				<div className="row">
					<div className="col s12 m12 l12">
						<nav>
							<div className="nav-wrapper teal" height="500px">
								<a href="/" className="brand-logo">
									Aldo Carrillo
								</a>

								<ul id="nav-mobile" className="right hide-on-med-and-down">
									<li>
										<Link to="/About" className="navlink">
											About
										</Link>
									</li>
									<li>
										<Link to="/Portfolio" className="navlink">
											Portfolio
										</Link>
									</li>
									<li>
										<Link to="/Contact" className="navlink">
											Contact
										</Link>
									</li>
								</ul>
							</div>
						</nav>
					</div>
				</div>
			</div>
		);
	}
}

export default NavBar;
