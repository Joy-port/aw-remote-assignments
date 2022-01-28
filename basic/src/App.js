import React , { Component } from 'react';
import {Card} from 'react-bootstrap';
import LoginForm from './components/LoginForm';
import ResultListGroup from './components/Result';

class App extends Component {
  render () {
    return (
      <div className='container'>
        <Card className='mb-2'>
          <Card.Body>
            <LoginForm></LoginForm>
          </Card.Body>
        </Card>
        <ResultListGroup></ResultListGroup>
      </div>
    );
  }
};

export default App ;
