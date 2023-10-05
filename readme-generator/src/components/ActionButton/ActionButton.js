import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.5rem;
  font-size: 1.5rem;
  padding: 0 2rem;
  border-radius: 4px;
  border: none;
  border: 0.2rem solid black;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #f5f5f5;
    cursor: pointer;
    background-color: #333;
  }

  @media only screen and (max-width: 768px) {
    height: 3rem;
    font-size: 1rem;
    padding: 0 0.5rem;
  }
`;

const ActionLogo = styled.div`
  font-size: 2rem;
  margin-right: 1rem;
  line-height: 0;

  @media only screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ActionText = styled.p`
  font-size: 1.5rem;
  @media only screen and (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ActionButton = ({ onClick, icon, text }) => {
  return (
    <Button onClick={onClick}>
      <ActionLogo>
        <ion-icon name={icon}></ion-icon>
      </ActionLogo>
      <ActionText>{text}</ActionText>
    </Button>
  );
};

export default ActionButton;
