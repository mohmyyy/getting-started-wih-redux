const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 2,
    };
  }
  if (action.type === "incrementby2") {
    return {
      counter: state.counter + 2,
    };
  }
  if (action.type === "decrement") {
    return { counter: state.counter - 1 };
  }
  if (action.type === "decrementby2") {
    return { counter: state.counter - 2 };
  }
  return state;
};

// A reducer function is a standard javascript function, but it will be called by redux library and it will then always receive two pieces of input, two parameters, the old or existing state and the action that was dispatched. and then its reducer function must return a certain output.
//

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  //getState() is a method which is available on the store created with create store.
  console.log(latestState, 24);
};

store.subscribe(counterSubscriber);
store.dispatch({ type: "increment" });
console.log(store.getState(), "increment");
store.dispatch({ type: "incrementby2" });
console.log(store.getState(), "increment by 2");

store.dispatch({ type: "decrement" });
console.log(store.getState(),'decrement');
store.dispatch({ type: "decrementby2" });
console.log(store.getState(),'decrement by 2');
