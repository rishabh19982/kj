import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import stock_image from './stock_img.jpg';

const pageHeaderStyle = {
  margin: 'auto',
  marginTop: '15vh',
  marginBottom: '6vh',
  textAlign: 'center'
};



class EventCard extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return(
      
      <div className="card mx-1 my-3" style={{width:'99vw',maxWidth:'1000px',maxHeight:'100px',margin:'10px', overflowY:'hidden'}}>
        <Link to={{pathname: "/events/123", state: {description: this.props.description, }}}>
        {this.props.eventName}</Link> 
        <div className='d-block float-right'>
        <button className='btn btn-success' style={{height:'20vw',maxHeight:'30px'}}>More details</button>
        </div>
        <br/>
          {this.props.description}
            
        
        </div>
      
    );
  }
}

class Events extends Component {
  render() {
    return (
      <div>
        <h1 style={pageHeaderStyle}>Events</h1>
        <div className='form-group container'>
          {/*<input style={{maxWidth:'90%', display:'inline-block'}} className='form-control mx-auto' placeholder='Search for companies/ engineering sectors...'></input>
          &nbsp;&nbsp;
    <button className='btn btn-primary rounded'>Search</button>*/}
        </div>
        <div className="container d-flex justify-content-around flex-wrap">
          <EventCard eventName='Proj ABC' description='Half Life 3 confirmed?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Half Life 3 confirmed?' upvotes={1302} downvotes={50}/>
          <EventCard eventName='Proj ABC' description='Half Life 3 confirmed?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Half Life 3 confirmed?' upvotes={1302} downvotes={50}/>
          <EventCard eventName='Proj ABC' description='Half Life 3 confirmed?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Half Life 3 confirmed?' upvotes={1302} downvotes={50}/>
          <EventCard eventName='Proj ABC' description='Half Life 3 confirmed?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Half Life 3 confirmed?' upvotes={1302} downvotes={50}/>
          <EventCard eventName='Proj ABC' description='Half Life 3 confirmed?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Half Life 3 confirmed?' upvotes={1302} downvotes={50}/>
          <EventCard eventName='Proj ABC' description='Half Life 3 confirmed?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Half Life 3 confirmed?' upvotes={1302} downvotes={50}/>
        </div>
      </div>
    );
  }
}

export default Events;