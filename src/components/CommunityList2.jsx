import React from 'react';
import ReactDom from 'react-dom';

var ulStyle = {
  listStyle: "none",
  float: 'left',
  paddingLeft: '2px',
  fontFamily: 'Arial',
  fontSize: '80%',
  marginTop: '7px'
};

var liStyle = {
  borderBottom: "1px solid #919191"
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
        <li><a style={{textDecoration: 'none'}} href="#">lost+found</a></li>
        <li><a style={{textDecoration: 'none'}} href="#">missed<br/>connections</a></li>
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
