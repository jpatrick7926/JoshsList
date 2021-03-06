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
  width: '15%',
  float: 'left',
  textAlign: 'center',
  position: 'relative',
  marginLeft: '80px'
};

var rightColCss = {
  borderLeft: '1px solid #919191',
  borderRight: '1px solid #919191',
  backgroundColor: '#d2d5db',
  minHeight: '90%',
  width: '10%',
  float: 'right',
  textAlign: 'center',
  position: 'relative',
  marginRight: '140px'
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
width: '30%',
margin: '10px 10px 10px 10px',
minHeight: '90%',
float: 'left'
};

var rightCenterCss = {
  width: '18%',
  margin: '10px 10px 10px 10px',
  minHeight: '90%',
  float: 'right'
}

var middleCenterCss = {
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
borderBottom:'1px solid #919191', textAlign: 'center', fontFamily: 'Arial'}

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
              <h2 style={{marginTop: '5px'}}><a href="#">joshslist</a></h2>
              <p style={{marginBottom: '5px'}}><a style={{textDecoration: 'none', fontFamily: 'arial'}} href="#">create a posting</a></p>
              <p style={{marginTop: '0'}}><a style={{textDecoration: 'none', fontFamily: 'arial'}} href="#">my account</a></p>
              <input type="search" id="siteSearch" placeholder="search joshslist"/>
              <p style={{marginTop: '10px', marginBottom: '5px'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '12px'}} href="#">help, faq, abuse, legal</a></p>
              <p style={{marginTop: '0', marginBottom: '5px'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '12px'}} href="#">avoid scams & fraud</a></p>
              <p style={{marginTop: '0', marginBottom: '5px'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '12px'}} href="#">personal safety tips</a></p>
              <p style={{marginTop: '0', marginBottom: '5px'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '12px'}} href="#">terms of use</a></p>
              <p style={{marginTop: '0', marginBottom: '5px'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '12px'}} href="#">privacy policy</a></p>
              <p style={{marginTop: '0', marginBottom: '20px'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '12px'}} href="#">system status</a></p>
              <p style={{marginTop: '0', marginBottom: '5px'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '12px'}} href="#">about craigslist</a></p>
              <p style={{marginTop: '0', marginBottom: '5px'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '12px'}} href="#">craigslist is hiring in sf</a></p>
              <p style={{marginTop: '0', marginBottom: '5px'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '12px'}} href="#">craigslist open source</a></p>
              <p style={{marginTop: '0', marginBottom: '5px'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '12px'}} href="#">craigslist blog</a></p>
              <p style={{marginTop: '0', marginBottom: '5px'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '12px'}} href="#">best-of-craigslist</a></p>
              <p style={{marginTop: '0', marginBottom: '5px'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '12px'}} href="#">craigslist TV</a></p>
              <p style={{marginTop: '0', marginBottom: '5px'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '12px'}} href="#">"craigslist joe"</a></p>
              <p style={{marginTop: '0', marginBottom: '5px'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '12px'}} href="#">craig connects</a></p>
              <p style={{marginTop: '0', marginBottom: '15px'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '12px'}} href="#">progressive directory</a></p>
              <ul style={{listStyle: 'none', padding: '0'}}>
                <li style={{display: 'inline', marginRight: '20px'}}><a style= {{textDecoration: 'none', fontFamily: 'arial', fontSize: '12px'}} href="#">weather</a></li>
                <li style={{display: 'inline', marginRight: '20px'}}><a style= {{textDecoration: 'none', fontFamily: 'arial', fontSize: '12px'}} href="#">quake</a></li>
                <li style={{display: 'inline'}}><a style= {{textDecoration: 'none', fontFamily: 'arial', fontSize: '12px'}} href="#">tide</a></li>
              </ul>


            </div>

            <div id="rightColumn" style={rightColCss}>
              <select style={{marginTop: '10px', marginBottom: '10px'}}>
                <option>english</option>
                <option>deutsch</option>
                <option>espanol</option>
                <option>francais</option>
                <option>italiano</option>
                <option>portugues</option>
                <option>suomi</option>
                <option>svenska</option>
                <option>tieng viet</option>
                <option>turkce</option>
                <option>pyccknn</option>
              </select>

              <p style={{marginTop: '0px', marginBottom: '5px', backgroundColor: '#FFFFFF', borderTop:'1px solid #919191',
              borderBottom:'1px solid #919191', textAlign: 'center', fontFamily: 'Arial', fontSize: '12px'}}><strong>nearby cl</strong></p>
              <p style={{marginTop: '0', marginBottom: '2px', lineHeight: '0.7'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '10px'}} href="#">bakersfield</a></p>
              <p style={{marginTop: '0', marginBottom: '2px', lineHeight: '0.7'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '10px'}} href="#">chico</a></p>
              <p style={{marginTop: '0', marginBottom: '2px', lineHeight: '0.7'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '10px'}} href="#">fresno</a></p>
              <p style={{marginTop: '0', marginBottom: '2px', lineHeight: '0.7'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '10px'}} href="#">gold country</a></p>
              <p style={{marginTop: '0', marginBottom: '2px', lineHeight: '0.7'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '10px'}} href="#">hanford</a></p>
              <p style={{marginTop: '0', marginBottom: '2px', lineHeight: '0.7'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '10px'}} href="#">humboldt</a></p>
              <p style={{marginTop: '0', marginBottom: '2px', lineHeight: '0.7'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '10px'}} href="#">inland empire</a></p>
              <p style={{marginTop: '0', marginBottom: '2px', lineHeight: '0.7'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '10px'}} href="#">klamath falls</a></p>
              <p style={{marginTop: '0', marginBottom: '2px', lineHeight: '0.7'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '10px'}} href="#">las vegas</a></p>
              <p style={{marginTop: '0', marginBottom: '2px', lineHeight: '0.7'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '10px'}} href="#">los angeles</a></p>
              <p style={{marginTop: '0', marginBottom: '2px', lineHeight: '0.7'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '10px'}} href="#">medford</a></p>
              <p style={{marginTop: '0', marginBottom: '2px', lineHeight: '0.7'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '10px'}} href="#">mendocino co</a></p>
              <p style={{marginTop: '0', marginBottom: '2px', lineHeight: '0.7'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '10px'}} href="#">merced</a></p>
              <p style={{marginTop: '0', marginBottom: '2px', lineHeight: '0.7'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '10px'}} href="#">modesto</a></p>
              <p style={{marginTop: '0', marginBottom: '2px', lineHeight: '0.7'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '10px'}} href="#">monterey</a></p>
              <p style={{marginTop: '0', marginBottom: '2px', lineHeight: '0.7'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '10px'}} href="#">orange co</a></p>
              <p style={{marginTop: '0', marginBottom: '2px', lineHeight: '0.7'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '10px'}} href="#">palm springs</a></p>
              <p style={{marginTop: '0', marginBottom: '2px', lineHeight: '0.7'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '10px'}} href="#">redding</a></p>
              <p style={{marginTop: '0', marginBottom: '2px', lineHeight: '0.7'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '10px'}} href="#">reno</a></p>
              <p style={{marginTop: '0', marginBottom: '2px', lineHeight: '0.7'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '10px'}} href="#">roseburg</a></p>
              <p style={{marginTop: '0', marginBottom: '2px', lineHeight: '0.7'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '10px'}} href="#">sacramento</a></p>
              <p style={{marginTop: '0', marginBottom: '2px', lineHeight: '0.7'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '10px'}} href="#">san luis obispo</a></p>
              <p style={{marginTop: '0', marginBottom: '2px', lineHeight: '0.7'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '10px'}} href="#">santa barbara</a></p>
              <p style={{marginTop: '0', marginBottom: '2px', lineHeight: '0.7'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '10px'}} href="#">santa maria</a></p>
              <p style={{marginTop: '0', marginBottom: '2px', lineHeight: '0.7'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '10px'}} href="#">siskiyou co</a></p>
              <p style={{marginTop: '0', marginBottom: '2px', lineHeight: '0.7'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '10px'}} href="#">stockton</a></p>
              <p style={{marginTop: '0', marginBottom: '2px', lineHeight: '0.7'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '10px'}} href="#">susanville</a></p>
              <p style={{marginTop: '0', marginBottom: '2px', lineHeight: '0.7'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '10px'}} href="#">ventura</a></p>
              <p style={{marginTop: '0', marginBottom: '2px', lineHeight: '0.7'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '10px'}} href="#">visalia-tulare</a></p>
              <p style={{marginTop: '0', marginBottom: '2px', lineHeight: '0.7'}}><a style={{textDecoration: 'none', fontFamily: 'arial', fontSize: '10px'}} href="#">yuba-sutter</a></p>

              <p style={{marginTop: '10px', marginBottom: '0', backgroundColor: '#d2d5db', borderTop:'1px solid #919191',
              borderBottom:'1px solid #919191', textAlign: 'center', fontFamily: 'Arial', fontSize: '12px'}}>us cities</p>
              <p style={{marginTop: '0px', marginBottom: '0', backgroundColor: '#d2d5db', borderTop:'1px solid #919191',
              borderBottom:'1px solid #919191', textAlign: 'center', fontFamily: 'Arial', fontSize: '12px'}}>us states</p>
              <p style={{marginTop: '0px', marginBottom: '0', backgroundColor: '#d2d5db', borderTop:'1px solid #919191',
              borderBottom:'1px solid #919191', textAlign: 'center', fontFamily: 'Arial', fontSize: '12px'}}>canada</p>
              <p style={{marginTop: '0px', marginBottom: '0', backgroundColor: '#d2d5db', borderTop:'1px solid #919191',
              borderBottom:'1px solid #919191', textAlign: 'center', fontFamily: 'Arial', fontSize: '12px'}}>cl worldwide</p>
            </div>

            <div id="centerContainer" style={centerCss}>
              <div id="leftCenter" style={leftCenterCss}>
                <div id="community" style={communityCss}>
                  <h4 className="sectionBanner" style={{marginTop: '0px', marginBottom: '0px', backgroundColor: '#d2d5db', borderTop:'1px solid #919191',
                  borderBottom:'1px solid #919191', fontFamily: 'Arial'}}>
                    <a href="#" style={{textDecoration: 'none'}}>community</a>
                  </h4>
                  <CommunityList1 />
                  <CommunityList2 />
                </div>
                <div id="services" style={{height: '160px'}}>
                  <h4 className="sectionBanner" style={sectionBanCss}>
                    <a href="#" style={{textDecoration: 'none'}}>services</a>
                  </h4>
                  <ServicesList1 />
                  <ServicesList2 />
                </div>
                <div id="discussions" style={{height: '160px'}}>
                  <h4 className="sectionBanner" style={{marginTop: '0px', marginBottom: '0px', backgroundColor: '#d2d5db', borderTop: '1px solid #919191',
                  borderBottom: '1px solid #919191', fontFamily: 'Arial'}}>
                    <a href="#" style={{textDecoration: 'none'}}>discussion forums</a>
                  </h4>
                  <DiscussionList1 />
                  <DiscussionList2 />
                  <DiscussionList3 />
                </div>
              </div>
              <div id="rightCenter" style={rightCenterCss}>
                <div id="jobs" style={{height: '400px'}}>
                  <h4 className="sectionBanner" style={sectionBanCss}>
                    <a href="#" style={{textDecoration: 'none'}}>jobs</a>
                  </h4>
                  <JobsList />
                </div>
                <div id="gigs" style={{height: '100px'}}>
                  <h4 className="sectionBanner" style={sectionBanCss}>
                    <a href="#" style={{textDecoration: 'none'}}>gigs</a>
                  </h4>
                  <GigsList1 />
                  <GigsList2 />
                </div>
              </div>
              <div id="middleCenter" style={middleCenterCss}>
                <div id="housing" style={{height: '175px'}}>
                  <h4 className="sectionBanner" style={sectionBanCss}>
                    <a href="#" style={{textDecoration: 'none'}}>housing</a>
                  </h4>
                  <HousingList />
                </div>
                <div id="forSale" style={{height: '320px'}}>
                  <h4 className="sectionBanner" style={sectionBanCss}>
                    <a href="#" style={{textDecoration: 'none'}}>for sale</a>
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
