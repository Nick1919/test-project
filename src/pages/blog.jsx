import { PageBanner } from "../components/page-banner/page-banner";
import { Container, Row, Col } from "reactstrap";

export const Blog = () => {
	return (
		<section id="blog">
			<PageBanner title={`Blog`}/>
			<Container>
				<Row>
					<Col xs={12}>
					</Col>
				</Row>
			</Container>
		</section>
	);
}