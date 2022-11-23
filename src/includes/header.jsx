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
							<nav className="">
								<ul className="d-flex">
									<li className=""> <Link className="py-2 px-4 m-2" to="/"			> 		Landing 		</Link> </li>
									<li className=""> <Link className="py-2 px-4 m-2" to="/blog"	>  		Blog    		</Link> </li>
									<li className=""> <Link className="py-2 px-4 m-2" to="/about"> 			about  			</Link> </li>
									{ loged ? 
										<>
											<li className=""> <Link className="py-2 px-4 m-2" to="/store"> 		store     	</Link> </li>
											<li className=""> <Link className="py-2 px-4 m-2" to="/dashboard">	Dasboard  	</Link> </li>
										</>
									: 
										<>
											<li className=""> <Link className="py-2 px-4 m-2" to="/login">   	Login   		</Link> </li>
										</> 
									}
									{ admin ? 
										<>
											<li className=""> <Link className="py-2 px-4 m-2" to="/admin/dashboard"> admin </Link> </li> 
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