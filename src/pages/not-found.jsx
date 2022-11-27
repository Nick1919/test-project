import { PageBanner } from "../components/page-banner/page-banner";
import { Container, Row, Col } from "reactstrap";
export const NotFound = () => {
	return (
		<section id="not-found">
			<PageBanner title={`Not Found`}/>
			<Container>
				<Row>
					<Col xs={12}>
 					</Col>
				</Row>
			</Container>
		</section>
	);
}