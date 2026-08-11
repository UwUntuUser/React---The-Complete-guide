const redux = require("redux")

const reducer = (state = {counter: 0}, action) => {
    if(action.type === "INCREMENT") {
        return {
            counter: state.counter + 1
        }
    }
    else if(action.type === "DECREMENT") {
        return {
            counter: state.counter - 1
        }
    }
}

const store = redux.createStore(reducer);

// la suscripcion se trigea cuando el estado cambia
// con getState() consigues el ultimo estado post cambio
const subscriber = () => {
    const state = store.getState();
    console.log(state)
}


store.subscribe(subscriber);

store.dispatch({type: "INCREMENT"})
store.dispatch({type: "DECREMENT"})
store.dispatch({type: "DECREMENT"})