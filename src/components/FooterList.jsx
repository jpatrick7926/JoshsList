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
          <li style={listCss}><a href="#">help</a></li>
          <li style={listCss}><a href="#">safety</a></li>
          <li style={listCss}><a href="#">privacy</a></li>
          <li style={listCss}><a href="#">feedback</a></li>
          <li style={listCss}><a href="#">cl jobs</a></li>
          <li style={listCss}><a href="#">terms</a></li>
          <li style={listCss}><a href="#">about</a></li>
          <li style={listCss}><a href="#">mobile</a></li>
        </ul>
      </div>

    )
  }



}

export default FooterList;
