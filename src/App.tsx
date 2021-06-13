import * as React from "react";
import { Box, ChakraProvider, theme } from "@chakra-ui/react";
import RouteWithSubRoutes from "./component/RouterWithSubRoutes";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import routes from "./router";

export const App = () => (
  <Router>
    <ChakraProvider theme={theme}>
      <Box as="main" minH="100vh" p={3}>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </Box>
    </ChakraProvider>
  </Router>
);
