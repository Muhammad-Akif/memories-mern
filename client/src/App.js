import React from 'react';
import { Container } from '@material-ui/core';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="md">
          <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
