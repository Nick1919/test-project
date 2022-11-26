import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

export const HeroBanner = () => {
	return (
		<section id="hero-banner">
			<Container>
				<Row>
					<Col xs={12}>
						<h1 className="banner title">Lorem ipsum dolor sit amet <br/> Amet consectetur.</h1>
						<span className="banner-subtitle">Lorem ipsum dolor sit amet consectetur.</span>
					</Col>
					<Col xs={12}>
						<div className="button-container">
							<Link to="/about" className="">
								<button type="button" className="primary">
									Learn more
								</button>
							</Link>
							<Link to="/login" className="">
								<button type="button" className="primary outline">
									Get started
								</button>
							</Link>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}