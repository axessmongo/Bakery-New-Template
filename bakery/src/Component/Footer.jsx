import React from 'react'
import pro1 from '../assets/img/product-1.jpg';
import pro2 from '../assets/img/product-2.jpg';
import pro3 from '../assets/img/product-3.jpg';

function Footer() {
  return (
    <div>
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
                        <a className="btn btn-link" href="">About Us</a>
                        <a className="btn btn-link" href="">Contact Us</a>
                        <a className="btn btn-link" href="">Our Services</a>
                        <a className="btn btn-link" href="">Terms & Condition</a>
                        <a className="btn btn-link" href="">Support</a>
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
  )
}

export default Footer