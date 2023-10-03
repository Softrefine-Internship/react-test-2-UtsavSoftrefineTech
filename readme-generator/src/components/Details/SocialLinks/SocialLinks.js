import React from "react";
import styled from "styled-components";
import Input from "../Input/Input";

const SocialContainer = styled.div`
  margin: 2rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
`;

const Social = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0 2rem;
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
                width="80%"
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
