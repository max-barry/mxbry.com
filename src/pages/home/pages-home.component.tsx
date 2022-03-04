import { Scene } from "../../component/scene";
import { Hr } from "../../styles/typography.styles";
import {
  Flag,
  GitHubLink,
  LinkedInLink,
  MediumLink
} from "../../component/miscellaneous.components";
import { Frame } from "./pages-home.styles";

export const Home: React.FC = () => {
  // What's the current year
  const year = new Date().getFullYear().toString();

  return (
    <Frame>
      <Scene
        title={{ text: "Max Barry", color: "primary", as: "h1" }}
        super={year}
        ext={<Flag country="nl" />}
        transition="Fade in"
      >
        <p>
          , experience and product engineer. Works with early-stage businesses
          on product direction; creative development and early-stage growth;
          engineering architecture.
        </p>
        <Hr />
        <LinkedInLink>maxbarry on LinkedIn</LinkedInLink>
        <GitHubLink>max-barry on GitHub</GitHubLink>
        <MediumLink>maxbarry on Medium</MediumLink>
      </Scene>
      <Scene
        title={{ text: "Hims & Hers Inc.", color: "hims" }}
        super="2019-Present Day"
        ext={
          <>
            <Flag country="us" /> <Flag country="nl" />
          </>
        }
        transition="Cut to"
      >
        <p>
          {" "}
          Silicon Valley telehealth technology company that went public in
          November of 2021.
        </p>
        <Hr />
        <MediumLink path="/dynamic-on-demand-image-resizing-using-firebase-hosting-and-google-cloud-functions-to-make-a-cheap-d64e8f5805d1">
          "A Cloudinary-like On-Demand Image Resizer, Using Firebase &amp;
          Google Cloud"
        </MediumLink>
      </Scene>
    </Frame>
  );
};
