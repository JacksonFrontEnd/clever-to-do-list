import Calendar from "./components/Calendar";
import Login from "./components/Login";
import { CALENDAR_ROUTE, LOGIN_ROUTE } from "./utils/const";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component:Login,
    }
]
export const privateRoutes = [
    {
        path: CALENDAR_ROUTE,
        Component:Calendar,
    }
]