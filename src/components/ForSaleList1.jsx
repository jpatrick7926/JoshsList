import React from 'react';
import ReactDom from 'react-dom';

var ulStyle = {
  listStyle: "none",
  paddingLeft: '2px',
  float: 'left',
  fontFamily: 'Arial',
  fontSize: '80%',
  marginTop: '7px',
  marginLeft: '10px'
};

class ForSaleList1 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <ul style={ulStyle}>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">antiques</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">appliances</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">arts+crafts</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">alt/utv/sno</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">auto parts</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">aviation</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">baby+kid</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">barter</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">beauty+health</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">bike parts</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">bikes</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">boat parts</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">boats</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">books</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">business</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">cars+trucks</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">cds/dvd/vhs</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">cell phones</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">clothes+acc</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">collectibles</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">computer parts</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">computers</a></li>
        <li><a style={{textDecoration: 'none', borderBottom: ".5px solid #919191", float: 'left', fontSize: '12px'}} href="#">electronics</a></li>
      </ul>
    )
  }
}

export default ForSaleList1;
