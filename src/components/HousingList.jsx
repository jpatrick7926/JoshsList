import React from 'react';
import ReactDom from 'react-dom';

var ulStyle = {
  listStyle: "none",
  paddingLeft: '2px',
  float: 'left',
  fontFamily: 'Arial',
  fontSize: '80%',
  marginTop: '7px'
};

class HousingList extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <ul style={ulStyle}>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">apts / housing</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">housing swap</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">housing wanted</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">office / commercial</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">parking / storage</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">real estate for sale</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">rooms / shared</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">rooms wanted</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">sublets / temporary</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">vacation rentals</a></li>
      </ul>
    )
  }
}

export default HousingList;
