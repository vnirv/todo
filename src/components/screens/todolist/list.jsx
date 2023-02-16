import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Input from "./Input";
import ToDoItem from "./item/todoitem";
import {
  addTodoAction,
  removeTodoAction,
  updateTodo,
  fetchList,
} from "../../../store/todoReducer";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background-image: linear-gradient(
    to right top,
    #0f0a2e,
    #1e1753,
    #37207a,
    #5626a2,
    #7b27c8
  );
  color: #a194d6;
`;

function List() {
  //
  const dispatch = useDispatch();
  const { list, fetched, error } = useSelector((state) => state.todo);

  const handleCreate = useCallback((item) => {
    dispatch(addTodoAction(item));
  }, []);

  const handleClick = useCallback((id) => {
    dispatch(removeTodoAction(id));
  }, []);

  const handleChangeItem = (id, nextChecked) => {
    dispatch(updateTodo(id, nextChecked));
  };

  // сохранить в localStorage
  useEffect(() => {
    dispatch(fetchList());
  }, []);

  const getContent = () => {
    if (error) {
      return <div>Error!</div>;
    }

    return list.length > 0 ? (
      list.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          changeToDo={handleChangeItem}
          deleteToDo={handleClick}
        />
      ))
    ) : (
      <div>Дел нет. Пока что можно отдыхать 🧘‍♀️</div>
    );
  };

  return (
    <AppWrapper>
      <h1>To Do List </h1>
      <Input onCreate={handleCreate} />
      {!fetched ? <div>Loading...</div> : getContent()}
    </AppWrapper>
  );
}

export default List;
