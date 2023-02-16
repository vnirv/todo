export const defaultState = {
  list: [],
  fetched: false,
  error: null,
};

const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const SET_ERROR = "SET_ERROR";
const REPLACE_LIST = "REPLACE_LIST";

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, list: [...state.list, action.payload] };
    case REMOVE_TODO:
      return {
        ...state,
        list: state.list.filter((todo) => todo.id !== action.payload),
      };
    case REPLACE_LIST:
      return { ...state, list: action.payload, fetched: true };
    case SET_ERROR:
      return { ...state, error: action.payload, fetched: true };
    case UPDATE_TODO:
      return {
        ...state,
        list: state.list.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, isCompleted: action.payload.checked }
            : todo
        ),
      };
    default:
      return state;
  }
};
export default todoReducer;

export const addTodoAction = (payload) => ({ type: ADD_TODO, payload });
export const setError = (payload) => ({ type: SET_ERROR, payload });
export const updateTodo = (id, checked) => ({
  type: UPDATE_TODO,
  payload: { id, checked },
});
export const replaceListAction = (payload) => ({ type: REPLACE_LIST, payload });
export const removeTodoAction = (payload) => ({
  type: REMOVE_TODO,
  payload,
});

export const fetchList = () => (dispatch) => {
  new Promise((res) => {
    let list;

    try {
      list = JSON.parse(localStorage.getItem("todo-list"));
    } catch {
      localStorage.removeItem("todo-list");
    }

    setTimeout(() => res(list), Math.random() * 2000);
  })
    .then((data) => dispatch(replaceListAction(data || [])))
    .catch((e) => dispatch(setError("erorr!!")));
};
