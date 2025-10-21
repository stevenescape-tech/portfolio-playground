import React from "react";
import { useReducer } from "react";

export const Component = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "bhc-black",
  });

  return (
    <div
      className={`w-full h-full bg-cover bg-center transition-all duration-300 ${
        state.property1 === "bhc-sq"
          ? "bg-[url(https://c.animaapp.com/0dOW9rb9/img/image.png)]"
          : "bg-[url(https://c.animaapp.com/0dOW9rb9/img/bhc-black-1@2x.png)]"
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
        property1: "bhc-sq",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "bhc-black",
      };
  }

  return state;
}
