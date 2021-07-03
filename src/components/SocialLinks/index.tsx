import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faStackOverflow,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faChessKnight } from "@fortawesome/free-solid-svg-icons";
import { LinkContainer, SideNav } from "./styled";

const icons = [
  { icon: faGithub, url: "https://github.com/suman-kr" },
  { icon: faTwitter, url: "https://twitter.com/sumankr123" },
  { icon: faStackOverflow, url: "https://stackoverflow.com/" },
  { icon: faLinkedin, url: "https://linkedin.com/in/suman-kr/" },
  { icon: faChessKnight, url: "https://lichess.org/@/sumankr" },
];

export const Social = () => {
  return (
    <>
      <SideNav></SideNav>
      <LinkContainer>
        {icons.map((icon, idx) => (
          <div
            style={{
              paddingBottom: idx === icons.length - 1 ? "2em" : "1em",
              background: "black",
              paddingTop: idx === 0 ? "2em" : "0em",
            }}
          >
            <FontAwesomeIcon
              icon={icon.icon}
              onClick={() => window.open(icon.url)}
              style={{ cursor: "pointer" }}
            />
          </div>
        ))}
      </LinkContainer>
    </>
  );
};
