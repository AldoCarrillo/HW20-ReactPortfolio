import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Import Materialize
import M from 'materialize-css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Memory from './images/cards.png';
import Money from './images/project1.png';
import Team from './images/teamicon.png';

import Weather from './images/weather.png';
import Planner from './images/dayplanner.png';
import Quiz from './images/quiz.png';

class Portfolio extends Component {
	componentDidMount() {
		// Auto initialize all the things!
		M.AutoInit();
	}

	render() {
		return (
			<div>
				<Container id="PortafolioContainer">
					<Row>
						<Col id="h2aboutme">
							<h2>Portfolio APPS</h2>
						</Col>
					</Row>

					<Container>
						<Row>
							<Col>
								<img src={Memory} alt="memoryImage" class="portafolioImage" />
								<a href="https://secure-temple-05084.herokuapp.com/" target="_blank">
									<h4 id="titletext">Memory Game</h4>
								</a>
							</Col>
							<Col>
								<img src={Money} alt="moneyproject" className="portafolioImage" />

								<a href="https://aldocarrillo.github.io/HW7-TheProject1/" target="_blank">
									<h4 id="titletext">Money Tracker</h4>
								</a>
							</Col>
							<Col>
								<img src={Team} alt="teamImage" className="portafolioImage" />
								<a
									href="https://aldocarrillo.github.io/HW10-EmployeeSummary/output/team.html"
									target="_blank"
								>
									<h4 id="titletext">Team Maker</h4>
								</a>
							</Col>
						</Row>
						<Row>
							<Col>
								<img src={Weather} alt="weather" class="portafolioImage" />
								<a
									href="https://aldocarrillo.github.io/HM6-WeatherDashboard/index.html"
									target="_blank"
								>
									<h4 id="titletext">Weather Page</h4>
								</a>
							</Col>
							<Col>
								<img src={Planner} alt="planner" className="portafolioImage" />

								<a
									href="https://aldocarrillo.github.io/HW5-WorkDayScheduler/index.html"
									target="_blank"
								>
									<h4 id="titletext">Day Planner</h4>
								</a>
							</Col>
							<Col>
								<img src={Quiz} alt="quiz" className="portafolioImage" />
								<a href="https://aldocarrillo.github.io/HW4-CodeQuiz/index.html" target="_blank">
									<h4 id="titletext">The Quiz</h4>
								</a>
							</Col>
						</Row>
					</Container>
				</Container>
			</div>
		);
	}
}

export default Portfolio;
