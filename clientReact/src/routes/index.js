import React from 'react';
import { Route, Switch } from "react-router-dom";

import Profile from '../components/container/Profile';
import Achievements from '../components/container/Achievements.js';
import Home from '../pages/Home';
import Login from '../pages/Authentication/Login';
import Register from '../pages/Authentication/Register';
import Logout from '../pages/Authentication/Logout';



// import Song from '../components/container/Song';
import Song from '../pages/Songs/Songs';
import SingleSong from '../pages/Songs/SingleSong';
import EditSong from '../pages/Songs/EditSong';



const MissingPage = () => <h1>Missing Page: Error 404</h1>;


const routes = (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/song" component={Song}/>
        <Route path="/song/:id/edit" component={EditSong}/>
        <Route path="/song/:id" component={SingleSong}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/achievements" component={Achievements}/>
        <Route exact path="/logout" component={Logout}/>
        <Route component={MissingPage} />
    </Switch>
);

export default routes;