import Admin from "../pages/admin/Admin";
import UserPages from "../pages/admin/pages/UserPages";


import LandingPage from "../pages/LandingPage/LandingPage";

import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

import { Proyeccion } from "../pages/proyecciones/Proyeccion";
import Baseinicial from "pages/proyecciones/pages/Baseinicial";
import Productos from "pages/proyecciones/pages/Productos";
import Salario from "pages/proyecciones/pages/Salario";
import VariablePage from "pages/proyecciones/pages/VariablePage";


const routes = [
    {
        path: "/",
        exact: true,
        component: LandingPage
    },
    {
        path: "/login",
        exact: true,
        component: Login
    },
    {
        path: "/register",
        exact: true,
        component: Register
    },
    {
        path: "/app",
        component: Proyeccion,
        routes: [
            {
                path: "/app/proyecciones/baseInicial",
                name: "baseInicial",
                component: Baseinicial
            },
            {
                path: "/app/proyecciones/productos",
                name: "productos",
                component: Productos
            },
            {
                path: "/app/proyecciones/Salario",
                name: "salario",
                component: Salario
            },
            {
                path: "/app/proyecciones/Variable",
                name: "variable",
                component: VariablePage
            },
        ]
    },
    {
        component: Admin,
        routes: [
            {
                path: "/admin/users",
                component: UserPages
            },
        ]
    }
];

export default routes