import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import defaultImage from '../../static/assets/images/hero-banner-background.jpg';

export const PageBanner = ({children, redirections, backgroundImage = defaultImage, title }) => {
	return (
		<section id="page-banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
			<Container>
				<Row>
					<Col xs={12}>
						{ children ?? <> <h1 className="title">{title}</h1> </> }
					</Col>
					<Col xs={12}>
						<div className="button-container">
							{ !redirections ?? redirections.map( redirection => 
								<>
									<Link to={ redirection.link } className="" key={redirection.id}>
										<Button type="button" color={ redirection.color ?? 'primary' } outline={ redirection.outline ?? false }>
											{ redirection.title }
										</Button>
									</Link>
								</> )
							}
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}