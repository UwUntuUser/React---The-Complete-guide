import classes from './EventNavigation.module.css';
import {Link} from "react-router-dom";

function EventNavigation() {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <Link to="/root/events">All Events</Link>
                    </li>
                    <li>
                        <Link to="/root/events/new">New Event</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default EventNavigation;
