import React, {Component} from 'react';
import stock_image from './stock_img.jpg';

const pageHeaderStyle = {
  margin: 'auto',
  marginTop: '15vh',
  marginBottom: '25vh',
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

        <div className="card-header"> {this.props.projectName} </div>
        <div className="card-body">
          {this.props.description}
          <br/>
          <i class="fa fa-thumbs-up mr-2" aria-hidden="true"></i> {this.props.upvotes} &nbsp;&nbsp;
          <i class="fa fa-thumbs-down mr-2" aria-hidden="true"></i> {this.props.downvotes}
        </div>

      </div>
    );
  }
}

class SearchProjects extends Component {
  render() {
    return (
      <div>
        <h1 style={pageHeaderStyle}>Crowd Funded Projects</h1>
        <div className="container d-flex justify-content-around flex-wrap">
          <SearchCard projectName='Proj ABC' description='lorem Ipsum' upvotes={1302} downvotes={50}/>
          <SearchCard projectName='Proj ABC' description='lorem Ipsum' upvotes={1302} downvotes={50}/>
          <SearchCard projectName='Proj ABC' description='lorem Ipsum' upvotes={1302} downvotes={50}/>
          <SearchCard projectName='Proj ABC' description='lorem Ipsum' upvotes={1302} downvotes={50}/>
          <SearchCard projectName='Proj ABC' description='lorem Ipsum' upvotes={1302} downvotes={50}/>
          <SearchCard projectName='Proj ABC' description='lorem Ipsum' upvotes={1302} downvotes={50}/>
        </div>
      </div>
    );
  }
}

export default SearchProjects;