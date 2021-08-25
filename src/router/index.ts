import Admin from "../Features/admin/Admin";
import UserPages from "../Features/admin/pages/UserPages";


import LandingPage from "../Features/LandingPage/LandingPage";

import Login from "../Features/Auth/login/Login";
import Register from "../Features/Auth/register/Register";

import { Proyeccion } from "../Features/proyecciones/Proyeccion";
import Baseinicial from "Features/proyecciones/pages/Baseinicial";
import Productos from "Features/proyecciones/pages/Productos";
import Salario from "Features/proyecciones/pages/Salario";
import VariablePage from "Features/proyecciones/pages/VariablePage";
import OtherVariables from "Features/proyecciones/pages/OtherVariables";


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
            {
                path: "/app/proyecciones/otherVariable",
                name: "otherVariable",
                component: OtherVariables
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