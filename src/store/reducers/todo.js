import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "../actions/todo";

const initiaState = {
  todos: [{ id: Date.now(), title: "redux test", finished: false }]
};

export const todoReducer = (state = initiaState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          { id: Date.now(), title: action.text, finished: false }
        ]
      };
    case TOGGLE_TODO:
      const todos = state.todos.map((i) => {
        if (i.id === action.id) {
          i.finished = !i.finished;
          return i;
        } else {
          return i;
        }
      });
      return { todos };
    case DELETE_TODO:
      return { todos: state.todos.filter((i) => i.id !== action.id) };
    default:
      return state;
  }
};
