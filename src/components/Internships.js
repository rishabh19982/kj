import React, {Component} from 'react';
import stock_image from './stock_img.jpg';

class InternshipCard extends Component {
  render() {
    return (
      <div class="card">
        <img className="card-img-top" src={stock_image} alt="Card image"></img>
        <div class="card-header">{this.props.header}</div>
        <div class="card-body">
          <p class="card-text">
            {this.props.body}
            <br/>
            <strong>Prerequisites:</strong>
            <ol>
              <li>C++</li>
              <li>Basic Understanding of Algorithms</li>
              <li>HTML, CSS, JS</li>
            </ol>
            <br/>
            <strong>Contact:</strong><br />
            example@example.com
          </p>
        </div>
      </div>


    );
  }
}

class Internships extends Component {
  render() {
    return(
      <div className='card-columns p-3'>
        <InternshipCard header='Internship Title' body='A short description about the internship'/>
        <InternshipCard header='Internship Title' body='A short description about the internship'/>
        <InternshipCard header='Internship Title' body='A short description about the internship'/>
        <InternshipCard header='Internship Title' body='A short description about the internship'/>
        <InternshipCard header='Internship Title' body='A short description about the internship'/>
        <InternshipCard header='Internship Title' body='A short description about the internship'/>

      </div>
    );
  }
}

export default Internships;