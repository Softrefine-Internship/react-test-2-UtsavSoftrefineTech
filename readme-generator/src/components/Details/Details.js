import React from "react";
import styled from "styled-components";
import Input from "./Input/Input";
import Heading from "./Heading/Heading";
import Category from "./Category/Category";
import SocialLinks from "./SocialLinks/SocialLinks";

const Details = () => {
  const Details = styled.div`
    width: 100%;
    height: 100%;
    margin-bottom: 2rem;
  `;

  const Section = styled.div`
    margin-bottom: 2rem;
    padding: 2rem 4rem;
  `;

  const BreakPoint = styled.div`
    height: 2rem;
    margin-top: 2rem;
  `;

  return (
    <>
      <Details>
        <Section>
          <Heading heading="Details"></Heading>
          <Input
            type="text"
            name="title"
            id="title"
            value="Hi 👋, I'm"
            width="10%"
          />
          <Input
            type="text"
            name="subtitle"
            id="subtitle"
            placeholder="name"
            width="25%"
          />
        </Section>
        <Section>
          <Heading heading="Subtitle"></Heading>

          <Input
            type="text"
            name="title"
            id="title"
            value="A passionate frontend developer from India"
            width="40%"
          />
        </Section>
        <Section>
          <Heading heading="Work"></Heading>
          <Input
            type="text"
            name="title"
            id="title"
            value="🔭 I’m currently working on"
            width="20%"
          />
          <Input
            type="text"
            name="title"
            id="title"
            width="30%"
            placeholder="project name"
          />
          <Input
            type="text"
            name="title"
            id="title"
            width="30%"
            placeholder="project link"
          />
          <BreakPoint />

          <Input
            type="text"
            name="title"
            id="title"
            value="👯 I’m looking to collaborate on"
            width="20%"
          />
          <Input
            type="text"
            name="title"
            id="title"
            width="30%"
            placeholder="project name"
          />
          <Input
            type="text"
            name="title"
            id="title"
            width="30%"
            placeholder="project link"
          />

          <BreakPoint />

          <Input
            type="text"
            name="title"
            id="title"
            value="🤝 I’m looking for help with"
            width="20%"
          />
          <Input
            type="text"
            name="title"
            id="title"
            width="30%"
            placeholder="project name"
          />
          <Input
            type="text"
            name="title"
            id="title"
            width="30%"
            placeholder="project link"
          />

          <BreakPoint />

          <Input
            type="text"
            name="title"
            id="title"
            value="🌱 I’m currently learning"
            width="20%"
          />
          <Input
            type="text"
            name="title"
            id="title"
            width="30%"
            placeholder="Framworks, courses etc."
          />

          <BreakPoint />

          <Input
            type="text"
            name="title"
            id="title"
            value="💬 Ask me about"
            width="20%"
          />
          <Input
            type="text"
            name="title"
            id="title"
            width="30%"
            placeholder="react, javascript, css etc."
          />

          <BreakPoint />

          <Input
            type="text"
            name="title"
            id="title"
            value="📫 How to reach me"
            width="20%"
          />
          <Input
            type="text"
            name="title"
            id="title"
            width="30%"
            placeholder="emaple@gmail.com"
          />
          <BreakPoint />

          <Input
            type="text"
            name="title"
            id="title"
            value="👨‍💻 All of my projects are available at"
            width="20%"
          />
          <Input
            type="text"
            name="title"
            id="title"
            width="30%"
            placeholder="portfolio link"
          />
          <BreakPoint />

          <Input
            type="text"
            name="title"
            id="title"
            value="📝 I regularly write articles on"
            width="20%"
          />
          <Input
            type="text"
            name="title"
            id="title"
            width="30%"
            placeholder="dev.to, medium etc."
          />
          <BreakPoint />

          <Input
            type="text"
            name="title"
            id="title"
            value="📄 Know about my experiences"
            width="20%"
          />
          <Input
            type="text"
            name="title"
            id="title"
            width="30%"
            placeholder="resume link"
          />
          <BreakPoint />

          <Input
            type="text"
            name="title"
            id="title"
            value="⚡ Fun fact"
            width="20%"
          />
          <Input
            type="text"
            name="title"
            id="title"
            width="30%"
            placeholder="I think I am funny"
          />
        </Section>
        <Section>
          <Category />
        </Section>
        <Section>
          <Heading heading="Social"></Heading>
          <SocialLinks />
        </Section>
      </Details>
    </>
  );
};

export default Details;
