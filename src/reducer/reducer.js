import {SET_FILTER, SET_TODOS, ADD_TODO, REMOVE_TODO,REMOVE_ALL,TOGGLE_COMPLETE_STATUS} from "../actions/actions";

const rootReducer = function (state = {
    activeFilter: "all",
    todos: []
}, action) {
    switch (action.type) {
        case SET_FILTER:
            return {...state, activeFilter: action.activeFilter};
        case SET_TODOS:
            return {...state, todos: action.todos}
        case ADD_TODO:
            return {...state, todos: state.todos.concat([action.todo])}
        case REMOVE_TODO:
            const newTodos = state.todos.filter((todo) => todo.id !== action.id);
            return {
                ...state,
                todos: newTodos
            };

            case REMOVE_ALL:
                return {
                    todos: []
                };

                case TOGGLE_COMPLETE_STATUS:
                    const newTodos1 = state.todos.map((todo) => {
                        if(todo.id === action.id){
                            let currentTodo = {...todo};
                            currentTodo.checked = !currentTodo.checked;
                            return currentTodo;
                        }else{
                            return todo;
                        }
                    });
                    return {
                        ...state,
                        todos: newTodos1
                    };



                    


        default:
            return state;
    }

};

export default rootReducer