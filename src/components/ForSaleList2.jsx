import React from 'react';

var ulStyle = {
  listStyle: "none",
  paddingLeft: '2px',
  float: 'left',
  fontFamily: 'Arial',
  fontSize: '80%',
  marginTop: '7px',
  marginLeft: '10px'
};

class ForSaleList2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <ul style={ulStyle}>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '11px'}} href="#">farm+garden</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '11px'}} href="#">free</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '11px'}} href="#">furniture</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '11px'}} href="#">garage sale</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '11px'}} href="#">general</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '11px'}} href="#">heavy equip</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '11px'}} href="#">household</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '11px'}} href="#">jewelry</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '11px'}} href="#">materials</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '11px'}} href="#">motorcycle parts</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '11px'}} href="#">motorcycles</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '11px'}} href="#">music instr</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '11px'}} href="#">photo+video</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '11px'}} href="#">rvs+camp</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '11px'}} href="#">sporting</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '11px'}} href="#">tickets</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '11px'}} href="#">tools</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '11px'}} href="#">toys+games</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '11px'}} href="#">trailers</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '11px'}} href="#">video gaming</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '11px'}} href="#">wanted</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '11px'}} href="#">wheels+tires</a></li>
      </ul>
    )
  }
}

export default ForSaleList2;
