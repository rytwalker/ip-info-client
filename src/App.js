import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import FormView from './views/FormView';
import NotFoundView from './views/NotFoundView';
import ResultsView from './views/ResultsView';

function App(props) {
  return (
    <AppWrapper>
      <Container>
        <Switch>
          <Route exact path="/" render={props => <FormView {...props} />} />
          <Route path="/results" component={ResultsView} />
          <Route component={NotFoundView} />
        </Switch>
      </Container>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
`;

export default App;
