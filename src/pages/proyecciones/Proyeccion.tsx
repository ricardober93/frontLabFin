import React from "react";
import { Route, Switch } from "react-router-dom";
import { RoutesApp } from "./components/RoutesApp";

export const Proyeccion = ({ routes }: any) => {
  console.log(routes);
  return (
    <div>
      {routes.map(( route: any, i: number) => (
        <RoutesApp route={route} key={i} />
      ))}
      <Switch>
        {routes.map(( route : any, i: number) => (
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
