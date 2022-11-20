import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

export const Header = ({loged, admin}) => {
	return (
		<header>
			<section id="header">
				<Container>
					<Row>
						<Col xs={12} md={6}>
							<h1>Header</h1>
						</Col>
						<Col xs={12} md={6}>
							<nav>
								<ul className="d-flex justify-content-between">
									<li> <Link to="/"			> 		Landing 		</Link> </li>
									<li> <Link to="/blog"	>  		Blog    		</Link> </li>
									<li> <Link to="/about"> 		about  			</Link> </li>
									{ loged ? 
										<>
											<li> <Link to="/store"> 		store     	</Link> </li>
											<li> <Link to="/dashboard">	Dasboard  	</Link> </li>
										</>
									: 
										<>
											<li> <Link to="/login">   	Login   		</Link> </li>
										</> 
									}
									{ admin ? 
										<>
											<li> <Link to="/admin/dashboard"> admin </Link> </li> 
										</>
									: <></>}
								</ul>
							</nav>						
						</Col>
					</Row>
				</Container>
			</section>
		</header>			
	);
}