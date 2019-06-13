const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

import { RECEIVE_TODOS, RECEIVE_TODO } from '../../actions/todo_actions';

const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case(RECEIVE_TODOS):
      let todosState = {};
      action.todos.forEach((el, i) => { todosState[i] = el });
      return todosState;
    case(RECEIVE_TODO):
      let todoID = action.todos[0].id;
      let todoState = {todoID: action.todos[0]};
      return Object.assign(todoState,initialState);       
    default:
      return initialState;
  }
};

export default todosReducer;

const testTodos = [
  { id: 1, title: 'Eat stuff', body: 'green stuff', done: false },
  { id: 2, title: 'Pet cat', body: 'wash hands', done: false }]