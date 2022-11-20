//public
import { ForgotPassword } from "../pages/forgot-password";
import { NotFound } from "../pages/not-found";
import { Landing } from "../pages/landing";
import { Login } from "../pages/login";
import { About } from "../pages/about";
import { Blog } from "../pages/blog";

//user
import { Store } from "../pages/auth/store";
import { Dashboard } from "../pages/auth/dashboard";
import { User } from "../pages/auth/user";

//admin
import { AdminDashboard } from "../pages/admin/dashboard";


export const publicRoutes = [
	{ path: "/forgot-password",  	component: <ForgotPassword/> },
	{ path: "/", 							   	component: <Landing/>},
	{ path: "/login",            	component: <Login/> },
	{ path: "/blog",           		component: <Blog/> },
	{ path: "/about", 						component: <About/>},
]; 
export const userRoutes = [
	{ path: "/store", 						component: <Store/>},
	{ path: "/dashboard", 				component: <Dashboard/>},
	{ path: "/user", 							component: <User/>},
]; 
export const adminRoutes = [
	{ path: "/admin/dashboard", 	component: <AdminDashboard/>},
]; 
