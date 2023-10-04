import React, { useState, useEffect } from "react";
import Markdown from "react-markdown";
import styled from "styled-components";
import ActionButton from "../ActionButton/ActionButton";

const ActionButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ReadmePadWrapper = styled.div`
  height: min-content;
  margin: 0 5rem 2rem 5rem;
  line-height: 2;
  background-color: #f3f3f3;
  border-radius: 0.5rem;
  border: 1px solid black;
  padding: 3rem 6rem;
  font-family: Arial, sans-serif;

  @media only screen and (max-width: 768px) {
    padding: 2rem 3rem;
  }
`;

const SocialLink = styled.img`
  height: 3rem;
  width: 3rem;
  margin: 1rem 0.5rem 0 0.5rem;
`;

const ReadmePad = ({ toggleActionButtons }) => {
  const [data, setData] = useState({});
  const [skills, setSkills] = useState([]);
  const [socialLinks, setSocialLinks] = useState([]);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("data"));
    const localSkills = JSON.parse(localStorage.getItem("skills"));
    const localSocialLinks = JSON.parse(localStorage.getItem("socialLinks"));

    setData(localData);
    setSkills(localSkills);
    setSocialLinks(localSocialLinks);
  }, []);

  const markdown = `

  # ${data.name ? data.name.title : ""}  ${data.name ? data.name.name : ""}
  ### ${data.subtitle ? data.subtitle.title : ""}

  &nbsp;
  # About Me
  ---
  ---
  ${
    data.work && data.work.length > 0
      ? data.work
          .map(
            (item) =>
              `## ${item.title || ""} [${item.project || ""}](${
                item.link || ""
              })`
          )
          .join("\n")
      : ""
  }

  &nbsp;
  # Skills
  ---
  ---
  ## ${
    skills && skills.length > 0
      ? skills.map((skill) => `${skill || ""},`).join(" ")
      : ""
  }
`;

  const finalMarkdown =
    markdown +
    `
  # Social Links
  ---
  ---
  ## ${
    socialLinks && socialLinks.length > 0
      ? socialLinks
          .map((link) =>
            link.link !== "" ? `[${link.title || ""}](${link.link || ""})` : ""
          )
          .join("&nbsp; &nbsp;")
      : ""
  }
  `;

  const handleCopyMarkdown = () => {
    const textArea = document.createElement("textarea");
    textArea.value = finalMarkdown;

    document.body.appendChild(textArea);

    textArea.select();
    document.execCommand("copy");

    document.body.removeChild(textArea);

    alert("Markdown content copied to clipboard!");
  };

  const handleDownloadMarkdown = () => {
    const blob = new Blob([finalMarkdown], { type: "text/plain" });

    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "readme.md";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <>
      <ActionButtonWrapper>
        <ActionButton
          icon="arrow-back-outline"
          text="back to edit"
          onClick={toggleActionButtons}
        />
        <ActionButton
          onClick={handleCopyMarkdown}
          icon="copy-outline"
          text="copy markdown"
        />
        <ActionButton
          onClick={handleDownloadMarkdown}
          icon="download-outline"
          text="download readme.md"
        />
      </ActionButtonWrapper>
      <ReadmePadWrapper>
        <Markdown>{markdown}</Markdown>
        &nbsp;
        <h1>Social Links</h1>
        <hr />
        <hr />
        {socialLinks.map((link) => (
          <a href={link.link}>
            <SocialLink src={link.src} alt={link.title} />
          </a>
        ))}
      </ReadmePadWrapper>
    </>
  );
};

export default ReadmePad;
