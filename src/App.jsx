import { adminRoutes, publicRoutes, userRoutes } from "./routes/index"
import { AuthLayout } from "./includes/layout/auth-layout"
import { Routes, Route, Navigate} from "react-router-dom"
import { MainContext } from "./context/main.context"
import React, { useContext } from "react"


export default function App() {
  const { isLoged, isAdmin } = useContext(MainContext);
  return (
    <Routes>
        {publicRoutes.map((route, idx) => (
          <Route
            key={idx}
            path={route.path}
            element={ <AuthLayout>{route.component}</AuthLayout> }
          />
        ))}
        { isLoged ? userRoutes.map((route, idx) => (
          <Route
            key={idx}
            path={route.path}
            element={ <AuthLayout>{route.component}</AuthLayout> }
          />
        )) : <></> }
        { isAdmin ? adminRoutes.map((route, idx) => (
          <Route
            key={idx}
            path={route.path}
            element={ <AuthLayout>{route.component}</AuthLayout> }
          />
        )) : <></> }
    </Routes>
  )
}