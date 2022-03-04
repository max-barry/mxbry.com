import React, { Suspense } from "react";

import { css } from "@emotion/react";

import { lazyNamed } from "../helpers/performance.helpers";
import { A, FONT_BASE_LINE_HEIGHT } from "../styles/typography.styles";

type NationAvailable = "nl" | "gb" | "us" | "pt";

/** Lazy import iconography */
const { ReactComponent: GitHub } = lazyNamed(
  () => import("../statics/icons/contact-github.svg")
);

const { ReactComponent: Medium } = lazyNamed(
  () => import("../statics/icons/contact-medium.svg")
);

const { ReactComponent: LinkedIn } = lazyNamed(
  () => import("../statics/icons/contact-linkedin.svg")
);

const { ReactComponent: FlagNl } = lazyNamed(
  () => import("../statics/icons/flag-netherlands.svg")
);

const { ReactComponent: FlagPt } = lazyNamed(
  () => import("../statics/icons/flag-portugal.svg")
);

const { ReactComponent: FlagGb } = lazyNamed(
  () => import("../statics/icons/flag-united-kingdom.svg")
);

const { ReactComponent: FlagUs } = lazyNamed(
  () => import("../statics/icons/flag-united-states.svg")
);

/** Fallback for the icons that are lazy loaded */
const FallbackIcon = (
  <span
    data-fallback-icon
    style={{ width: `calc(1em * ${FONT_BASE_LINE_HEIGHT})` }}
  />
);

const LinkBase: React.FC<{
  color: string;
  path: string;
  base: string;
  icon: React.FunctionComponent<any>;
}> = ({ children, icon: Icon, color, base, path = "/" }) => (
  <p>
    <A
      href={`${base}${path}`}
      style={{ display: "grid", gridTemplateColumns: "max-content 1fr" }}
    >
      <Suspense fallback={FallbackIcon}>
        <Icon style={{ color }} />
      </Suspense>
      {children}
    </A>
  </p>
);

/** Shortcut to links for text */
export const LinkedInLink: React.FC<{ path?: string }> = ({
  children,
  path = "/"
}) => (
  <LinkBase
    color="#2867B2"
    icon={LinkedIn}
    base="https://www.linkedin.com/in/maxbarry"
    path={path}
  >
    {children}
  </LinkBase>
);

export const GitHubLink: React.FC<{ path?: string }> = ({
  children,
  path = "/"
}) => (
  <LinkBase
    color="#BD2C00"
    icon={GitHub}
    base="https://github.com/max-barry"
    path={path}
  >
    {children}
  </LinkBase>
);

export const MediumLink: React.FC<{ path?: string }> = ({
  children,
  path = "/"
}) => (
  <LinkBase
    color="currentColor"
    icon={Medium}
    base="https://www.linkedin.com/in/maxbarry"
    path={path}
  >
    {children}
  </LinkBase>
);

/** Flags */
export const Flag: React.FC<{ country: NationAvailable; where?: string }> = ({
  country,
  where
}) => {
  /** Establish the icon */
  const Icon = (
    {
      nl: FlagNl,
      pt: FlagPt,
      gb: FlagGb,
      us: FlagUs
    } as { [K in NationAvailable]: React.FunctionComponent<any> }
  )[country];

  /** Establish the label */
  const label =
    where ||
    (
      {
        nl: "Amsterdam",
        pt: "Lisbon",
        gb: "London",
        us: "Portland"
      } as { [K in NationAvailable]: string }
    )[country];

  return (
    <>
      <Suspense fallback={FallbackIcon}>
        <Icon style={{ transform: "translateY(-0.125em)" }} />
      </Suspense>
      {label}
    </>
  );
};
