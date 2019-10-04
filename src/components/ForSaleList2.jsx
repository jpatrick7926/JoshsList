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
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">farm+garden</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">free</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">furniture</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">garage sale</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">general</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">heavy equip</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">household</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">jewelry</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">materials</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">motorcycle parts</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">motorcycles</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">music instr</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">photo+video</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">rvs+camp</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">sporting</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">tickets</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">tools</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">toys+games</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">trailers</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">video gaming</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">wanted</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">wheels+tires</a></li>
      </ul>
    )
  }
}

export default ForSaleList2;
