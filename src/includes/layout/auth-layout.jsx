import { MainContext } from "../../context/main.context"
import { Header } from "../header";
import { Footer } from "../footer";
import { useContext } from "react";

export const AuthLayout = ({children, showfooter}) => {
	const { isLoged, isAdmin } = useContext(MainContext)
	return (
		<>
			<Header loged={isLoged} admin={isAdmin}/>
				{children}
			{ showfooter ?? <Footer/> }
		</>
	);
}