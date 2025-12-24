const redux = require("redux");

const INITIAL_VALUE = {
  counter: 4,
};
const reducer = (store = INITIAL_VALUE, action) => {
  let newStore = store;
  if (action.type === "INCREMENT") {
    newStore = { counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    newStore = { counter: store.counter - 1 };
  }
  return newStore;
};

const store = redux.createStore(reducer);

const subsciber = () => {
  const state = store.getState();
  console.log(state);
};

store.subscribe(subsciber);

store.dispatch({ type: "INCREMENT" });

store.dispatch({ type: "INCREMENT" });

store.dispatch({ type: "INCREMENT" });

store.dispatch({ type: "INCREMENT" });

store.dispatch({ type: "INCREMENT" });

store.dispatch({ type: "INCREMENT" });

store.dispatch({ type: "INCREMENT" });
