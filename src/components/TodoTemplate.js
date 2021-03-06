import React from 'react';
import styled from 'styled-components';
import TodoHead from './TodoHead';
import TodoList from './TodoList';
import TodoCreate from './TodoCreate';



const TodoTemplateBlock = styled.div`
    width: 512px;
    height: 760px;

    position: relative;
    background: white;
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0,0,0,.04);

    margin: 0 auto;

    margin-top: 96px;
    margin-bottom: 32px;
    display: flex; 
    flex-direction: column;
`;

function TodoTemplate(){
    return (
        <TodoTemplateBlock>
            <TodoHead></TodoHead>
            <TodoList></TodoList>
            <TodoCreate />
        </TodoTemplateBlock>
    )
}


export default TodoTemplate;

