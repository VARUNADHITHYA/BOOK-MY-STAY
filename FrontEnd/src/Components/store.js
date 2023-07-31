import { createStore } from "redux";

const initialState = {
  user: null,
};

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return initialState;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return initialState;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (error) {
    // Handle errors while saving state
  }
};

const reducer = (state = loadState(), action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "CLEAR_USER":
      return { ...state, user: null };
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;