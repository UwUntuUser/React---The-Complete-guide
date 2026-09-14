import {RouterProvider} from "react-router-dom";
import router from "../../routes/Router";
import EventsPage from "./EventPage";
import {useEffect, useState} from "react";


export default function EventList(){
    const [events, setEvents] = useState([]);

    useEffect(() => {
        async function getEvents(){
            const response = await fetch('http://localhost:8080/events');
            const data = await response.json();

            if(!response.ok){
                throw new Error(data.message || 'Could not fetch events.');
            }
            setEvents(data.events);
        }

        getEvents();

    }, []);

    return <EventsPage events={events}></EventsPage>
}
