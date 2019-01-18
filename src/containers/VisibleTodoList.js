import {connect} from 'react-redux';
import {toggleToDo} from '../actions';
import TodoList from '../components/TodoList';

const getVisibileTodo=(todos,filter)=>{
    switch (filter){
        case 'SHOW_COMPLETED':
            return todos.filter(t=>t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t=>!t.completed);
        case 'SHOW_ALL':
        default:
            return todos        
    }
}