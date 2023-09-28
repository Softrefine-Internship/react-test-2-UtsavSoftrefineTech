import React from "react";
import styled from "styled-components";

const Input = (props) => {
  const InputField = styled.input`
    width: ${props.width};
    height: 3rem;
    padding: 0.5rem;
    margin-right: 5rem;
    font-size: 1.8rem;
    font-weight: 500;

    background: none;
    border: none;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-bottom: 2px solid black;
  `;
  return (
    <>
      <InputField
        type={props.type}
        name={props.name}
        id={props.id}
        value={props.value}
        placeholder={props.placeholder}
      />
    </>
  );
};

export default Input;
