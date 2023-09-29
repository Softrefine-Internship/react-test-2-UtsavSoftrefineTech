import React, { useState } from "react";
import styled from "styled-components";
import ActionButton from "./components/ActionButton/ActionButton";
import Button from "./components/Button/Button";
import Details from "./components/Details/Details";
import Header from "./components/Header/Header";
import GlobalStyle from "./GlobalStyle";
import ReadmePad from "./components/ReadmePad/ReadmePad";

const ActionButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

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
      {showPage ? (
        <>
          <ActionButtonWrapper>
            <ActionButton
              icon="arrow-back-outline"
              text="back to edit"
              onClick={toggleActionButtons}
            />
            <ActionButton icon="copy-outline" text="copy markdown" />
            <ActionButton icon="download-outline" text="download readme.md" />
          </ActionButtonWrapper>
          <ReadmePad />
        </>
      ) : (
        <>
          <Header />
          <Details />
          <Button onClick={toggleActionButtons} />
        </>
      )}
    </>
  );
}

export default App;
