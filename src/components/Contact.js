import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

// Import Materialize
import M from 'materialize-css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

class Contact extends Component {
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
							<h2>Contact</h2>
						</Col>
					</Row>

					<Form>
						<Form.Group>
							<Form.Label for="exampleInputEmail1">Name</Form.Label>
							<Form.Control type="text" id="exampleInputEmail1" placeholder="Enter Name" />
						</Form.Group>

						<Form.Group>
							<Form.Label for="exampleInputPassword1">Email</Form.Label>
							<Form.Control type="email" id="exampleInputPassword1" placeholder="Enter Your Email" />
						</Form.Group>

						<Form.Group>
							<Form.Label for="exampleInputPassword1">Message</Form.Label>
							<Form.Control as="textarea" rows={3} />
						</Form.Group>

						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
				</Container>
			</div>
		);
	}
}

export default Contact;
