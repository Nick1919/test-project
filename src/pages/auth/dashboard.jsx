import { PageBanner } from "../../components/page-banner/page-banner";
import { Container, Row, Col } from "reactstrap";
export const Dashboard = () => {
	return (
		<section id="dashboard">
			<PageBanner title={`Dashboard`}/>
			<Container>
				<Row>
					<Col xs={12}>
 					</Col>
				</Row>
			</Container>
		</section>
	);
}