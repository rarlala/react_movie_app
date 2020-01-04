import React from 'react';
import PropTypes from "prop-types"
import { render } from 'react-dom';

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  componentWillMount(){
    setTimeout(() => {
      this.setState({isLoading: false})
    }, 6000)
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading" : "We are ready"}</div>
  }
}

export default App;
