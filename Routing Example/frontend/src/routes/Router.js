import {createBrowserRouter} from 'react-router-dom';
import { RootNavigation } from './Router/RootNavigation/RootNavigation.js';
import HomePage from '../components/HomePage/HomePage.js';
import {RootEventNavigation} from "./Router/RootEventNavigation/RootEventNavigation";
import EventItem from "../components/EventItem/EventItem";
import EventsList from "../components/EventsList/EventsList";
import EditEvent from "../components/EditEvent/EditEvent";
import NewEvent from "../components/NewEvent/NewEvent";

const router = createBrowserRouter([
    {
        path: '/root',
        element: <RootNavigation></RootNavigation>,
        children: [
            { path: '', element: <HomePage></HomePage> },
            { path: "events", element: <EventsList></EventsList>},
            { path: "events/new", element: <NewEvent></NewEvent>},
            {
                path: "events/:eventId",
                element: <RootEventNavigation></RootEventNavigation>,
                children: [
                    { path: "", element: <EventItem></EventItem>},
                    { path: "edit", element: <EditEvent></EditEvent> }
                ]
            }
        ]
    }
]);

export default router;