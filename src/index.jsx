import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <div>
        <h1>Hello World!</h1>
        <p>you finally did it weenie</p>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'));
