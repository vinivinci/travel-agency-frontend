// src/styles/globalStyles.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* Reset CSS */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  /* Variáveis de cores */
  :root {
    --color-primary: #5B8DF7; // Cor primária, exemplo: azul
    --color-secondary: #FFD700; // Cor secundária, exemplo: amarelo ouro
    --color-accent: #F53F3F; // Cor de acento, exemplo: vermelho
    --color-background: #ffffff; // Cor de fundo
    --color-foreground: #f0f0f0; // Cor de fundo secundária
    --color-text: #333333; // Cor do texto principal
    --color-text-secondary: #777777; // Cor do texto secundária
    --color-text-inverted: #ffffff; // Cor do texto em fundos escuros
    --color-border: #dddddd; // Cor da borda
  }
  
  /* Fontes */
  --font-family-sans-serif: 'Open Sans', sans-serif;
  --font-family-serif: 'Merriweather', serif;
  --font-family-monospace: 'Monaco', monospace;

  /* Tipografia Base */
  body {
    margin: 0;
    padding: 0;
    font-family: Montserrat;
    background-color: var(--color-background);
    color: var(--color-text);
    line-height: 1.6;
  }

  /* Links */
  a {
    color: var(--color-primary);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }

  /* Títulos */
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-family-serif);
    color: var(--color-primary);
  }

  /* Botões e inputs */
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

  /* Utilidades */
  .text-center {
    text-align: center;
  }

  /* Adicione mais utilidades conforme necessário... */
`;

