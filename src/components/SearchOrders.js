import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import stock_image from './stock_img.jpg';

const pageHeaderStyle = {
  margin: 'auto',
  marginTop: '15vh',
  marginBottom: '6vh',
  textAlign: 'center'
};

class SearchCard extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return(
      <div className="card mx-1 my-3" style={{width:'99vw', maxWidth: '300px'}}>
        <img className="card-img-top" src={stock_image} alt="Card image"></img>

        <div className="card-header">
        <Link to={{pathname: "/orders/123", state: {description: this.props.description, }}}>{this.props.orderName}</Link> </div>
        <div className="card-body">
          {this.props.description}
          <span className="d-block float-right">
            <i className="fa fa-thumbs-up mr-2" aria-hidden="true"></i> {this.props.upvotes} &nbsp;&nbsp;
            <i className="fa fa-thumbs-down mr-2" aria-hidden="true"></i> {this.props.downvotes}
          </span>
        </div>

      </div>
    );
  }
}

class SearchOrders extends Component {
  render() {
    return (
      <div>
        <h1 style={pageHeaderStyle}>Orders</h1>
        <div className='form-group container'>
          <input style={{maxWidth:'90%', display:'inline-block'}} className='form-control mx-auto' placeholder='Search for companies/ engineering sectors...'></input>
          <button className='btn btn-primary rounded'>Search</button>
        </div>
        <div className="container d-flex justify-content-around flex-wrap">
          <SearchCard orderName='Proj ABC' description='lorem Ipsum' upvotes={1302} downvotes={50}/>
          <SearchCard orderName='Proj ABC' description='lorem Ipsum' upvotes={1302} downvotes={50}/>
          <SearchCard orderName='Proj ABC' description='lorem Ipsum' upvotes={1302} downvotes={50}/>
          <SearchCard orderName='Proj ABC' description='lorem Ipsum' upvotes={1302} downvotes={50}/>
          <SearchCard orderName='Proj ABC' description='lorem Ipsum' upvotes={1302} downvotes={50}/>
          <SearchCard orderName='Proj ABC' description='lorem Ipsum' upvotes={1302} downvotes={50}/>
        </div>
      </div>
    );
  }
}

export default SearchOrders;