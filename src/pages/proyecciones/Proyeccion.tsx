import { Nabvar } from 'component/Nabvar/Nabvar'
import React from 'react'
import {   Route, Switch } from 'react-router-dom'

export const Proyeccion = ({routes}:any ) => {
    console.log(routes)
    return (
        <div>
            <Nabvar />
            <Switch>
            {routes.map(({route}:any) => (
                <Route exact key={route?.name} path={route?.path} component={route?.component} />
              ))}
        </Switch>
        </div>
    )
}
