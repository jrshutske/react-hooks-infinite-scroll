import React, { Component } from 'react';
import InfiniteList from './InfiniteList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 justify-content-center my-5">
            <InfiniteList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
