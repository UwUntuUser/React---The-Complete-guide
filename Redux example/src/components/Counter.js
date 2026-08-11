import { useDispatch, useSelector } from "react-redux"
import classes from './Counter.module.css';

// Entre useStore y useSelector mejor usar el segundo a que permit selecionar una parte de la store

const Counter = () => {

  // Hay que pasarle una funcion que determina que datos (del estado) queremos sacar de la store
  // Lo bueno de este hook es que automatiacmente se setea una suscripcion a la store para este component
  // Cada vez que el estado cambie gracias a useSelector y su suscripcion, el componente es notificado
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {};

  function incrementCounter() {
    dispatch({type: "INCREMENT"})
  }

  function decrementCounter() {
    dispatch({type: "DECREMENT"})
  }


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
