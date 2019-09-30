import React from 'react';
import ReactDom from 'react-dom';

var ulStyle = {
  listStyle: "none",
  paddingLeft: '2px',
  fontFamily: 'Arial',
  fontSize: '80%',
  marginTop: '7px'
}

class JobsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <ul style={ulStyle}>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '10.5px'}} href="#">accounting+finance</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '10.5px'}} href="#">admin / office</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '10.5px'}} href="#">arch / engineering</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '10.5px'}} href="#">art / media / design</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '10.5px'}} href="#">biotech / science</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '10.5px'}} href="#">business / mgmt</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '10.5px'}} href="#">customer service</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '10.5px'}} href="#">education</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '10.5px'}} href="#">etc / misc</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '10.5px'}} href="#">food / bev / hosp</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '10.5px'}} href="#">general labor</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '10.5px'}} href="#">government</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '10.5px'}} href="#">human resources</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '10.5px'}} href="#">legal / paralegal</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '10.5px'}} href="#">manufacturing</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '10.5px'}} href="#">marketing / pr / ad</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '10.5px'}} href="#">medical / health</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '10.5px'}} href="#">nonprofit sector</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '10.5px'}} href="#">real estate</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '10.5px'}} href="#">retail / wholesale</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '10.5px'}} href="#">sales / biz dev</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '10.5px'}} href="#">salon / spa / fitness</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '10.5px'}} href="#">security</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '10.5px'}} href="#">skilled trade / craft</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '10.5px'}} href="#">software / qa / dba</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '10.5px'}} href="#">systems / network</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '10.5px'}} href="#">technical support</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '10.5px'}} href="#">transport</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '10.5px'}} href="#">tv / film / video</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '10.5px'}} href="#">web / info design</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '10.5px'}} href="#">writing / editing</a></li>
      </ul>
    )
  }

}

export default JobsList;
