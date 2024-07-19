import { ThemeContext } from "../../contexts/theme-context";
import styled from "styled-components";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Container
      style={{ background: theme.footerBackground, color: theme.colorTextCard }}
    >
      <span>Designed and coded by Lucas Tomazini</span>
      <SocialLinks>
        <li>
          <a
            href="https://github.com/LucasTomazin1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/lucas-tomazini-82042a301/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </li>
      </SocialLinks>
    </Container>
  );
};

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  height: 10rem;
  border-top: 2px solid #3d7dca;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  
  span {
    font-size: 2rem;
    font-weight: 700;
  }
`;

const SocialLinks = styled.ul`
  display: flex;
  gap: 5rem;

  li:hover {
  transform: scale(1.1);
  }

  a {
    color: inherit;
    font-size: 2rem;
    transition: transform 0.2s ease-in-out;
  }
`;
