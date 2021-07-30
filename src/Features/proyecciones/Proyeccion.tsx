import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { RoutesApp } from "./components/RoutesApp";

export const Proyeccion = ({ routes }: any) => {
  return (
    <div>
      <Flex>
        <Box p="2">
          <Heading size="md">LABFIN</Heading>
        </Box>
        <Spacer />
        <Box d="flex" alignItems="center">
          {routes.map((route: any, i: number) => (
            <RoutesApp route={route} key={i} />
          ))}
        </Box>
      </Flex>

      <Switch>
        {routes.map((route: any, i: number) => (
          <Route
            exact
            key={i}
            path={route?.path}
            component={route?.component}
          />
        ))}
      </Switch>
    </div>
  );
};
