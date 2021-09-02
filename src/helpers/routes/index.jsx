import React from 'react';
import {Route} from 'react-router-dom';

function renderRoutes(routesDefinitions) {
    const routesForRender = [];
    routesDefinitions.forEach(({path, exactPath, children}, key) => {
        routesForRender.push(
            <Route exact={exactPath} path={path} key={key}>
                {children}
            </Route>
        );
    });
    return routesForRender;
}

export {renderRoutes};
