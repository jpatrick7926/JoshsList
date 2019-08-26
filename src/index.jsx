import React from 'react';
import ReactDom from 'react-dom';
import FooterList from './components/FooterList.jsx';
import CommunityList1 from './components/CommunityList1.jsx';
import CommunityList2 from './components/CommunityList2.jsx';

var sectionCss = {
  margin: '0 auto',
  padding: '16px 0 1em 0',
  height: '100%',
  width: '100%',
  // float: 'left',
  overflow: 'hidden'
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
  minHeight: '90%',
  width: '20%',
  float: 'left',
  textAlign: 'center',
  position: 'relative'
};

var rightColCss = {
  borderLeft: '1px solid #919191',
  borderRight: '1px solid #919191',
  backgroundColor: '#d2d5db',
  minHeight: '90%',
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
  clear: 'both'
};

var centerCss = {
  border: '1px dashed red',
  marginLeft: '22%',
  marginRight: '22%',
  textAlign: 'center',
  height: '90%'
  // marginLeft: '20%',
  // marginRight: '20%',
  // width : '50%',
  // clear: 'both'
  // float: 'left'
};

var leftCenterCss = {
border: '1px dashed blue',
width: '30%',
margin: '10px 10px 10px 10px',
minHeight: '90%'
};

var communityCss = {
  height: '160px'
};

var communityList1Css = {
  backgroundColor: 'pink',
  width: '20px',
  float: 'left',
  listStyle: 'none'
};

var communityList2Css = {
  backgroundColor: 'green',
  float: 'right'
}

var liStyle = {
  borderBottom: "1px solid #919191"
}

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
              <div id="leftCenter" style={leftCenterCss}>
                <div id="community" style={communityCss}>
                  <h4 className="sectionBanner" style={{marginTop: '0px', marginBottom: '0px', backgroundColor: '#d2d5db', borderTop:'1px solid #919191',
                  borderBottom:'1px solid #919191'}}>
                    <a href="#">community</a>
                  </h4>
                  <CommunityList1 />
                  <CommunityList2 />
                </div>
              </div>
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
