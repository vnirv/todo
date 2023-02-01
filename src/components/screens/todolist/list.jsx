import React, { useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import ToDoItem from "./item/todoitem";

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

const toDos = [{ id: 0, title: "do todo List", isCompleted: false }];

function List() {
  const [data, setData] = useState(toDos);

  const changeToDo = (id, nextChecked) => {
    const next = data.map((item) =>
      item.id === id ? { ...item, isCompleted: nextChecked } : item
    );

    setData(next);
  };

  const deleteToDo = (id) => {
    setData(data.filter((t) => t.id !== id));
  };

  return (
    <AppWrapper>
      <h1>To Do List </h1>
      <Input onCreate={(item) => setData(data.concat(item))} />
      {data.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          changeToDo={changeToDo}
          deleteToDo={deleteToDo}
        />
      ))}
    </AppWrapper>
  );
}

export default List;
