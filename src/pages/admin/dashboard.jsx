import { Container, Row, Col } from "reactstrap";
export const AdminDashboard = () => {
	return (
		<section id="admin-dashboard">
			<Container>
				<Row>
					<Col xs={12} md={6}>
						<h1>Admin Dashboard</h1>
					</Col>
				</Row>
			</Container>
		</section>
	);
}