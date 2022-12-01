import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-size: 16px;
  background-color: #f6f5fc;
  overflow: ${({ hidden }) => (hidden ? 'hidden' : null)};
}

button {
  cursor: pointer;
}

html {
  scroll-behavior: smooth;
}
`;
