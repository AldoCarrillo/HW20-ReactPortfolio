import React, { Component } from 'react';

// Import Materialize
import M from 'materialize-css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import logo from './images/aboutme.png';

class About extends Component {
	componentDidMount() {
		// Auto initialize all the things!
		M.AutoInit();
	}

	render() {
		return (
			<div>
				<div class="container" id="InfoContainer">
					<div className="row">
						<div className="col-md-12" id="h2aboutme">
							<h2>About Me</h2>
						</div>
					</div>

					<div className="row">
						<div className="col-md-4" id="aboutmeImage">
							<img src={logo} alt="Logo" className="imgAboutme" />
						</div>

						<div className="col-md-6" id="aboutmetext">
							<a>
								My name is Aldo Carrillo from Tijuana, Mexico. I am a Computer Programmer, graduated
								form Universidad of Baja California, Tijuana, Mexico. I live in San Diego since 2015. I
								am currently studying in University of California In San Diego as a web Developer. I
								Like computer science, I like the technology.
							</a>
							<br />
							<br />
							<div>
								<a>
									My hobbies are very varied:
									<ul>
										<li>I like play video games.</li>
										<li>I like to go off road.</li>
										<li>I like play the drums set.</li>
										<li>I like watch movies.</li>
										<li>I like football soccer.</li>
									</ul>
								</a>
							</div>
						</div>
					</div>

					<div id="profileLinks">
						<p>
							LinkedIn :{' '}
							<a href="https://www.linkedin.com/in/aldo-carrillo-b69116a5" target="_blank">
								{' '}
								Aldo Carrillo LinkedIn
							</a>{' '}
						</p>

						<p>
							Git Hub :{' '}
							<a href="https://github.com/AldoCarrillo" target="_blank">
								{' '}
								Aldo Carrillo Github
							</a>{' '}
						</p>
						<p>
							Resume PDF :{' '}
							<a
								href="https://drive.google.com/file/d/1EgKjI2P9mJ_Q_Ex2G6in2Tfo0OBVr_n2/view?usp=sharing"
								target="_blank"
							>
								{' '}
								Resume Link
							</a>{' '}
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
