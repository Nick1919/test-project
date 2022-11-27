import { PageBanner } from "../../components/page-banner/page-banner";
import { Container, Row, Col } from "reactstrap";
export const User = () => {
	return (
		<section id="user">
			<PageBanner title={`User`}/>
			<Container>
				<Row>
					<Col xs={12}>
 					</Col>
				</Row>
			</Container>
		</section>
	);
}