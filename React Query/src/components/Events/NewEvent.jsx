import { Link, useNavigate } from 'react-router-dom';
import {useMutation} from '@tanstack/react-query';
import {createNewEvent} from '../../util/http.js';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import { queryClient } from '../../util/http.js';

export default function NewEvent() {
  const navigate = useNavigate();

  // useMutation es igual que useQuery pero para llamadas POST
  // useMutation no ejecuta automaticamente la request cuando el componente se renderiza,
  // sino que devuelve un objeto con una funcion mutate que es la que ejecuta la request cuando se llama
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: createNewEvent,
    onSuccess: (data) => {
      // Invalida la cache de la query con queryKey 'events' para que se vuelva a ejecutar y traiga los datos actualizados
      queryClient.invalidateQueries({queryKey: ['events']}); 
      navigate(`/events`);
    },
  });

  function handleSubmit(formData) {
    mutate({event: formData});
  }

  return (
    <Modal onClose={() => navigate('../')}>
      <EventForm onSubmit={handleSubmit}>
        {isPending && <p>Creating event...</p>}
        {!isPending && (
          <>
          <Link to="../" className="button-text">
            Cancel
          </Link>
          <button type="submit" className="button">
            Create
          </button>
        </>
        )}
      </EventForm>
      {isError && <ErrorBlock title="An error occurred" message={error.info?.message || 'Failed to create event'} />}
    </Modal>
  );
}
