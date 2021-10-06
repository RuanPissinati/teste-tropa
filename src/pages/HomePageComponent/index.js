import React from 'react';
import { useRouteMatch, Switch, Route, Link } from 'react-router-dom';
import PageComponent from '../../presentation/PageComponent';
import SideBarComponent from '../../presentation/SideBarComponent';
import './style.css';

export default function HomePageComponent() {

    let { path, url } = useRouteMatch();
    // let container = {
    //     justifyContent: 'space-between',
    //     display: 'flex'
    // }
    return (
        <div className="container">
            <SideBarComponent />
            <Switch>
                <Route exact path={path}>
                    <PageComponent />
                </Route>
                <Route path={`${path}/:pageId`}>
                    <PageComponent />
                </Route>
            </Switch>
        </div>

    );
}


