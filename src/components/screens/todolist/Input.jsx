import React, { useCallback, useState } from "react";
import styled from "styled-components";

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
      // enter pressed
      if (e.keyCode === 13) {
        onCreate({ id: Date.now(), title: value, isCompleted: false });
        setValue("");
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
