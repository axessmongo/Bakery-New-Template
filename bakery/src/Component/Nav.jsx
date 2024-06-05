import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "../assets/img/carousel-1.jpg"
import img2 from "../assets/img/carousel-2.jpg"

// import OwlCarousel from 'react-owl-carousel';

function Nav() {
  return (
    <div>
  <div className="container-fluid  bg-dark text-light px-0 wow fadeIn" data-wow-delay="0.1s">
            <div className="row gx-0 align-items-center d-none d-lg-flex">
                <div className="col-lg-6 px-5 text-start">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><a className="small text-light" href="#">Home</a></li>
                        <li className="breadcrumb-item"><a className="small text-light" href="#">Career</a></li>
                        <li className="breadcrumb-item"><a className="small text-light" href="#">Terms</a></li>
                        <li className="breadcrumb-item"><a className="small text-light" href="#">Privacy</a></li>
                    </ol>
                </div>
                <div className="col-lg-6 px-5 text-end">
                    <small>Follow us:</small>
                    <div className="h-100 d-inline-flex align-items-center">
                        <a className="btn-lg-square text-primary border-end rounded-0" href="#"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn-lg-square text-primary border-end rounded-0" href="#"><i className="fab fa-twitter"></i></a>
                        <a className="btn-lg-square text-primary border-end rounded-0" href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a className="btn-lg-square text-primary pe-0" href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
            <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
                <h1 className="text-primary m-0">Baker</h1>
            </a>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav mx-auto p-4 p-lg-0">
                    <a href="index.html" className="nav-item nav-link active text">Home</a>
                    <a href="about.html" className="nav-item nav-link">About</a>
                    <a href="service.html" className="nav-item nav-link">Services</a>
                    <a href="product.html" className="nav-item nav-link">Products</a>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                        <div className="dropdown-menu m-0">
                            <a href="team.html" className="dropdown-item">Our Team</a>
                            <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                            <a href="404.html" className="dropdown-item">404 Page</a>
                        </div>
                    </div>
                    <a href="contact.html" className="nav-item nav-link">Contact</a>
                </div>
                <div className="d-none d-lg-flex">
                    <div className="flex-shrink-0 btn-lg-square border border-light rounded-circle">
                        <i className="fa fa-phone text-primary"></i>
                    </div>
                    <div className="ps-3">
                        <small className="text-primary mb-0">Call Us</small>
                        <p className="text-light fs-5 mb-0">+012 345 6789</p>
                    </div>
                </div>
            </div>
        </nav>
     <div>
     <div>
        <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={img1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
     </div>
    </div>
  )
}

export default Nav