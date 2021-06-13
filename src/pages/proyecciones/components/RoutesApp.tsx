import React from "react";
import { NavLink } from "react-router-dom";

export const RoutesApp = ({route}: any) => {
  return (
    <NavLink
      to={route?.path}
      activeStyle={{
        fontWeight: "bold",
        color: "red",
      }}
    >
      {route?.name}
    </NavLink>
  );
};
