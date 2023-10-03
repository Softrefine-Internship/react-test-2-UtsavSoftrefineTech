import React from "react";
import styled from "styled-components";
import Input from "../Input/Input";

const SocialContainer = styled.div`
  margin: 2rem;
  display: grid;
  row-gap: 2rem;
  grid-template-columns: 1fr 1fr;

  @media only screen and (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;

const Social = styled.div`
  display: flex;
  align-items: center;
  // gap: 1rem;
`;

const Icon = styled.div`
  img {
    height: 3rem;
    width: 3rem;
  }
`;

const SocialLinks = (props) => {
  const { socialLinks } = props;

  return (
    <>
      <SocialContainer>
        {socialLinks.map((socialLink, index) => {
          return (
            <Social key={socialLink.title}>
              <Icon>
                <img
                  src={socialLink.src}
                  alt={socialLink.placeholder.split(" ")[0]}
                />
              </Icon>
              <Input
                type="text"
                name="title"
                id="title"
                placeholder={socialLink.placeholder}
                width="100%"
                value={socialLink.link}
                onChange={(value) => props.onSocialLinkChange(index, value)}
              />
            </Social>
          );
        })}
      </SocialContainer>
    </>
  );
};

export default SocialLinks;
