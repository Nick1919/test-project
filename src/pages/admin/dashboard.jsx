import { PageBanner } from "../../components/page-banner/page-banner";
import { Container, Row, Col } from "reactstrap";
export const AdminDashboard = () => {
	return (
		<section id="admin-dashboard">
			<PageBanner title={`Admin Dashboard`}/>
			<Container>
				<Row>
					<Col xs={12}>
 					</Col>
				</Row>
			</Container>
		</section>
	);
}