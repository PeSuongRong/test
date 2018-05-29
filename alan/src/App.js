import React, { Component } from 'react';
import Add from './Component/Add';
import Search from './Component/Search';
import List from './Component/List';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
      <div className="row">
        <div className="col-sm-12 col-xs-12">
          <div className="box">
            <div className="box-body">
              <div className="post-step1 form-post edit-prof" id="content_adds">
                <div className="row">
                  <div className="col-sm-12 col-xs-12 text-center text-uppercase">
                    <h1>Thêm sản phẩm</h1> <br /> <br />
                  </div>
                </div>
                <div className="row">
                  <Search></Search>
                  <Add></Add>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <List></List>
      </div>
      </div>
    );
  }
}

export default App;
