import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./header.scss";

export const Header = ({loged, admin}) => {
	return (
		<header>
			<section id="header">
				<Container>
					<Row>
						<Col xs={12} md={4} lg={3}>
							<h1 className="logo-container">Logo</h1>
						</Col>
						<Col className="d-flex align-items-center justify-content-end" xs={12} md={8} lg={9}>
							<nav className="non-styled-nav">
								<ul className="d-flex header-nav-links-container">
									<li className=""> <Link className="nav-link" to="/"			> 		Landing 		</Link> </li>
									<li className=""> <Link className="nav-link" to="/blog"	>  		Blog    		</Link> </li>
									<li className=""> <Link className="nav-link" to="/about"> 			about  			</Link> </li>
									{ loged ? 
										<>
											<li className=""> <Link className="nav-link" to="/store"> 		store     	</Link> </li>
											<li className=""> <Link className="nav-link" to="/dashboard">	Dasboard  	</Link> </li>
										</>
									: 
										<>
											<li className=""> <Link className="nav-link primary" to="/login">   	Login   		</Link> </li>
										</> 
									}
									{ admin ? 
										<>
											<li className=""> <Link className="nav-link primary outline" to="/admin/dashboard"> admin </Link> </li> 
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