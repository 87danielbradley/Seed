import React from "react";
import NavBarContainer from "./nav_bar/nav_bar_container"
import SignupContainer from "./session/signup_container";
import LoginContainer from "./session/login_container"
import EditProjectContainer from "./project/edit_project_container";
import ShowProjectContainer from "./project/show_project_container";
import IndexProjectContainer from "./project/index_project_container";
import CreateProjectContainer from "./project/create_project_container";

import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../utils/route_utils";
import DefaultContainer from "./default/default_container";
import HomeContainer from "./home/home_container";


const App = () => (
    <div>
        
        <Route path="/" component={NavBarContainer} />
        <Switch>
            <Route exact path="/" component={HomeContainer} />
            <ProtectedRoute path="/projects/:projectId/edit" component={EditProjectContainer} />
            <Route exact path="/projects/:projectId" component={ShowProjectContainer} />
            <Route exact path="/projects" component={IndexProjectContainer} />
            <ProtectedRoute path="/start" component={CreateProjectContainer} />
            <AuthRoute path="/login" component={LoginContainer} />
            <AuthRoute path="/signup" component={SignupContainer}/>
            <Route path="/:default" component={DefaultContainer} />
        </Switch>
        
        
    </div>
);

export default App;