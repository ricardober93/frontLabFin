import Admin from "../pages/admin/Admin";
import UserPages from "../pages/admin/pages/UserPages";


import LandingPage from "../pages/LandingPage/LandingPage";

import Login from "../pages/login/Login";
import Register from "../pages/register/Register";




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