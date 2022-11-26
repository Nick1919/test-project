import { Container, Row, Col } from "reactstrap";
import { HeroBanner } from "../components/hero-banner/hero-banner";

export const Landing = () => {
	return (
		<section id="landing">
			<HeroBanner/>
			<Container>
				<Row>
					<Col xs={12}>
						<h1>Landing</h1>
					</Col>
				</Row>
			</Container>
		</section>
	);
}