import React from 'react';
import ReactDom from 'react-dom';

var navCss = {
              borderTop:'1px solid #919191',
              borderBottom:'1px solid #919191',
              marginRight: '15%',
              marginLeft: '15%',
              marginTop: '10px',
              backgroundColor: '#d2d5db',
              height: '2em',
              paddingTop: '5px'
            };

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <div id="wrapper" style={{border: '1px solid black', height: '100%', position: 'relative'}}>
        <nav id="topBanner" style={navCss}>
          <h3 style={{verticalAlign: 'baseline', margin: '0px', textAlign: 'center'}}>Josh's Room</h3>
        </nav>

      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'));
