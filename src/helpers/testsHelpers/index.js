import { Router } from 'react-router-dom'
import React from 'react'
import { createBrowserHistory } from 'history'
import { mount, shallow } from 'enzyme/build'
import { Provider } from 'mobx-react'
import { MOBX_PROVIDER, MOUNT, ROUTER, SHALLOW } from './consts'

function wrapWithRouter (children) {
    return (<Router history={createBrowserHistory()}>{children}</Router>)
}


function wrapWithMobxProvider (children, stores) {
    return (<Provider {...stores}>{children}</Provider>)
}

function _wrap (wrapper, children, options) {
    switch (wrapper) {
        case ROUTER:
            return wrapWithRouter(children)
        case MOBX_PROVIDER:
            if (options && options.stores) {
                return wrapWithMobxProvider(children, options.stores)
            }
            return
        case SHALLOW:
            return shallow(children)
        case MOUNT:
            if (options && options.mount) {
                return mount(children, options.mount)
            }
            return mount(children)
        default:
            return
    }
}

/**
 * mounting is default
 * usage: wrapMe([THEME_PROVIDER, MOBX_PROVIDER], <div/>)
 * wraps from left to right
 * @param wrappers - names of wrappers, order is important.
 * @param component - component you want to wrap
 * @returns {*}
 */
function wrapMe (wrappers, component, options) {
    if (!wrappers.includes(MOUNT) && !wrappers.includes(SHALLOW)) {
        wrappers.push(MOUNT)
    }
    wrappers.forEach((wrapper) => {
        component = _wrap(wrapper, component, options)
    })
    return component
}

export { wrapMe }
