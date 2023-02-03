import React, { useCallback, useState } from "react";
import styled from "styled-components";
import swal from "sweetalert";

const StyledInput = styled.input`
  border: 1px;
  border-style: dotted;
  border-color: DarkSlateBlue;
  border-radius: 7px;
  margin: 10px 2px 10px;
  padding: 2px;
  background: #a194d6;
`;

function Input({ onCreate }) {
  const [value, setValue] = useState("");

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.keyCode === 13 && e.target.value.length === 0) {
        return swal("Не забудь ввести задачу 🙃", {
          buttons: "Ой,забыл:(",
        });
      }
      if (e.keyCode === 13 && e.target.value.length > 50) {
        swal({
          title: "Ой!🥺",
          text: "Кажется, задача слишком длинная \nПопробуй уложиться в 50 символов 🤗",
          icon: "warning",
          buttons: "Постараюсь",
        });
        return setValue("");
      }
      // enter pressed
      if (e.keyCode === 13 && e.target.value.length !== 0) {
        onCreate({ id: Date.now(), title: value, isCompleted: false });
        setValue("");
        localStorage.setItem(
          JSON.stringify(Date.now()),
          JSON.stringify({ id: Date.now(), title: value })
        );
      }
    },

    [value, onCreate]
  );

  return (
    <div>
      {" "}
      <StyledInput
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="add toDo :)"
      />{" "}
    </div>
  );
}

export default Input;
