import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ReadmePadWrapper = styled.div`
  height: 50rem;
  margin: 0 5rem;
  background-color: #f3f3f3;
  border-radius: 0.5rem;
  border: 1px solid black;
  padding: 1rem;
  font-family: Arial, sans-serif;
`;

const DownloadButton = styled.button`
  margin-top: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

const ReadmePad = () => {
  const [data, setData] = useState({});
  const [readmeContent, setReadmeContent] = useState("");

  useEffect(() => {
    // Function to retrieve data from Local Storage
    const getDataFromLocalStorage = () => {
      const storedData = localStorage.getItem("data");
      if (storedData) {
        setData(JSON.parse(storedData));
      }
    };

    getDataFromLocalStorage(); // Call function to retrieve data from Local Storage
  }, []);

  useEffect(() => {
    // Function to generate README content
    const generateReadmeContent = (data) => {
      if (!data || !data.name) {
        return "";
      }

      const { name, subtitle, work, socialLinks } = data;

      const generateWorkSection = () => {
        return work
          .map((item) => {
            return `${item.title} ${
              item.project ? `[${item.project}](${item.link})` : ""
            }`;
          })
          .join("\n");
      };

      const generateSocialLinksSection = () => {
        return socialLinks
          .map((link) => {
            return `[![${link.title}](${link.src})](${link.link})`;
          })
          .join(" ");
      };

      const readmeContent = `
# ${name.title} ${name.name}
${subtitle.title}

## Work
${generateWorkSection()}

## Social Links
${generateSocialLinksSection()}
  `;

      return readmeContent;
    };

    generateReadmeContent(data); // Call function to generate README content
  }, [data]);

  // const handleDownload = () => {
  //   const element = document.createElement("a");
  //   const file = new Blob([readmeContent], { type: "text/markdown" });
  //   element.href = URL.createObjectURL(file);
  //   element.download = "README.md";
  //   document.body.appendChild(element);
  //   element.click();
  // };

  return (
    <>
      <ReadmePadWrapper>
        {readmeContent && (
          <div dangerouslySetInnerHTML={{ __html: readmeContent }} />
        )}
      </ReadmePadWrapper>
    </>
  );
};

export default ReadmePad;
