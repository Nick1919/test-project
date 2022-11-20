import { createContext, useMemo } from "react";
import PropTypes from 'prop-types';

export const MainContext = createContext(null);
export const ContextProvider = ({children}) => {
	const darkMode = false;  
	const isLoged = true;
	const isAdmin = false;
	const providerValues = useMemo(()=> ({
		isLoged,
		isAdmin,
		darkMode
	}), [ darkMode, isLoged, isAdmin ])
	return (
		<MainContext.Provider value={providerValues}>
			{children}
		</MainContext.Provider>
	);
}; 
ContextProvider.propTypes = {
	children: PropTypes.element.isRequired
};