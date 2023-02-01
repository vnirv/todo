import React from "react";
import { FcCloseUpMode } from "react-icons/fc";
import styled from "styled-components";

const StyledCheck = styled.span`
  height: 24px;
  width: 24px;
  display: inline-block;
  flex-shrink: 0;
  background: #a194d6;
  border: 1px solid;
  border-color: DarkSlateBlue;
  border-radius: 20px;
`;

function Check({ isCompleted }) {
  return <StyledCheck>{isCompleted && <FcCloseUpMode />}</StyledCheck>;
}

export default Check;
