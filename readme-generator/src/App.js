import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "./components/Button/Button";
import Details from "./components/Details/Details";
import Header from "./components/Header/Header";
import GlobalStyle from "./GlobalStyle";
import ReadmePad from "./components/ReadmePad/ReadmePad";

function App() {
  const [showPage, setShowPage] = useState(false);
  const [showActionButton, setShowActionButton] = useState(false);

  const toggleActionButtons = () => {
    setShowPage(!showPage);
    setShowActionButton(false); // Close the action buttons when going back
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      {showPage ? (
        <>
          <ReadmePad toggleActionButtons={toggleActionButtons} />
        </>
      ) : (
        <>
          <Details />
          <Button onClick={toggleActionButtons} />
        </>
      )}
    </>
  );
}

export default App;
