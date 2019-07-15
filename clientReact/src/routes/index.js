import React from 'react';
import { Route, Switch } from "react-router-dom";

import Song from '../components/container/Song';
import Profile from '../components/container/Profile';
import Achievements from '../components/container/Achievements.js';
import SongDetail from '../components/container/SongDetail';
import Login from '../components/container/Login';
import Register from '../components/container/Register';



const MissingPage = () => <h1>Missing Page: Error 404</h1>;
const Home = () => <h1>home!</h1>;
const Logout = () => <h1>{localStorage.clear()}Logged out</h1>;


const routes = (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/song" component={Song}/>
        <Route path="/song/:id" component={SongDetail}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/achievements" component={Achievements}/>
        <Route exact path="/logout" component={Logout}/>
        <Route component={MissingPage} />
    </Switch>
);

export default routes;