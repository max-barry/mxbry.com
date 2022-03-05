import { Scene } from "../../component/scene";
import { Hr, rhythm } from "../../styles/typography.styles";
import {
  Flag,
  GitHubLink,
  IconBody,
  IdeaIcon,
  LinkBase,
  LinkedInLink,
  MediumLink
} from "../../component/icon-blocks.components";
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
        <IconBody icon={IdeaIcon}>
          NOT FOOTBALL - Big data soccer simulation inspired by blaseball.com
        </IconBody>
        <IconBody icon={IdeaIcon}>
          UNCUT UNCUT GEMS - Machine learning prediction model for consumer
          diamond prices
        </IconBody>
      </Scene>
      <Scene
        title={{ text: "Narative", color: "narative" }}
        super="2018-2019"
        ext={
          <>
            <Flag country="us" /> <Flag country="pt" />
          </>
        }
        transition="Dissolve to"
      >
        <p>
          , Montreal based venture studio with a capital fund built through
          consultancy work to series-D/pre-IPO startups.
        </p>
        <p style={{ marginBottom: 0 }}>
          <strong>Unnamed</strong> early stage green-tech startup I worked with
          on pitching and product roadmapping, during an SRI capital fundraising
          round.
        </p>
        <Hr />
        <GitHubLink path="/eat-with-me">
          EAT WITH ME - Quick-share restaurant favorites inspired by genius.com
          and Eater
        </GitHubLink>
        <IconBody icon={IdeaIcon}>
          MIXTAPED - Letterboxd for your podcast habit
        </IconBody>
      </Scene>
      <Scene
        title={{ text: "Velmer", color: "velmer" }}
        super="2017-2018"
        ext={
          <>
            <Flag country="us" /> <Flag country="gb" />
          </>
        }
        transition="Wipe to"
      >
        <p>
          . Co-founded a business that brought a new contact lens technology to
          the UK. Raised six-figures of seed; launched under its own brand in
          Summer ‘17; and built 5 figure recurring revenue.
        </p>
      </Scene>
      <Scene
        title={{ text: "Route1", color: "route1" }}
        super="2016-2017"
        ext={<Flag country="gb" />}
        transition="Morph to"
      >
        <p>
          , the SAAS hiring technology for white-shoe legal, accounting, and
          banking firms
        </p>
        <Hr />
        <LinkBase
          base="https://www.drivecms.xyz/"
          color="var(--colors-primary-100)"
          path=""
          icon={IdeaIcon}
        >
          Google Drive CMS
        </LinkBase>
        <MediumLink path="/how-i-used-google-drive-and-firebase-to-give-my-static-site-a-cms-7226e01a51b5">
          "How I used Google Drive and Firebase to give my static site a CMS"
        </MediumLink>
      </Scene>
      <Scene
        title={{ text: "Havas Group", color: "havas" }}
        super="2013-2016"
        ext={
          <>
            <Flag country="gb" /> <Flag country="us" where="Boston, MA" />
          </>
        }
        transition="Match to"
      >
        <p>
          , creative production, digital experience design, and product
          management for the Havas Group.
        </p>
        <p style={{ marginBottom: rhythm(3) }}>
          <strong style={{ color: "var(--colors-headings-havas)" }}>
            Arnold Worldwide
          </strong>
          , creative production for brands including Jack Daniels, Carnival,
          Ocean Spray, and CenturyLink.
        </p>
      </Scene>
      <Hr />
      <p style={{ textAlign: "center", fontWeight: 600, marginTop: rhythm(2) }}>
        Fin
      </p>
    </Frame>
  );
};
