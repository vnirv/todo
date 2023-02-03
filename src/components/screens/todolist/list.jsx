import React, { useCallback, useState } from "react";
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

let toDos = [];

try {
  toDos = JSON.parse(localStorage.getItem("todo-list"));
} catch {
  localStorage.removeItem("todo-list");
}

function List() {
  const [data, setData] = useState(toDos);

  // сохранить в localStorage

  const changeList = useCallback((nextList) => {
    setData(nextList);

    localStorage.setItem("todo-list", JSON.stringify(nextList));
  }, []);

  const changeToDo = (id, nextChecked) => {
    const next = data.map((item) =>
      item.id === id ? { ...item, isCompleted: nextChecked } : item
    );

    changeList(next);
  };

  const deleteToDo = (id) => {
    changeList(data.filter((t) => t.id !== id));
  };
  // if (data.length === 0) {
  //   return "Дел нет. Пока что можно отдыхать 🧘‍♀️";
  // }
  return (
    <AppWrapper>
      <h1>To Do List </h1>
      <Input onCreate={(item) => changeList(data.concat(item))} />
      {data.length > 0 ? (
        data.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            changeToDo={changeToDo}
            deleteToDo={deleteToDo}
          />
        ))
      ) : (
        <div>Дел нет. Пока что можно отдыхать 🧘‍♀️</div>
      )}
    </AppWrapper>
  );
}

export default List;
