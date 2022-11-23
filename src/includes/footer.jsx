import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./footer.scss";

export const Footer = () => {
	return (
		<footer>
			<section id="footer">
				<Container>
					<Row>
						<Col xs={12} md={6} lg={3}>
							<h1 className="logo-container">Logo</h1>
						</Col>
						<Col xs={12} md={6} lg={3}>
							<div className="page-redirections">
								<h4 className="list-title">Lorem, ipsum.</h4>
								<ul className="list-container">
									<li className="list-item">
										<Link to="#">Lorem, ipsum dolor.</Link>
									</li>
									<li className="list-item">
										<Link to="#">Lorem, ipsum dolor.</Link>
									</li>
									<li className="list-item">
										<Link to="#">Lorem, ipsum dolor.</Link>
									</li>
								</ul>
							</div>
						</Col>
						<Col xs={12} md={6} lg={3}>
							<div className="page-redirections">
								<h4 className="list-title">Lorem, ipsum.</h4>
								<ul className="list-container">
									<li className="list-item">
										<Link to="#">Lorem, ipsum dolor.</Link>
									</li>
									<li className="list-item">
										<Link to="#">Lorem, ipsum dolor.</Link>
									</li>
									<li className="list-item">
										<Link to="#">Lorem, ipsum dolor.</Link>
									</li>
								</ul>
							</div>
						</Col>
						<Col xs={12} md={6} lg={3}>
							<div className="page-redirections">
								<h4 className="list-title">Lorem, ipsum.</h4>
								<ul className="list-container">
									<li className="list-item">
										<Link to="#">Lorem, ipsum dolor.</Link>
									</li>
									<li className="list-item">
										<Link to="#">Lorem, ipsum dolor.</Link>
									</li>
									<li className="list-item">
										<Link to="#">Lorem, ipsum dolor.</Link>
									</li>
								</ul>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</footer>
	);
}