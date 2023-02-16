import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
  todo: todoReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  const state = store.getState();
  if (!state.todo.error) {
    console.log(state.todo);
    localStorage.setItem("todo-list", JSON.stringify(state.todo.list));
  }
});
