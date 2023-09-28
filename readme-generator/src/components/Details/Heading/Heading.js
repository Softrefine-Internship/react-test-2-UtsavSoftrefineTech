import React from "react";
import styled from "styled-components";

const Heading = (props) => {
  const Heading = styled.h1`
    color: #000000b7;
    margin-bottom: 1rem;
  `;
  return (
    <>
      <Heading>{props.heading}</Heading>
    </>
  );
};

export default Heading;
