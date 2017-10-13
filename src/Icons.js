/* eslint import/prefer-default-export: 0 */

import React from 'react';

const iconProps = {
  height: 48,
  width: 48,
  fill: '#ffffff',
};

export const CloseIcon = ({ style }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...iconProps} style={style}>
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

export const FullscreenExitIcon = ({ style }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...iconProps} style={style}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
  </svg>
);

export const FullscreenIcon = ({ style }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...iconProps} style={style}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
  </svg>
);

export const ArrowLeftIcon = ({ style }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...iconProps} style={style}>
    <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
    <path d="M0-.5h24v24H0z" fill="none" />
  </svg>
);

export const ArrowRightIcon = ({ style }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...iconProps} style={style}>
    <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
    <path d="M0-.25h24v24H0z" fill="none" />
  </svg>
);
