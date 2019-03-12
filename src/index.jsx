import React from 'react';
import ReactDom from 'react-dom';

var sectionCss = {
  margin: '0 auto',
  padding: '16px 0 1em 0',

};

var navCss = {
  borderTop:'1px solid #919191',
  borderBottom:'1px solid #919191',
  margin: '10px auto',
  backgroundColor: '#d2d5db',
  height: '2em',
  width: '50%',
  paddingTop: '5px',
  display: 'block',
  textAlign: 'center',
  // float: 'right'
};

var leftColCss = {
  borderLeft: '1px solid #919191',
  borderRight: '1px solid #919191',
  backgroundColor: '#d2d5db',
  minHeight: '820px',
  width: '20%',
  float: 'left',
  textAlign: 'center',
  position: 'relative'
};

var rightColCss = {
  borderLeft: '1px solid #919191',
  borderRight: '1px solid #919191',
  backgroundColor: '#d2d5db',
  minHeight: '820px',
  width: '20%',
  float: 'right',
  textAlign: 'center',
  position: 'relative'
};

var footer = {
  backgroundColor: '#d2d5db',
  borderTop : '1px solid #919191',
  height: '30px',
  width: '100%',
  position: 'fixed',
  bottom: '0px',
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
      <div id="wrapper" style={{height: '100%', position: 'relative'}}>
        <section className='container' style={sectionCss}>
          <div>
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
        </section>
        <footer style={footer}>
          Hey there weenie
        </footer>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'));
