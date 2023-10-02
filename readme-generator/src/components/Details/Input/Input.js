import React from "react";
import styled from "styled-components";

const InputField = styled.input`
  width: ${(props) => props.width};
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
const Input = (props) => {
  // This is the function that will be called when the input value changes
  const handleChange = (e) => {
    if (props.onChange) {
      props.onChange(e.target.value);
    }
  };

  return (
    <>
      <InputField
        type={props.type}
        name={props.name}
        id={props.id}
        value={props.value}
        width={props.width}
        placeholder={props.placeholder}
        onChange={handleChange}
      />
    </>
  );
};

export default Input;
