import React from 'react';
import PropTypes from 'prop-types';

const Todo= ({onClick,completed,text})=>{
    <li
        onClick = {onClick}
        style = {
            {textDecoration:completed?'line-throgh':none}
        }
    >{text}</li>
};

Todo.protoTypes = {
    onClick:protoTypes.func.isRequired,
    completed:protoTypes.bool.isRequired,
    text:protoTypes.string.isRequired
};

export default Todo;