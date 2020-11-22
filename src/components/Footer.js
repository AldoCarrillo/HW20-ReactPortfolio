import React, { Component } from 'react';

// Import Materialize
import M from 'materialize-css';

class Footer extends Component {
	componentDidMount() {
		// Auto initialize all the things!
		M.AutoInit();
	}

	render() {
		return (
			<footer className="page-footer teal">
				<div className="row">
					<div className="col s12 m6 16">
						<h6>Aldo Carrillo - Portfolio</h6>
					</div>
				</div>

				<div className="footer-copyright">
					<div className="container">
						© 2020 Copyright Information
						<a className="grey-text text-lighten-4 right" href="#!">
							GitHub
						</a>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
