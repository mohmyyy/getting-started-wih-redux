const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    console.log("increment");
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    console.log("decrement");
    return { counter: state.counter - 1 };
  }
};

// A reducer function is a standard javascript function, but it will be called by redux library and it will then always receive two pieces of input, two parameters, the old or existing state and the action that was dispatched. and then its reducer function must return a certain output.
//

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  //getState() is a method which is available on the store created with create store.
  console.log(latestState,24);
};

store.subscribe(counterSubscriber);
store.dispatch({ type: "increment" });
console.log(store.getState(),'after Icrement');
store.dispatch({ type: "increment" });
console.log(store.getState(),'after second Icrement');
store.dispatch({ type: "decrement" });
console.log(store.getState());
