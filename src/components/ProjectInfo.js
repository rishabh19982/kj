import React, {Component} from 'react';
import stock_image from './stock_img.jpg';

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

class ProjectInfo extends Component{
  constructor(props) {
    super(props);

    this.state = {
      projectName   : 'Project Lambda',
      upvotes       : 15,
      downvotes     : 7,
      description   : "Half Life 3 confirmed?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image         : stock_image,
      comments : [
        {'user': 'Shitbiscuits', 'text': 'lol 123', 'time': '28/07/1998', 'replies': {'user': 'Shitbiscuits', 'text': 'reply 2', 'time': '28/07/1998'}},
        {'user': 'Shitbiscuits', 'text': 'lol 123123', 'time': '28/07/1998', 'replies': {'user': 'Shitbiscuits', 'text': 'reply 2', 'time': '28/07/1998'}},
        {'user': 'Shitbiscuits', 'text': 'lol 69234234234', 'time': '28/07/1998', 'replies': {'user': 'Shitbiscuits', 'text': 'reply 2', 'time': '28/07/1998'}},
      ]
    };
  }

  onSubmitComment() {

    if (this.state.userComment == '')
      return;
    let comments = this.state.comments.map(c => c);
    comments.unshift({'user': 'Shitbiscuits', 'text': this.state.userComment, 'time': '28/07/1998', 'replies': {'user': 'Shitbiscuits', 'text': 'reply 2', 'time': '28/07/1998'}});

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
            <button className="mt-3 rounded btn btn-success">Support Us!</button>

          </div>
        </div>
        <br />
        <div className="container row">
        <div className="col-md-6">
        <h3 className="text-center">You can place your orders here</h3>
        <form>
          <div className="form-group">
            <input className="form-control" placeholder="Order title"></input>
          </div>
          <div className="form-group">
            <textarea className="form-control" placeholder="A short description of your problem statement"></textarea>
          </div>
          <div className="form-group">
            <input className="form-control" placeholder="Estimated cost"></input>
          </div>
          <input className="btn btn-primary  d-block mx-auto rounded" value="Submit"></input>
        </form>
        </div>
        <div className="col-md-6">
          <h3>We also take orders that fulfill these criteria</h3>
          <ol>
            <li>Network Securities / IoT sectors only</li>
            <li>$10 per work-hour contract</li>
            <li>Criteria 3</li>
            <li>Criteria 4</li>
          </ol>
        </div>

        </div>
        <br />
        <Comments comments={this.state.comments} />
        <br/>
        <div className="form-group">
          <input type="text" id="new_comment" className="form-control" name="new_comment" placeholder="write a comment" onChange={this.onUpdateComment.bind(this)}/>
          <br/>
          <input type="button" id="submit" value="Submit" className="btn btn-primary rounded" onClick={this.onSubmitComment.bind(this)}/>

        </div>
      </div>
    );
  }
}

export default ProjectInfo;