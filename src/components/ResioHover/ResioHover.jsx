import React from "react";
import { useReducer } from "react";

export const ResioHover = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "resio-black",
  });

  return (
    <div
      className={`w-full h-full bg-cover bg-center transition-all duration-300 ${
        state.property1 === "resio-sq"
          ? "bg-[url(https://c.animaapp.com/0dOW9rb9/img/resio-sq.png)]"
          : "bg-[url(https://c.animaapp.com/0dOW9rb9/img/resio-black.png)]"
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
        property1: "resio-sq",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "resio-black",
      };
  }

  return state;
}
