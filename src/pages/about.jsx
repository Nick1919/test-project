import { PageBanner } from "../components/page-banner/page-banner";
import { Container, Row, Col } from "reactstrap";

export const About = () => {
	return (
		<section id="about">
			<PageBanner title={`About`}/>
			<Container>
				<Row>
					<Col xs={12}>
					</Col>
				</Row>
			</Container>
		</section>
	);
}