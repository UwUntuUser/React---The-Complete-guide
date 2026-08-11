import {createStore} from "redux"
import counterSliceReducer from "../slices/counterSlice"

const counterReducer = (state = {counter: 0}, action) => {
    if(action.type === "INCREMENT") {
        return {
            counter: state.counter + 1
        }
    } else if(action.type === "DECREMENT") {
        return {
            counter: state.counter - 1
        }
    }

    return state
}

const store = createStore(counterReducer);


/* Si en vez de usar reducers de redux, usamos slices de redux toolkit,
el código a la hora de suministar el store a redux se vería así: */

export const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
  },
})



export default store;