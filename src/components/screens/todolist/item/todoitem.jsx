import React from "react";
import styled from "styled-components";
import { FcFullTrash } from "react-icons/fc";

import Check from "./chek";

const Wrapper = styled.div`
  justify-content: space-between;
  width: 300px;
  display: flex;
  align-items: center;
  background: #54439c;
  border-radius: 25px;
  margin: auto;
  margin-bottom: 6px;
  padding: 10px;
  gap: 10px; //отступы по бокам для всех элементов внутри
`;

const StyledButton = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0; //размер элемента фикс при любых обстоятельствах
`;
function ToDoItem({ todo, changeToDo, deleteToDo }) {
  return (
    <>
      <Wrapper>
        <StyledButton onClick={() => changeToDo(todo.id, !todo.isCompleted)}>
          <Check isCompleted={todo.isCompleted} />
        </StyledButton>

        <span style={{ wordBreak: "break-all" }}>{todo.title}</span>

        <StyledButton
          onClick={() => {
            deleteToDo(todo.id);
          }}
        >
          <FcFullTrash />
        </StyledButton>
      </Wrapper>
    </>
  );
}
export default ToDoItem;
