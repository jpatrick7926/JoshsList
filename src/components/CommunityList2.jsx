import React from 'react';
import ReactDom from 'react-dom';

var ulStyle = {
  listStyle: "none",
  float: 'left',
  paddingLeft: '2px',
  fontFamily: 'Arial',
  fontSize: '20 px'
};

class CommunityList2 extends React.Component{
  constructor (props) {
    super(props);
    this.state = {

    }
  }

  render (){
    return (
      <ul style={ulStyle}>
        <li style={{fontSize: '6 px'}}><a style={{textDecoration: 'none'}} href="#">lost+found</a></li>
        <li><a style={{textDecoration: 'none', fontSize: '10 px'}} href="#">missed<br/>connections</a></li>
        <li><a style={{textDecoration: 'none'}} href="#">musicians</a></li>
        <li><a style={{textDecoration: 'none'}} href="#">pets</a></li>
        <li><a style={{textDecoration: 'none'}} href="#">politics</a></li>
        <li><a style={{textDecoration: 'none'}} href="#">rants & raves</a></li>
        <li><a style={{textDecoration: 'none'}} href="#">rideshare</a></li>
        <li><a style={{textDecoration: 'none'}} href="#">volunteers</a></li>
      </ul>
    )
  }
}

export default CommunityList2;
