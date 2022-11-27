import { PageBanner } from "../components/page-banner/page-banner";
import { Container, Row, Col } from "reactstrap";
export const Login = () => {
	return (
		<section id="login">
			<PageBanner title={`Login`}/>
			<Container>
				<Row>
					<Col xs={12}>
 					</Col>
				</Row>
			</Container>
		</section>
	);
}