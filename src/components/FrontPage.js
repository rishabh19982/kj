import React, { Component } from 'react';

class FrontPage extends Component {
  render() {
    return (
      <div>
        <header className="masthead text-center text-white d-flex">
          <div className="container my-auto">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <h1 className="text-uppercase">
                  <strong>One stop destination for innovation and learning</strong>
                </h1>
                <hr />
              </div>
              <div className="col-lg-8 mx-auto">
                <p className="text-faded mb-5"></p>
                <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
              </div>
            </div>
          </div>
        </header>

        <section className="bg-primary" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="section-heading text-white">We've got what you need!</h2>
                <hr className="light my-4" />
                <p className="text-faded mb-4">Explore world of possibilities with future.Experience a great variety of workshops,Projects and internships opportunities! </p>
                <a className="btn btn-light btn-xl js-scroll-trigger" href="#services">Get Started!</a>
              </div>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading">At Your Service</h2>
                <hr className="my-4" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box mt-5 mx-auto">
                  <i className="fas fa-4x fa-gem text-primary mb-3 sr-icon-1"></i>
                  <h3 className="mb-3">Learning</h3>
                  <p className="text-muted mb-0">Learning with clear concepts is utmost priority.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box mt-5 mx-auto">
                  <i className="fas fa-4x fa-paper-plane text-primary mb-3 sr-icon-2"></i>
                  <h3 className="mb-3">Earn while you earn</h3>
                  <p className="text-muted mb-0">Learn from Industry experts</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box mt-5 mx-auto">
                  <i className="fas fa-4x fa-code text-primary mb-3 sr-icon-3"></i>
                  <h3 className="mb-3">Coding</h3>
                  <p className="text-muted mb-0">Aspirants with interest of variety of technology</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box mt-5 mx-auto">
                  <i className="fas fa-4x fa-heart text-primary mb-3 sr-icon-4"></i>
                  <h3 className="mb-3">Enjoy what you do</h3>
                  <p className="text-muted mb-0">With innovation given great importance, love for technology develops!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="p-0" id="portfolio">
          <div className="container-fluid p-0">
            <div className="row no-gutters popup-gallery">
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/1.jpg">
                  <img className="img-fluid" src="img/portfolio/thumbnails/1.jpg" alt="" />
                  <div className="portfolio-box-caption">
                    <div className="portfolio-box-caption-content">
                      <div className="project-category text-faded">
                        Category
                      </div>
                      <div className="project-name">
                        Engineering and Construction
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/2.jpg">
                  <img className="img-fluid" src="img/portfolio/thumbnails/2.jpg" alt="" />
                  <div className="portfolio-box-caption">
                    <div className="portfolio-box-caption-content">
                      <div className="project-category text-faded">
                        Category
                      </div>
                      <div className="project-name">
                        Business Solutions
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/3.jpg">
                  <img className="img-fluid" src="img/portfolio/thumbnails/3.jpg" alt="" />
                  <div className="portfolio-box-caption">
                    <div className="portfolio-box-caption-content">
                      <div className="project-category text-faded">
                        Category
                      </div>
                      <div className="project-name">
                        IT Solutions
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/4.jpg">
                  <img className="img-fluid" src="img/portfolio/thumbnails/4.jpg" alt="" />
                  <div className="portfolio-box-caption">
                    <div className="portfolio-box-caption-content">
                      <div className="project-category text-faded">
                        Category
                      </div>
                      <div className="project-name">
                        Manufacturing
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/5.jpg">
                  <img className="img-fluid" src="img/portfolio/thumbnails/5.jpg" alt="" />
                  <div className="portfolio-box-caption">
                    <div className="portfolio-box-caption-content">
                      <div className="project-category text-faded">
                        Category
                      </div>
                      <div className="project-name">
                        Agro-Tech
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/6.jpg">
                  <img className="img-fluid" src="img/portfolio/thumbnails/6.jpg" alt="" />
                  <div className="portfolio-box-caption">
                    <div className="portfolio-box-caption-content">
                      <div className="project-category text-faded">
                        And
                      </div>
                      <div className="project-name">
                        Many More
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/*<section className="bg-dark text-white">
          <div className="container text-center">
            <h2 className="mb-4">Free Download at Start Bootstrap!</h2>
            <a className="btn btn-light btn-xl sr-button" href="http://startbootstrap.com/template-overviews/creative/">Download Now!</a>
          </div>
    </section>*/}

        <section id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="section-heading">Let's Get In Touch!</h2>
                <hr className="my-4" />
                <p className="mb-5">Ready to start your next project with buddung minds? That's great! Give us a call or send us an email and we will get back to you as soon as possible!</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 ml-auto text-center">
                <i className="fas fa-phone fa-3x mb-3 sr-contact-1"></i>
                <p>123-456-6789</p>
              </div>
              <div className="col-lg-4 mr-auto text-center">
                <i className="fas fa-envelope fa-3x mb-3 sr-contact-2"></i>
                <p>
                  <a href="mailto:your-email@your-domain.com">feedback@startbootstrap.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default FrontPage;