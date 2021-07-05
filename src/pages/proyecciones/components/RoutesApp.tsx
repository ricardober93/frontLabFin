import { Box } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

export const RoutesApp = ({ route }: any) => {
  return (
    <Box color="teal.400" p="1">
      <NavLink

        to={route?.path}
        activeStyle={{
          fontWeight: "bold",
          color: "teal", 
        }}
      >
        {route?.name}
      </NavLink>
      </Box>
  );
};
