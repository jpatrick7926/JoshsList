import React from 'react';
import ReactDom from 'react-dom';

var ulStyle = {
  listStyle: "none",
  float: 'left',
  paddingLeft: '2px',
  fontFamily: 'Arial',
  fontSize: '20 px'
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
        <li><a href="#">avtivities</a></li>
        <li><a href="#">artists</a></li>
        <li><a href="#">childcare</a></li>
        <li><a href="#">classes</a></li>
        <li><a href="#">events</a></li>
        <li><a href="#">general</a></li>
        <li><a href="#">groups</a></li>
        <li><a href="#">local news</a></li>
      </ul>
    )
  }
}


export default CommunityList1;
