import {connect} from 'react-redux';
import {toggleToDo} from '../actions';
import TodoList from '../components/TodoList';

const getVisibileTodos=(todos,filter)=>{
    switch (filter){
        case 'SHOW_COMPLETED':
            return todos.filter(t=>t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t=>!t.completed);
        case 'SHOW_ALL':
            return todos;
        default:
            return new Error('Unknow filter: ' + filter)        
    }
};
const mapStateToProps = state=>{
    return {
        todos:getVisibileTodos(state.todos,state.visibilityFilter)
    }
};

const mapDispatchToProps = dispatch=>{
    return {
        onTodoClick: toggleToDo
    }
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
