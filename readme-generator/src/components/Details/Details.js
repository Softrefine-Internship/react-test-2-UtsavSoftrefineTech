import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "./Input/Input";
import Heading from "./Heading/Heading";
import Category from "./Category/Category";
import SocialLinks from "./SocialLinks/SocialLinks";

const DetailsContainer = styled.div`
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

const Details = () => {
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem("data");
    return storedData
      ? JSON.parse(storedData)
      : {
          name: { title: "Hi 👋, I'm", name: "" },
          subtitle: { title: "A passionate frontend developer from India" },
          work: [
            { title: "🔭 I’m currently working on", project: "", link: "" },
            {
              title: "👯 I’m looking to collaborate on",
              project: "",
              link: "",
            },
            { title: "🤝 I’m looking for help with", project: "", link: "" },
            { title: "🌱 I’m currently learning", skills: "" },
            { title: "💬 Ask me about", topics: "" },
            { title: "📫 How to reach me", email: "" },
            { title: "👨‍💻 All of my projects are available at", portfolio: "" },
            { title: "📝 I regularly write articles on", platforms: "" },
            { title: "📄 Know about my experiences", resume: "" },
            { title: "⚡ Fun fact", fact: "" },
          ],
          skills: [],
          socialLinks: [
            {
              title: "s1",
              placeholder: "github username",
              link: "",
              src: "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png",
            },
            {
              title: "s2",
              placeholder: "dev.to username",
              link: "",
              src: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/84_Dev-512.png",
            },
            {
              title: "s3",
              placeholder: "codesandbox username",
              link: "",
              src: "https://cdn3.iconfinder.com/data/icons/feather-5/24/codesandbox-512.png",
            },
            {
              title: "s4",
              placeholder: "linkedin username",
              link: "",
              src: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
            },
            {
              title: "s5",
              placeholder: "facebook username",
              link: "",
              src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png",
            },
            {
              title: "s7",
              placeholder: "dribble username",
              link: "",
              src: "https://cdn-icons-png.flaticon.com/512/408/408743.png",
            },
            {
              title: "s8",
              placeholder: "hashnode username (with @)",
              link: "",
              src: "https://iconape.com/wp-content/png_logo_vector/cib-hashnode.png",
            },
            {
              title: "s9",
              placeholder: "youtube channel name",
              link: "",
              src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png",
            },
            {
              title: "s10",
              placeholder: "hackerrank username",
              link: "",
              src: "https://cdn.iconscout.com/icon/free/png-256/free-hackerrank-3628233-3031053.png",
            },
            {
              title: "s11",
              placeholder: "leetcode username",
              link: "",
              src: "https://www.svgrepo.com/show/306328/leetcode.svg",
            },
            {
              title: "s12",
              placeholder: "hackerearth username (with @)",
              link: "",
              src: "https://static-00.iconduck.com/assets.00/hackerearth-icon-444x512-0heomwse.png",
            },
            {
              title: "s13",
              placeholder: "Discord invite (only code)",
              link: "",
              src: "https://cdn-icons-png.flaticon.com/512/3670/3670157.png",
            },
            {
              title: "s14",
              placeholder: "twitter username",
              link: "",
              src: "https://w7.pngwing.com/pngs/515/1/png-transparent-twitter-logo-computer-icons-logo-twitter-icon-computer-wallpaper-monochrome-bird-thumbnail.png",
            },
            {
              title: "s15",
              placeholder: "codepen username",
              link: "",
              src: "https://cdn.icon-icons.com/icons2/1906/PNG/512/iconfinder-codepen-4550862_121336.png",
            },
            {
              title: "s16",
              placeholder: "stackoverflow user ID",
              link: "",
              src: "https://cdn-icons-png.flaticon.com/512/2111/2111690.png",
            },
            {
              title: "s17",
              placeholder: "instagram username",
              link: "",
              src: "https://cdn-icons-png.flaticon.com/512/1384/1384031.png",
            },
            {
              title: "s18",
              placeholder: "kaggle username",
              link: "",
              src: "https://cdn.iconscout.com/icon/free/png-256/free-kaggle-3628281-3031974.png",
            },
            {
              title: "s19",
              placeholder: "behance username",
              link: "",
              src: "https://cdn-icons-png.flaticon.com/512/733/733594.png",
            },
            {
              title: "s20",
              placeholder: "medium username (with @)",
              link: "",
              src: "https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Medium-512.png",
            },
            {
              title: "s21",
              placeholder: "codechef username",
              link: "",
              src: "https://static-00.iconduck.com/assets.00/codechef-icon-380x512-r1v87w22.png",
            },
            {
              title: "s22",
              placeholder: "codeforces username",
              link: "",
              src: "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/codeforces-512.png",
            },
            {
              title: "s23",
              placeholder: "topcoder username",
              link: "",
              src: "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/topcoder-512.png",
            },
            {
              title: "s24",
              placeholder: "GFG (<username>/profile)",
              link: "",
              src: "https://static-00.iconduck.com/assets.00/geeksforgeeks-icon-512x264-y71dixbv.png",
            },
            {
              title: "s25",
              placeholder: "RSS feed URL",
              link: "",
              src: "https://cdn-icons-png.flaticon.com/512/3670/3670157.png",
            },
          ],
        };
  });

  const handleInputChange = (category, field, value, index = null) => {
    setData((prevData) => {
      const newData = { ...prevData }; // Copy the object

      if (index !== null) {
        newData[category][index][field] = value; // index passed then update the array
      } else {
        newData[category][field] = value;
      }
      return newData;
    });
  };

  const handleSocialLinkChange = (index, value) => {
    setData((prevData) => {
      const newSocialLinks = [...prevData.socialLinks];
      newSocialLinks[index].link = value;
      return { ...prevData, socialLinks: newSocialLinks };
    });
  };

  const handleSelectedSkillsChange = (selectedSkills) => {
    setData((prevData) => {
      return { ...prevData, skills: selectedSkills };
    });
  };

  // useEffect(() => {
  //   const storedData = localStorage.getItem("data");
  //   if (storedData) {
  //     setData(JSON.parse(storedData));
  //   } else {
  //     localStorage.setItem("data", JSON.stringify(data));
  //   }
  //   console.log("storedData", JSON.parse(storedData));
  // }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  return (
    <DetailsContainer>
      <Section>
        <Heading heading="Details"></Heading>
        <Input
          type="text"
          name="title"
          id="title"
          value={data.name.title}
          onChange={(value) => handleInputChange("name", "title", value)}
          width="10%"
        />
        <Input
          type="text"
          name="name"
          id="name"
          value={data.name.name}
          onChange={(value) => handleInputChange("name", "name", value)}
          placeholder="name"
          width="25%"
        />
      </Section>
      <Section>
        <Heading heading="Subtitle"></Heading>
        <Input
          type="text"
          name="subtitle"
          id="subtitle"
          value={data.subtitle.title}
          onChange={(value) => handleInputChange("subtitle", "title", value)}
          width="40%"
        />
      </Section>
      <Section>
        <Heading heading="Work"></Heading>
        {data.work.map((workItem, index) => (
          <div key={index}>
            <Input
              type="text"
              name="title"
              id="title"
              value={workItem.title}
              width="20%"
              onChange={(value) =>
                handleInputChange("work", "title", value, index)
              }
            />
            <Input
              type="text"
              name="projectName"
              id="projectName"
              value={workItem.project}
              onChange={(value) =>
                handleInputChange("work", "project", value, index)
              }
              width="30%"
              placeholder="project name"
            />
            <Input
              type="text"
              name="projectLink"
              id="projectLink"
              value={workItem.link}
              onChange={(value) =>
                handleInputChange("work", "link", value, index)
              }
              width="30%"
              placeholder="project link"
            />
            <BreakPoint />
          </div>
        ))}
      </Section>
      <Section>
        <Category onSelectedSkillsChange={handleSelectedSkillsChange} />
      </Section>
      <Section>
        <Heading heading="Social"></Heading>
        <SocialLinks
          socialLinks={data.socialLinks}
          onSocialLinkChange={handleSocialLinkChange}
        />
      </Section>
    </DetailsContainer>
  );
};

export default Details;
