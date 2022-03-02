import styled from "@emotion/styled";
import { up } from "styled-breakpoints";

import { container } from "../../helpers/style-shortcuts.helpers";
import { rhythm } from "../../styles/typography.styles";

export const Major = styled.h1`
  margin-bottom: 0;
`;

export const Minor = styled.h3`
  font-weight: 300;
  position: relative;
  padding-left: ${rhythm(1)};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 1px;
    background-color: var(--colors-primary-110);
  }

  &:not(:last-child) {
    margin-bottom: ${rhythm(3 / 2)};
  }

  ${up("medium")} {
    margin-bottom: 0;
    padding-left: 0;
    padding-top: ${rhythm(1 / 4)};

    &::before {
      display: none;
    }

    &:not(:last-child) {
      margin-bottom: 0;
    }
  }

  a {
    --pad: ${rhythm(1 / 4)};

    position: relative;
    display: inline-flex;
    align-items: center;
    background-color: var(--colors-neutral-10);
    border-radius: 3px;
    cursor: pointer;
    padding: 0 var(--pad);
    gap: var(--pad);
    font-weight: 400;
    overflow: hidden;
  }

  a svg {
    top: 1px;
    position: relative;
    width: 1em;
  }

  a::before,
  a::after {
    content: "";
    width: 1em;
    height: 1em;
    position: absolute;
    left: var(--pad);
    top: 50%;
    opacity: 0;
    transform: translate3d(calc(-100% - var(--pad)), -50%, 0);
  }

  a::before {
    border-radius: 4px;
    background-color: var(--colors-primary-110);
  }

  a::after {
    content: "go";
    font-size: 0.4em;
    width: auto;
    color: white;
    line-height: 1;
    padding-left: 0.6em;
    font-weight: 500;
  }

  a svg,
  a::before,
  a::after {
    will-change: transform, opacity;
    transition: transform 140ms ease-in, opacity 100ms ease-in;
  }

  &:hover,
  &:focus {
    svg,
    &::before,
    &::after {
      transition: transform 250ms ease-out, opacity 80ms ease-out;
    }
  }

  ${up("medium")} {
    a:hover,
    a:focus {
      svg {
        transform: translateX(100%);
        opacity: 0;
      }

      &::before,
      &::after {
        transform: translate3d(0%, -50%, 0);
        opacity: 1;
      }
    }
  }
`;

export const Frame = styled.div`
  display: grid;
  grid-template-columns: 100%;
  align-items: start;

  ${container}

  ${up("medium")} {
    grid-gap: ${rhythm(3 / 2)} ${rhythm(2)};
    grid-template-columns: min-content 1fr;
  }
`;
