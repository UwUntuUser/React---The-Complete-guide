import classes from './EventItem.module.css';
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function EventItem() {

    const [event, setEvent] = useState({})

    useEffect(() => {
        async function fetchEventDetails() {
            const response = await fetch('http://localhost:8080/events/e1');
            const data = await response.json();

            if(!response.ok) {
                throw new Error(data.message || 'Could not fetch event details.');
            }

            setEvent(data.event);
        }
        fetchEventDetails();
    }, [])

    function startDeleteHandler() {
    // ...
  }

  if(!event) {
      return <p>Loading...</p>
  }
  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
