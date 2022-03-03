import { ReactComponent as Medium } from "../../statics/icons/contact-medium.svg";
import { ReactComponent as Github } from "../../statics/icons/contact-github.svg";
import { ReactComponent as LinkedIn } from "../../statics/icons/contact-linkedin.svg";
import { Frame, Major, Minor } from "./contact.styles";

interface Props {}

export const Contact: React.FC<Props> = () => (
  <Frame>
    <Major>Who</Major>
    <Minor>
      This the portfolio of Max Barry, experience and product engineer.
    </Minor>
    <Major as="h2">What</Major>
    <Minor>
      I often work with new or early-stage businesses; talking about product
      direction and creative development; early-stage growth ideas; growing a
      business through new hires; and technical advice and engineering
      implementation.
    </Minor>
    <Major as="h2">Email</Major>
    <Minor>max (at) mxbry.com</Minor>
    <Major as="h2">Further Contact</Major>
    <Minor>
      Get in touch by email, or connect on{" "}
      <a
        href="https://www.linkedin.com/in/maxbarry"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedIn /> LinkedIn.
      </a>{" "}
      My Github is{" "}
      <a href="https://github.com/max-barry" target="_blank" rel="noreferrer">
        <Github /> max-barry.
      </a>{" "}
      I semi-frequently{" "}
      <a href="https://maxbarry.medium.com/" target="_blank" rel="noreferrer">
        <Medium /> write on Medium.
      </a>
    </Minor>
  </Frame>
);
