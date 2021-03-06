import React, {Component} from 'react';
import stock_image from './stock_img.jpg';

import Restful_API_Handler from '../Restful_API_handler';

const projectTitleStyle = {
  marginTop:'10vh',
  fontSize: '3em'
};

class Comment extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="container" style={{backgroundColor: '#ddd'}}>
        <p className="mb-0 pt-1">
        <strong>{this.props.comment.user}</strong> <br />
        {this.props.comment.text}
        </p>
        <p className="text-right mb-0" style={{fontSize:'0.7em'}}>{this.props.comment.time}</p>
        <hr style={{maxWidth:'100%', borderThickness:'1px', borderColor:'#eee', margin:'0px'}}/>
      </div>
    );
  }
}

class Comments extends Component {
  constructor(props) {
    super(props);
  }
  
  getCommentComponents() {
    return <div>{this.props.comments.map(function(commentData, idx){return <Comment key={idx} comment={commentData} />})}</div>;
  }
  render() {
    return (
      <div className="mt-3">
        {this.getCommentComponents()}
      </div>
    );
  }
}

class Pledge extends Component {
  render() {
    return(
      <div className="card my-1">
        <div className="card-body">
          <h4>{this.props.title}</h4>
          <h5>{this.props.subtitle}</h5>
          <hr style={{maxWidth:'99%'}}/>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

class ProjectInfo extends Component{
  constructor(props) {
    super(props);

    this.state = {
      projectName   : 'Project Lambda',
      upvotes       : 15,
      downvotes     : 7,
      description   : "Half Life 3 confirmed?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Half Life 3 confirmed?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image         : stock_image,
      comments : [
        {'user': 'Nicebiscuits', 'text': 'lol 123', 'time': '28/07/1998', 'replies': {'user': 'Nicebiscuits', 'text': 'reply 2', 'time': '28/07/1998'}},
        {'user': 'Nicebiscuits', 'text': 'lol 123123', 'time': '28/07/1998', 'replies': {'user': 'Nicebiscuits', 'text': 'reply 2', 'time': '28/07/1998'}},
        {'user': 'Nicebiscuits', 'text': 'lol 69234234234', 'time': '28/07/1998', 'replies': {'user': 'Nicebiscuits', 'text': 'reply 2', 'time': '28/07/1998'}},
      ]
    };

  }


  onSubmitComment() {

    if (this.state.userComment == '')
      return;
    let comments = this.state.comments.map(c => c);
    comments.unshift({'user': 'Nicebiscuits', 'text': this.state.userComment, 'time': '28/07/1998', 'replies': {'user': 'Nicebiscuits', 'text': 'reply 2', 'time': '28/07/1998'}});

    this.setState(Object.assign({}, this.state, {comments: comments}));
  }

  onUpdateComment(e) {
    this.setState(Object.assign({}, this.state, {userComment: e.target.value}));
  }

  render() {
    return(
      <div className="container p-3">
        <h1 style={projectTitleStyle}>{this.state.projectName}</h1>
        <h4 className="mb-5">Company Nexus</h4>

        {/* Carousel */}
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
        <div className="row mt-3 px-3">
          <div className="col-md-8">
            <h3>Description</h3>
            <p>{this.state.description}</p>

            <br />
            <Comments comments={this.state.comments} />
            <div className="form-group">
              <input type="text" id="new_comment" className="form-control" name="new_comment" placeholder="write a comment" onChange={this.onUpdateComment.bind(this)}/>
              <br/>
              <br />
              <input type="button" id="submit" value="Submit" className="btn btn-primary rounded" onClick={this.onSubmitComment.bind(this)}/>
            </div>

          </div>
          <div className="col-md-4">
            <h3>Contact</h3>
            <i className="fas fa-envelope mb-3 sr-contact-2"></i>&nbsp;&nbsp;
            <span><a href="mailto:your-email@your-domain.com">feedback@startbootstrap.com</a></span>
            <br />
            <i className="fas fa-phone mb-3 sr-contact-1"></i>&nbsp;&nbsp;
            <span>123-456-6789</span>
            <br/>
            1300 &nbsp;<i className="fa fa-thumbs-up mr-2" aria-hidden="true"></i> {this.props.upvotes} &nbsp;&nbsp;
            1300 &nbsp;<i className="fa fa-thumbs-down mr-2" aria-hidden="true"></i> {this.props.downvotes}
            <br />
            <button className="mt-3 rounded btn btn-success">Follow Us!</button>
            <br />
            <h3 className="mt-4 text-center">Pledges</h3>
            <Pledge title='This is title 1' subtitle='This is a longer explained subtitle' description='THis is a longer explained subtitleTHis is a longer explained subtitleTHis is a longer explained subtitle' />
            <Pledge title='This is title 2' subtitle='This is a longer explained subtitle' description='THis is a longer explained subtitleTHis is a longer explained subtitleTHis is a longer explained subtitle' />
            <Pledge title='This is title 3' subtitle='This is a longer explained subtitle' description='vTHis is a longer explained subtitleTHis is a longer explained subtitleTHis is a longer explained subtitleTHis is a longer explained subtitleTHis is a longer explained subtitle' />

          </div>
        </div>
        <br />
        <br/>
      </div>
    );
  }
}

export default ProjectInfo;