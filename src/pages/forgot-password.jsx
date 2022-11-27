import { PageBanner } from "../components/page-banner/page-banner";
import { Container, Row, Col } from "reactstrap";
export const ForgotPassword = () => {
	return (
		<section id="forgot-password">
			<PageBanner title={`Forgot Password`}/>
			<Container>
				<Row>
					<Col xs={12}>
 					</Col>
				</Row>
			</Container>
		</section>
	);
}