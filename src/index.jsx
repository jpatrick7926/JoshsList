import React from 'react';
import ReactDom from 'react-dom';
import FooterList from './components/FooterList.jsx';

var sectionCss = {
  margin: '0 auto',
  padding: '16px 0 1em 0',
  height: '100%',
  width: '100%'
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
  bottom: '0px'
  // textAlign: 'center'
};

var centerCss = {
  border: '1px dashed red',
  margin: '0',
  width : '50%'
  // float: 'left'
};

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <div id="wrapper" style={{height: '100%', position: 'relative', border:'1px solid black'}}>
        <section className='container' style={sectionCss}>

            <nav id="topBanner" style={navCss}>
              <h3 style={{verticalAlign: 'baseline', margin: '0px', textAlign: 'center'}}>Josh's Room</h3>
            </nav>

            <div id="leftColumn" style={leftColCss}>
              <p>hey there weenie</p>
            </div>

            <div id="rightColumn" style={rightColCss}>
              <p>hey there weenie</p>
            </div>

            <div id="centerContainer" style={centerCss}>
              YAY AREA
            </div>

        </section>
        <footer style={footer}>
          <FooterList />
        </footer>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'));
