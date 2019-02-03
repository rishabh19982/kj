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
        <Link to={{pathname: "/projects/123/", state: {description: this.props.description, }}}>{this.props.projectName}</Link> </div>
        <div className="card-body">
          {this.props.description}
          <br/>
          <span className="d-block float-right">
            <i className="fa fa-thumbs-up mr-2" aria-hidden="true"></i> {this.props.upvotes} &nbsp;&nbsp;
            <i className="fa fa-thumbs-down mr-2" aria-hidden="true"></i> {this.props.downvotes}
          </span>
        </div>

      </div>
    );
  }
}

class SearchProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {projectsData : []};
    this.fetchData();
  }
  fetchData() {
    let xhttp = new XMLHttpRequest();
    let that  = this;
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && [200, 201].indexOf(this.status) != -1){
        let recievedProjectsData = JSON.parse(this.responseText).projects;
        console.log(recievedProjectsData, this.responseText, 'asd');

        that.setState(Object.assign({}, this.state, recievedProjectsData));
      }
    }

    xhttp.open('GET', 'http://vinpyt.pythonanywhere.com/crowdfunding/api/v1.0.0' + '/projects', true);
    xhttp.send();
  }

  render() {
    return (
      <div>
        <h1 style={pageHeaderStyle}>Projects</h1>
        <div className='form-group container'>
          <input style={{maxWidth:'90%', display:'inline-block'}} className='form-control mx-auto' placeholder='Search for projects/ engineering sectors...'></input>
          <button className='btn btn-primary rounded'>Search</button>
        </div>
        <div className="container d-flex justify-content-around flex-wrap">
          {this.state.projectsData.map(proj => <SearchCard projectName={proj.project_name} description={proj.category} upvotes={1302} downvotes={50}/>)}
          <SearchCard projectName='Proj Lambda' description='Some description 1' upvotes={1302} downvotes={50}/>
          <SearchCard projectName='Solar Water Cooler' description='Some description 2' upvotes={1302} downvotes={450}/>
          <SearchCard projectName='Solar Roadways' description='Some description 3' upvotes={1400} downvotes={510}/>
          <SearchCard projectName='Golang' description='Some description 4' upvotes={122} downvotes={550}/>
          <SearchCard projectName='Laser Cannon' description='Some description 5' upvotes={6702} downvotes={780}/> 
          <SearchCard projectName='Twitch API' description='Some description 6' upvotes={4302} downvotes={520}/>
        </div>
      </div>
    );
  }
}

export default SearchProjects;