import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { FullWidth } from "./screens/FullWidth";

export const App = () => {
  return (
    <>
      <FullWidth />
      <Analytics />
    </>
  );
};
