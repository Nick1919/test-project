import { Container, Row, Col } from "reactstrap";
import { Banner } from "../components/banner/banner";

export const Landing = () => {
	return (
		<section id="landing">
			<Banner/>
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