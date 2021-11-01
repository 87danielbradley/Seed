import React from "react";
import NavBarContainer from "./nav_bar/nav_bar_container"
import SignupContainer from "./session/signup_container";
import LoginContainer from "./session/login_container"
import EditProjectContainer from "./project/edit_project_container";

import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../utils/route_utils";

const App = () => (
    <div>
        
        <Route path="/" component={NavBarContainer} />
        <Route path="/projects/:projectId/edit" component={EditProjectContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
        <AuthRoute path="/signup" component={SignupContainer}/>
        
    </div>
);

export default App;