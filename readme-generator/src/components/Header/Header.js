import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Header = () => {
  const Header = styled.header`
    height: 13rem;
    background-color: #f5f5f5;
  `;

  const Title = styled.p`
    font-weight: 500;
    text-align: center;
    padding: 2rem 0;
    font-size: 3rem;
    color: #333;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  `;

  const Btns = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  `;

  const Btn = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    height: 4rem;
    padding: 0 1rem;
    border-radius: 5px;
    background-color: #f5f5f5;
    font-size: 1.5rem;
    cursor: pointer;
    border: 1px solid black;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: #333;
        color: #f5f5f5;
        }
    }
  `;

  const [star, setStar] = useState(0);
  const [fork, setFork] = useState(0);

  const fetchData = async () => {
    const res = await fetch(
      "https://api.github.com/repos/UtsavDesai26/CICD-Pipeline"
    );
    const data = await res.json();
    setStar(data.stargazers_count);
    setFork(data.forks_count);
  };

  const openGitHubRepoFork = () => {
    window.open("https://github.com/UtsavDesai26/CICD-Pipeline/fork", "_blank");
  };

  const openGitHubRepoStar = () => {
    window.open("https://github.com/UtsavDesai26/CICD-Pipeline", "_blank");
  };

  useEffect(() => {
    fetchData();
    setInterval(fetchData, 6000);

    return () => {};
  }, []);

  return (
    <>
      <Header>
        <Title>GitHub Profile README Generator</Title>
        <Btns>
          <Btn onClick={openGitHubRepoStar}>
            <p>
              <ion-icon name="star-outline"></ion-icon>
            </p>
            <p>Star this repo</p>
            <p>{star}</p>
          </Btn>
          <Btn onClick={openGitHubRepoFork}>
            <p>
              <ion-icon name="git-network-outline"></ion-icon>
            </p>
            <p>Fork on GitHub</p>
            <p>{fork}</p>
          </Btn>
        </Btns>
      </Header>
    </>
  );
};

export default Header;
