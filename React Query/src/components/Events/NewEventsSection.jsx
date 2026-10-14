import {useQuery} from '@tanstack/react-query';

import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import EventItem from './EventItem.jsx';
import { fetchEvents } from '../../util/http.js';

export default function NewEventsSection() {

  const { data, isPending, isError, error} = useQuery({
    // queryKey: define un identificador unico para la query y usado para cachear y actualizar
    // los datos de la query. Tu defines ese identificador
    queryKey: ['events'], 
    // queryFn: define el codigo que sera ejecutado y que lanzara el request a la API. Tu defines ese codigo
    queryFn: fetchEvents,
    staleTime: 5000, // Tiempo que espera para mandar la request de nuevo
    gcTime: 30000, // 5 minutes. Tiempo que espera para eliminar la cache de la query
  })

  let content;

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock title="An error occurred" message={error.info?.message || 'Failed to fetch events'} />
    );
  }

  if (data) {
    content = (
      <ul className="events-list">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="content-section" id="new-events-section">
      <header>
        <h2>Recently added events</h2>
      </header>
      {content}
    </section>
  );
}
