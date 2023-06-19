import * as React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/MyUnderwood.ttf"
      as="font"
      type="font/truetype"
      crossOrigin="anonymous"
      key="interFont"
    />,
  ]);
};
