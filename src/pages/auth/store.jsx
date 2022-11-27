import { PageBanner } from "../../components/page-banner/page-banner";
import { Container, Row, Col } from "reactstrap";
export const Store = () => {
	return (
		<section id="store">
			<PageBanner title={`Store`}/>
			<Container>
				<Row>
					<Col xs={12}>
 					</Col>
				</Row>
			</Container>
		</section>
	);
}