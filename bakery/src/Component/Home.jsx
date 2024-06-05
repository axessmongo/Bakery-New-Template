import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../assets/img/carousel-1.jpg";
import img2 from "../assets/img/carousel-2.jpg";
import about1 from "../assets/img/about-1.jpg"; 
import about2 from "../assets/img/about-2.jpg";
import product1 from '../assets/img/product-1.jpg'; 
import product2 from '../assets/img/product-2.jpg'; 
import product3 from '../assets/img/product-3.jpg'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import service1 from '../assets/img/service-1.jpg'; // Adjust path as necessary
import service2 from '../assets/img/service-2.jpg';
import team1 from '../assets/img/team-1.jpg'; // Adjust paths as necessary
import team2 from '../assets/img/team-2.jpg';
import team3 from '../assets/img/team-3.jpg';
import team4 from '../assets/img/team-4.jpg';
import pro1 from '../assets/img/product-1.jpg';
import pro2 from '../assets/img/product-2.jpg';
import pro3 from '../assets/img/product-3.jpg';
import Testimonal from "./Testimonal";
import Footer from "./Footer";
import Facts from "./Facts";

function Home() {
  return (
    <div>
      {/* Nav */}
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark py-lg-0 px-lg-5 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
            <h1 className="text-warning m-0">Baker</h1>
          </a>
          <button
            type="button"
            className="navbar-toggler me-4"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mx-auto p-4 p-lg-0">
              <a href="./" className="nav-item nav-link active text">
                Home
              </a>
              <a href="#about" className="nav-item nav-link">
                About
              </a>
              <a href="#service" className="nav-item nav-link">
                Services
              </a>
              <a href="#product" className="nav-item nav-link">
                Products
              </a>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu m-0">
                  <a href="team.html" className="dropdown-item">
                    Our Team
                  </a>
                  <a href="testimonial.html" className="dropdown-item">
                    Testimonial
                  </a>
                  <a href="404.html" className="dropdown-item">
                    404 Page
                  </a>
                </div>
              </div>
              <a href="#footer" className="nav-item nav-link">
                Contact
              </a>
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
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={img1} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    
                  </div>
                </div>
                <div class="carousel-item">
                  <img src={img2} class="d-block w-100" alt="..." />
                  
                </div>
                <div class="carousel-item">
                  <img src={img1} class="d-block w-100" alt="..." />
                  
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Facts/>
      {/* About */}
      
      <div id="about">
      <div className="container-xxl py-6">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow" data-aos="fade-up" data-wow-delay="0.1s">
              <div className="row img-twice position-relative h-100">
                <div className="col-6">
                  <img
                    className="img-fluid rounded"
                    src={about1}
                    alt="About us 1"
                  />
                </div>
                <div className="col-6 align-self-end">
                  <img
                    className="img-fluid rounded"
                    src={about2}
                    alt="About us 2"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow " data-wow-delay="0.5s">
              <div className="h-100">
                <p className="text-warning text-uppercase mb-2">// About Us</p>
                <h1 className="display-6 mb-4">
                  We Bake Every Item From The Core Of Our Hearts
                </h1>
                <p>
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo magna dolore erat amet
                </p>
                <p>
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo magna dolore erat amet
                </p>
                <div className="row g-2 mb-4">
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primary me-2"></i>Quality
                    Products
                  </div>
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primary me-2"></i>Custom
                    Products
                  </div>
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primary me-2"></i>Online
                    Order
                  </div>
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primary me-2"></i>Home Delivery
                  </div>
                  <a className="btn btn-warning rounded-pill py-3 px-1 w-50" href="">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
      {/* Product */}
      <div  >
         <div className="container-xxl bg-light my-6 py-6 pt-0">
            <div className="container">
                <div className="bg-warning text-light rounded-bottom p-5 my-6 mt-0 wow "data-aos="zoom-in" data-wow-delay="0.1s">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6">
                            <h1 className="display-4 text-light mb-0">The Best Bakery In Your City</h1>
                        </div>
                        <div className="col-lg-6 text-lg-end">
                            <div className="d-inline-flex align-items-center text-start">
                                <i className="fa fa-phone-alt fa-4x flex-shrink-0"></i>
                                <div className="ms-4">
                                    <p className="fs-5 fw-bold mb-0">Call Us</p>
                                    <p className="fs-1 fw-bold mb-0">+012 345 6789</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mx-auto mb-5 wow " id="product" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                    <p className="text-warning text-uppercase mb-2">// Bakery Products</p>
                    <h1 className="display-6 mb-4">Explore The Categories Of Our Bakery Products</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow " data-aos="fade-left" data-wow-delay="0.1s">
                        <div className="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                            <div className="text-center p-4">
                                <div className="d-inline-block border border-primary rounded-pill px-3 mb-3">$11 - $99</div>
                                <h3 className="mb-3">Cake</h3>
                                <span>Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos</span>
                            </div>
                            <div className="position-relative mt-auto">
                                <img className="img-fluid" src={product1} alt="Cake" />
                                <div className="product-overlay">
                                    <a className="btn btn-lg-square btn-outline-light rounded-circle" href=""><i className="fa fa-eye text-warning"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow " data-aos="fade-left" data-wow-delay="0.3s">
                        <div className="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                            <div className="text-center p-4">
                                <div className="d-inline-block border border-primary rounded-pill pt-1 px-3 mb-3">$11 - $99</div>
                                <h3 className="mb-3">Bread</h3>
                                <span>Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos</span>
                            </div>
                            <div className="position-relative mt-auto">
                                <img className="img-fluid" src={product2} alt="Bread" />
                                <div className="product-overlay">
                                    <a className="btn btn-lg-square btn-outline-light rounded-circle" href=""><i className="fa fa-eye text-warning"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow " data-aos="fade-left" data-wow-delay="0.5s">
                        <div className="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                            <div className="text-center p-4">
                                <div className="d-inline-block border border-primary rounded-pill pt-1 px-3 mb-3">$11 - $99</div>
                                <h4 className="mb-3">Cookies</h4>
                                <span>Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos</span>
                            </div>
                            <div className="position-relative mt-auto">
                                <img className="img-fluid" src={product3} alt="Cookies" />
                                <div className="product-overlay">
                                    <a className="btn btn-lg-square btn-outline-light rounded-circle" href=""><i className="fa fa-eye text-warning"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    {/* Service */}
    <div id="service">
<div className="container-xxl py-6">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6 wow " data-wow-delay="0.1s">
                        <p className="text-warning text-uppercase mb-2">// Our Services</p>
                        <h1 className="display-6 mb-4">What Do We Offer For You?</h1>
                        <p className="mb-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <div className="row gy-5 gx-4">
                            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                        <i className="fa fa-bread-slice text-white"></i>
                                    </div>
                                    <h5 className="mb-0">Quality Products</h5>
                                </div>
                                <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span>
                            </div>
                            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                        <i className="fa fa-birthday-cake text-white"></i>
                                    </div>
                                    <h5 className="mb-0">Custom Products</h5>
                                </div>
                                <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span>
                            </div>
                            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                        <i className="fa fa-cart-plus text-white"></i>
                                    </div>
                                    <h5 className="mb-0">Online Order</h5>
                                </div>
                                <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span>
                            </div>
                            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                        <i className="fa fa-truck text-white"></i>
                                    </div>
                                    <h5 className="mb-0">Home Delivery</h5>
                                </div>
                                <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow "data-aos="zoom-in-up" data-wow-delay="0.5s">
                        <div className="row img-twice position-relative h-100">
                            <div className="col-6">
                                <img className="img-fluid rounded" src={service1} alt="Service 1" />
                            </div>
                            <div className="col-6 align-self-end">
                                <img className="img-fluid rounded" src={service2} alt="Service 2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      {/* Teams */}
      <div id="teams">
          <div className="container-xxl py-6">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow " data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                    <p className="text-warning text-uppercase mb-2">// Our Team</p>
                    <h1 className="display-6 mb-4">We're Super Professional At Our Skills</h1>
                </div>
                <div className="row g-4" data-aos="fade-up">
                    <div className="col-lg-3 col-md-6 wow " data-wow-delay="0.1s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <img className="img-fluid" src={team1} alt="Team Member 1" />
                            <div className="team-text">
                                <div className="team-title">
                                    <h5>Full Name</h5>
                                    <span>Designation</span>
                                </div>
                                <div className="team-social">
                                    <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow " data-wow-delay="0.3s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <img className="img-fluid" src={team2} alt="Team Member 2" />
                            <div className="team-text">
                                <div className="team-title">
                                    <h5>Full Name</h5>
                                    <span>Designation</span>
                                </div>
                                <div className="team-social">
                                    <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow " data-wow-delay="0.5s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <img className="img-fluid" src={team3} alt="Team Member 3" />
                            <div className="team-text">
                                <div className="team-title">
                                    <h5>Full Name</h5>
                                    <span>Designation</span>
                                </div>
                                <div className="team-social">
                                    <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow " data-wow-delay="0.7s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <img className="img-fluid" src={team4} alt="Team Member 4" />
                            <div className="team-text">
                                <div className="team-title">
                                    <h5>Full Name</h5>
                                    <span>Designation</span>
                                </div>
                                <div className="team-social">
                                    <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      
      {/* <Testimonal /> */}
      
      {/* Footer */}
      <div id="footer">
<div className="container-fluid bg-dark text-light footer my-6 mb-0 py-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-4 col-md-6">
                        <h4 className="text-light mb-4">Office Address</h4>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-square btn-outline-light rounded-circle me-0" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    {/* <div className="col-lg-3 col-md-6">
                        <h4 className="text-light mb-4">Quick Links</h4>
                        <a className="btn btn-link" href="">About Us</a>
                        <a className="btn btn-link" href="">Contact Us</a>
                        <a className="btn btn-link" href="">Our Services</a>
                        <a className="btn btn-link" href="">Terms & Condition</a>
                        <a className="btn btn-link" href="">Support</a>
                    </div> */}
                    <div className="col-lg-4 col-md-6">
                        <h4 className="text-light mb-4">Quick Links</h4>
                        <a className="btn btn-link" href="./">Home</a>
                        <a className="btn btn-link" href="#about">About Us</a>
                        <a className="btn btn-link" href="#service">Our Services</a>
                        <a className="btn btn-link" href="#product">Product</a>
                        <a className="btn btn-link" href="#footer">Contact Us</a>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <h4 className="text-light mb-4">Photo Gallery</h4>
                        <div className="row g-2">
                            <div className="col-4">
                                <img className="img-fluid bg-light rounded p-1" src={pro1} alt="Image" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid bg-light rounded p-1" src={pro2} alt="Image" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid bg-light rounded p-1" src={pro3} alt="Image" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid bg-light rounded p-1" src={pro3} alt="Image" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid bg-light rounded p-1" src={pro1} alt="Image" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid bg-light rounded p-1" src={pro2} alt="Image" />
                            </div>
                            {/* Add more gallery images here */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Home;
