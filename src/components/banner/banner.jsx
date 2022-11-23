import { Container, Row, Col } from "reactstrap";
import "./banner.scss";

export const Banner = () => {
	return (
		<section id="banner">
			<Container>
				<Row>
					<Col xs={12}>
						<h1>Banner</h1>
					</Col>
				</Row>
			</Container>
		</section>
	);
}