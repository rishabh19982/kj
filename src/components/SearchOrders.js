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
      <div className="row" style={{margin:'10px'}}>

      <div className="col md-4" style={{width:'99vw',maxWidth:'1000px'}}>
        <div className="card mx-1 my-3 " style={{width:'99vw', maxWidth: '300px'}}>
        <img className="card-img-top" src={stock_image} alt="Card image"></img>

        </div>
        </div>

        <div className="col md-4" style={{margin: 'auto'}}><Link to={{pathname: "/orders/123", state: {description: this.props.description, }}}>
        {this.props.orderName}</Link> 
        <br/>
          {this.props.description}
         
        </div>
        <button className='btn btn-success' style={{height:'20vw',maxHeight:'30px'}}>Place Order</button>

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
          &nbsp;&nbsp;
          <button className='btn btn-primary rounded'>Search</button>
        </div>
        <div className="container d-flex justify-content-around flex-wrap">
          <SearchCard orderName='Proj ABC' description='Half Life 3 confirmed?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Half Life 3 confirmed?' upvotes={1302} downvotes={50}/>
          <SearchCard orderName='Proj ABC' description='Half Life 3 confirmed?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Half Life 3 confirmed?' upvotes={1302} downvotes={50}/>
          <SearchCard orderName='Proj ABC' description='Half Life 3 confirmed?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Half Life 3 confirmed?' upvotes={1302} downvotes={50}/>
          <SearchCard orderName='Proj ABC' description='Half Life 3 confirmed?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Half Life 3 confirmed?' upvotes={1302} downvotes={50}/>
          <SearchCard orderName='Proj ABC' description='Half Life 3 confirmed?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Half Life 3 confirmed?' upvotes={1302} downvotes={50}/>
          <SearchCard orderName='Proj ABC' description='Half Life 3 confirmed?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Half Life 3 confirmed?' upvotes={1302} downvotes={50}/>
        </div>
      </div>
    );
  }
}

export default SearchOrders;