import React from "react";
import { useReducer } from "react";

export const JpmcHover = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "jpmorgan-black",
  });

  return (
    <div
      className={`w-full h-full bg-cover bg-center transition-all duration-300 ${
        state.property1 === "jpmc-sq"
          ? "bg-[url(https://c.animaapp.com/0dOW9rb9/img/jpmc-sq.png)]"
          : "bg-[url(https://c.animaapp.com/0dOW9rb9/img/jpmorgan-black.png)]"
      } ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    />
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "jpmc-sq",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "jpmorgan-black",
      };
  }

  return state;
}
