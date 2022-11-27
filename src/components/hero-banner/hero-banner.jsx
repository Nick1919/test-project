import { Container, Row, Col, Button } from "reactstrap";
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
								<Button type="button" color="primary" outline={true}>
									Learn more
								</Button>
							</Link>
							<Link to="/login" className="">
								<Button type="button" color="primary" className="">
									Get started
								</Button>
							</Link>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}