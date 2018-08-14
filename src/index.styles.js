import { injectGlobal } from 'react-emotion';
import { shevy, fontFamily, fontWeights } from './settings';

const { content, ...headings } = shevy;

// TODO : Implement : fontFace
// TODO : Ramda can probably clean this

const hs = [1, 2, 3, 4, 5, 6]
    .map(
        size => `
            h${size} {
                font-size: ${headings[`h${size}`].fontSize};
                line-height: ${headings[`h${size}`].lineHeight};
                margin-bottom: ${headings[`h${size}`].marginBottom};
                font-weight: ${
                    size <= 3 ? fontWeights.heavy : fontWeights.medium
                };
            }
    `
    )
    .join('\n');

const typography = `
    html, body {
        font-size: ${content.fontSize};
        line-height: ${content.lineHeight};
        font-family: ${fontFamily};
        font-weight: ${content.fontWeight};
        // letter-spacing: 0.01em;
    }

    p {
        font-size: ${content.fontSize};
        line-height: ${content.lineHeight};
        margin-bottom: ${content.marginBottom};
    }
    
    ${hs}

    button, input {
        font-family: ${fontFamily};
    }

    em {font-style: normal;}
`;

injectGlobal`
    html {
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body, h1, h2, h3, h4, h5, h6, p, ol, ul {
        margin: 0;
        padding: 0;
        font-weight: normal;
    }

    ol, ul {
        list-style: none;
        margin-bottom: 0;
    }

    img {
        max-width: 100%;
        height: auto;
        display: block;
    }

    iframe, figure {
        border: 0;
        margin: 0;
        display: block;
        box-shadow: none;
    }

    .ReactModal__Body--open {
        overflow: hidden;
        position: fixed;
        width: 100%;
        height: 100%;
    }

    ${typography}
`;
