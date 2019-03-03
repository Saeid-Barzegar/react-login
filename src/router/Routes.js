import Home from "../Components/Home";
import Login from "../Components/Login/Login";
import SignUp from "../Components/Login/SignUp";

const Routes = [
    {
        path: "/",
        component: Home,
        exact: true
    },
    {
        path: "/login",
        component: Login,
        exact: false
    },
    {
        path: "/signup",
        component: SignUp,
        exact: false
    }
];

export default Routes