import React from 'react';
import { Global, css } from '@emotion/core';

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css?family=Montserrat');

        body {
          font-family: 'Montserrat';
        }
      `}
    />
  );
}
