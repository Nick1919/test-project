import { MainContext } from "../../context/main.context"
import { Header } from "../parts/header";
import { Footer } from "../parts/footer";
import { useContext } from "react";

export const AuthLayout = ({children}) => {
	const { isLoged, isAdmin } = useContext(MainContext)
	return (
		<>
			<Header loged={isLoged} admin={isAdmin}/>
				{children}
			<Footer/>
		</>
	);
}