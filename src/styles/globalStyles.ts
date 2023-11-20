// src/styles/globalStyles.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  :root {
    --color-primary: #5B8DF7; 
    --color-secondary: #FFD700; 
    --color-accent: #F53F3F; 
    --color-background: #ffffff; 
    --color-foreground: #f0f0f0; 
    --color-text: #333333; 
    --color-text-secondary: #777777; 
    --color-text-inverted: #ffffff; 
    --color-border: #dddddd; 
  }
  
  --font-family-sans-serif: 'Open Sans', sans-serif;
  --font-family-serif: 'Merriweather', serif;
  --font-family-monospace: 'Monaco', monospace;

  body {
    margin: 0;
    padding: 0;
    font-family: Montserrat;
    background-color: var(--color-background);
    color: var(--color-text);
    line-height: 1.6;
  }

  a {
    color: var(--color-primary);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-family-serif);
    color: var(--color-primary);
  }

  button, input, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  button {
    cursor: pointer;
    background-color: var(--color-primary);
    color: var(--color-text-inverted);
    border: none;
    padding: 0.5em 1em;
    border-radius: 4px;
    transition: background-color 0.3s;

    &:hover {
      background-color: var(--color-secondary);
    }
  }

  .text-center {
    text-align: center;
  }

`;

