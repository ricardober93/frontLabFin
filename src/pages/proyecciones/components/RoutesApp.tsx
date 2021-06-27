import { Box, Link } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

export const RoutesApp = ({ route }: any) => {
  return (
    <Link>
    <Box as="a" color="teal.400" p="1">
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
    </Link>
  );
};
