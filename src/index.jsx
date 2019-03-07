import React from 'react';
import ReactDom from 'react-dom';

var navCss = {
              borderTop:'1px solid #919191',
              borderBottom:'1px solid #919191',
              margin: '0px',
              marginRight: '15%',
              marginLeft: '15%',
              marginTop: '10px',
              backgroundColor: '#d2d5db',
              height: '2em',
              width: '62%',
              paddingTop: '5px',
              display: 'block',
              // float: 'right'
};

var leftColCss = {
  borderLeft: '1px solid #919191',
  borderRight: '1px solid #919191',
  backgroundColor: '#d2d5db',
  minHeight: '820px',
  width: '20%',
  float: 'left',
  textAlign: 'center'
};

var rightColCss = {
  borderLeft: '1px solid #919191',
  borderRight: '1px solid #919191',
  backgroundColor: '#d2d5db',
  minHeight: '820px',
  width: '20%',
  float: 'right',
  textAlign: 'center'
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

        <div id="leftColumn" style={leftColCss}>
          <p>hey there weenie</p>
        </div>
        <div id="rightColumn" style={rightColCss}>
          <p>hey there weenie</p>
        </div>

      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'));
