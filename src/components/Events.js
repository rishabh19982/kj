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
      
      <div className="card mx-1 my-3" style={{width:'99vw',maxWidth:'1000px',margin:'10px'}}>
     <h1 style={{}}>   <Link to={{pathname: "/events/123", state: {description: this.props.description, }}}>
        {this.props.eventName}</Link> </h1>
        <div className="container">
          <div id="carousel-id" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <img src="https://dummyimage.com/1200x400/000/fff" alt="First slide" className="img-fluid" />
              </div>
              <div className="carousel-item">
                <img src="https://dummyimage.com/1200x400/ccc/000" alt="First slide" className="img-fluid" />
              </div>
              <div className="carousel-item">
                <img src="https://dummyimage.com/1200x400/000/fff" alt="First slide" className="img-fluid" />
              </div>
            </div>
            <ol className="carousel-indicators">
              <li data-target="#carousel-" data-slide-to="0" className="active"></li>
              <li data-target="#carousel" data-slide-to="1"></li>
              <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            </ol>
            <p className="text-xs-center">
              <a className="" href="#carousel-id" role="button" data-slide="prev">
                <span className="icon-prev" aria-hidden="true"></span> Previous
              </a>&emsp;
              <a className="l" href="#carousel-id" role="button" data-slide="next">
                <span className="icon-next" aria-hidden="true"></span> Next
              </a>
            </p>
          </div>
        </div>
      
          Click on Event name for more details
            
        
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
          <EventCard eventName='Event ABC' description='Half Life 3 confirmed?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Half Life 3 confirmed?' upvotes={1302} downvotes={50}/>
          <EventCard eventName='Event ABC' description='Half Life 3 confirmed?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Half Life 3 confirmed?' upvotes={1302} downvotes={50}/>
          <EventCard eventName='Event ABC' description='Half Life 3 confirmed?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Half Life 3 confirmed?' upvotes={1302} downvotes={50}/>
          <EventCard eventName='Event ABC' description='Half Life 3 confirmed?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Half Life 3 confirmed?' upvotes={1302} downvotes={50}/>
          <EventCard eventName='Event ABC' description='Half Life 3 confirmed?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Half Life 3 confirmed?' upvotes={1302} downvotes={50}/>
          <EventCard eventName='Event ABC' description='Half Life 3 confirmed?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Half Life 3 confirmed?' upvotes={1302} downvotes={50}/>
        </div>
      </div>
    );
  }
}

export default Events;