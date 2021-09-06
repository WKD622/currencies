import React from 'react';
import {Route} from 'react-router-dom';
import {Helmet} from 'react-helmet'

function renderRoutes(routesDefinitions) {
    const routesForRender = [];
    routesDefinitions.forEach(({path, exactPath, children, pageTitle}, key) => {
        routesForRender.push(
            <Route exact={exactPath} path={path} key={key}>
                <Helmet><title>{pageTitle}</title></Helmet>
                {children}
            </Route>
        );
    });
    return routesForRender;
}

export {renderRoutes};
