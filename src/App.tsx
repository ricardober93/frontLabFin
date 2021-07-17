import * as React from "react";
import { Box, ChakraProvider, theme } from "@chakra-ui/react";
import RouteWithSubRoutes from "./component/RouterWithSubRoutes";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { UserContext } from './context/UserContext';
import routes from "./router";

export const App = () => {

  const [user, setUser] = React.useState({ id: 0, email: '' });

  return (

    <UserContext.Provider value={{ user, setUser }}>
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
    </UserContext.Provider>
  );
}
