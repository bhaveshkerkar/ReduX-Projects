const redux = require("redux");

const INITIAL_VALUE = {
  counter: 0,
};
const reducer = (store = INITIAL_VALUE, action) => {
  return { counter: store.counter + 1 };
};

const store = redux.createStore(reducer);

const subsciber = () => {
  const state = store.getState();
  console.log(state);
};

store.subscribe(subsciber);

store.dispatch({ type: "INCREMENT" });
