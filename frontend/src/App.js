import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomeView from './modules/views/HomeView';
import TemplateView from './modules/views/TemplateView';
import UseTemplateView from './modules/views/UseTemplateView';
import FinishedView from './modules/views/FinishedView';
import Login from './modules/views/LogInView';
import Header from './modules/components/Header';
import SignUpView from './modules/views/SignUpView';
import CustomiseTemplateView from './modules/views/CustomiseTemplateView';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import CreateTemplateView from './modules/views/CreateTemplateView';

function App() {
  const [user, setUser] = useState();

  if(!user) {
    return (
    <BrowserRouter>
      <Switch>
        <Route path="/SignUp">
            <SignUpView />
          </Route>
        <Route>
          <Login setUser={setUser} />
        </Route>
      </Switch>
    </BrowserRouter>
    )
    }
  
  return (
    <BrowserRouter>
      <Header/>
      <Container>
        <Switch>
          <Route path="/Templates">
            <TemplateView user={user} />
          </Route>

          <Route path="/Finished">
            <FinishedView  user={user}/>
          </Route>
          
          <Route path="/createTemplate">
            <CreateTemplateView user={user}/>
          </Route>

          {/* <Route path="/CustomiseTemplate">
            <CustomiseTemplateView template={template} />
          </Route> */}

          <Route path="/">
            <HomeView user={user} />
          </Route>
          
          {/* <Route path ="/useTempalte">
            <UseTemplateView />
          </Route> */}
          {/* <Route path="/Login">
            <Login/>
          </Route> */}
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
