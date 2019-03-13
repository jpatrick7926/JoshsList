import React from 'react';
import ReactDom from 'react-dom';

var listCss = {
  float: 'left',
  margin: '0px 10px 10px 10px',
  listStyleType: 'none'
}

class FooterList extends React.Component {
  constructor(props){
    super(props);
    this.state = {


    }
  }

  render () {
    return(
      <div style={{clear:'both', display: 'table', margin: '0 auto'}}>
        <ul style={{}}>
          <li style={listCss}>help</li>
          <li style={listCss}>safety</li>
          <li style={listCss}>privacy</li>
          <li style={listCss}>feedback</li>
          <li style={listCss}>cl jobs</li>
          <li style={listCss}>terms</li>
          <li style={listCss}>about</li>
          <li style={listCss}>mobile</li>
        </ul>
      </div>

    )
  }



}

export default FooterList;
