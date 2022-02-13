import React from 'react';
import styled from 'styled-components';

import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;

function TodoList() {
    return (
        <>
            <TodoListBlock>
                <TodoItem text="Create a new project" done={true}></TodoItem>
                <TodoItem text="Styling a component" done={true}></TodoItem>
                <TodoItem text="Making a Context" done={false}></TodoItem>
                <TodoItem text="Implement functions" done={false}></TodoItem>
            </TodoListBlock>
        </>
    );
}

export default TodoList;