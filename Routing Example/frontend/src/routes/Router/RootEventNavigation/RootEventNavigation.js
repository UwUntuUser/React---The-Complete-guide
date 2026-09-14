import EventNavigation from "../EventNavigation/EventNavigation";
import {Outlet} from "react-router-dom";

export function RootEventNavigation() {
    return <>
        <EventNavigation></EventNavigation>
        <main>
            <Outlet></Outlet>
        </main>
    </>
}
