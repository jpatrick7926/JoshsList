import React from 'react';
import ReactDom from 'react-dom';
import FooterList from './components/FooterList.jsx';
import CommunityList1 from './components/CommunityList1.jsx';
import CommunityList2 from './components/CommunityList2.jsx';
import ServicesList1 from './components/ServicesList1.jsx';
import ServicesList2 from './components/ServicesList2.jsx';
import DiscussionList1 from './components/DiscussionList1.jsx';
import DiscussionList2 from './components/DiscussionList2.jsx';
import DiscussionList3 from './components/DiscussionList3.jsx';
import JobsList from './components/JobsList.jsx';
import GigsList1 from './components/GigsList1.jsx';
import GigsList2 from './components/GigsList2.jsx';
import HousingList from './components/HousingList.jsx';
import ForSaleList1 from './components/ForSaleList1.jsx';
import ForSaleList2 from './components/ForSaleList2.jsx';

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
minHeight: '90%',
float: 'left'
};

var rightCenterCss = {
  border: '1px dashed purple',
  width: '18%',
  margin: '10px 10px 10px 10px',
  minHeight: '90%',
  float: 'right'
}

var middleCenterCss = {
  border: '1px dashed green',
  width: '37%',
  marginLeft: '37%',
  marginRight: '18%',
  marginTop: '10px',
  marginBottom: '10px',
  minHeight: '90%'
}

var communityCss = {
  height: '160px'
};

var liStyle = {
  borderBottom: "1px solid #919191"
}

var sectionBanCss = {marginTop: '0px', marginBottom: '0px', backgroundColor: '#d2d5db', borderTop:'1px solid #919191',
borderBottom:'1px solid #919191', textAlign: 'center'}

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
                <div id="services" style={{height: '160px'}}>
                  <h4 className="sectionBanner" style={sectionBanCss}>
                    <a href="#">services</a>
                  </h4>
                  <ServicesList1 />
                  <ServicesList2 />
                </div>
                <div id="discussions" style={{height: '160px'}}>
                  <h4 className="sectionBanner" style={{marginTop: '0px', marginBottom: '0px', backgroundColor: '#d2d5db', borderTop: '1px solid #919191',
                  borderBottom: '1px solid #919191', textAlign: 'center'}}>
                    <a href="#">discussion forums</a>
                  </h4>
                  <DiscussionList1 />
                  <DiscussionList2 />
                  <DiscussionList3 />
                </div>
              </div>
              <div id="rightCenter" style={rightCenterCss}>
                <div id="jobs" style={{height: '400px', backgroundColor: 'pink'}}>
                  <h4 className="sectionBanner" style={sectionBanCss}>
                    <a href="#">jobs</a>
                  </h4>
                  <JobsList />
                </div>
                <div id="gigs" style={{height: '100px'}}>
                  <h4 className="sectionBanner" style={sectionBanCss}>
                    <a href="#">gigs</a>
                  </h4>
                  <GigsList1 />
                  <GigsList2 />
                </div>
              </div>
              <div id="middleCenter" style={middleCenterCss}>
                <div id="housing" style={{height: '175px'}}>
                  <h4 className="sectionBanner" style={sectionBanCss}>
                    <a href="#">housing</a>
                  </h4>
                  <HousingList />
                </div>
                <div id="forSale" style={{height: '320px'}}>
                  <h4 className="sectionBanner" style={sectionBanCss}>
                    <a href="#">for sale</a>
                  </h4>
                  <ForSaleList1 />
                  <ForSaleList2 />
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
