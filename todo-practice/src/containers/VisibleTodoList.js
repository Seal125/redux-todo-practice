import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { visibilityFilters, toggleTodo } from "../actions";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case visibilityFilters.SHOW_ALL:
      return todos;
    case visibilityFilters.SHOW_COMPLETED:
      return todos.filter((task) => task.completed);
    case visibilityFilters.SHOW_ACTIVE:
      return todos.filter((task) => !task.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

//This is the state for the todos, and this is what will be checked for updates in order to re-render
const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

//This is the action for toggling whether the todos are complete or not. It passes in an object with the toggleTodo property, which is just a function with information that is sent to the store. The action simply contains a type and the id that is passed.
const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
});

//This connects the state as well as a dispatch to the TodoList component as props
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
