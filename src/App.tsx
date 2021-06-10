import * as React from "react";
import { ChakraProvider, Grid, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import RouteWithSubRoutes from "./component/RouterWithSubRoutes";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import routes from "./router";

export const App = () => (
  <Router>
    <ChakraProvider theme={theme}>
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </Grid>
    </ChakraProvider>
  </Router>
);
