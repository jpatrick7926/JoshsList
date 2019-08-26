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

class CommunityList1 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <ul style={ulStyle}>
        <li><a style={{textDecoration: 'none'}} href="#">avtivities</a></li>
        <li><a style={{textDecoration: 'none'}} href="#">artists</a></li>
        <li><a style={{textDecoration: 'none'}} href="#">childcare</a></li>
        <li><a style={{textDecoration: 'none'}} href="#">classes</a></li>
        <li><a style={{textDecoration: 'none'}} href="#">events</a></li>
        <li><a style={{textDecoration: 'none'}} href="#">general</a></li>
        <li><a style={{textDecoration: 'none'}} href="#">groups</a></li>
        <li><a style={{textDecoration: 'none'}} href="#">local news</a></li>
      </ul>
    )
  }
}


export default CommunityList1;
