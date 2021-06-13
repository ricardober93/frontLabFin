import React from "react";
import { NavLink } from "react-router-dom";

export const RoutesApp = (route: any) => {
    console.log(route.route);
  return (
    <NavLink
    to={route.route?.path}
      activeStyle={{
        fontWeight: "bold",
        color: "red",
      }}
    >
      {route.route?.name}
    </NavLink>
  );
};
