import React from 'react'

import testimonial1 from '../assets/img/testimonial-1.jpg'; // Adjust paths as necessary
import testimonial2 from '../assets/img/testimonial-2.jpg';
import testimonial3 from '../assets/img/testimonial-3.jpg';
import testimonial4 from '../assets/img/testimonial-4.jpg';

function Testimonal() {
  return (
    <div>
<div className="container-xxl bg-light my-6 py-6 pb-0">
            <div className="container">
                <div className="text-center mx-auto mb-5" style={{ maxWidth: '500px' }}>
                    <p className="text-primary text-uppercase mb-2">// Client's Review</p>
                    <h1 className="display-6 mb-4">More Than 20000+ Customers Trusted Us</h1>
                </div>
                <div className="owl-carousel testimonial-carousel">
                    <div className="testimonial-item bg-white rounded p-4">
                        <div className="d-flex align-items-center mb-4">
                            <img className="flex-shrink-0 rounded-circle border p-1" src={testimonial1} alt="Client 1" />
                            <div className="ms-4">
                                <h5 className="mb-1">Client Name</h5>
                                <span>Profession</span>
                            </div>
                        </div>
                        <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                    <div className="testimonial-item bg-white rounded p-4">
                        <div className="d-flex align-items-center mb-4">
                            <img className="flex-shrink-0 rounded-circle border p-1" src={testimonial2} alt="Client 2" />
                            <div className="ms-4">
                                <h5 className="mb-1">Client Name</h5>
                                <span>Profession</span>
                            </div>
                        </div>
                        <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                    <div className="testimonial-item bg-white rounded p-4">
                        <div className="d-flex align-items-center mb-4">
                            <img className="flex-shrink-0 rounded-circle border p-1" src={testimonial3} alt="Client 3" />
                            <div className="ms-4">
                                <h5 className="mb-1">Client Name</h5>
                                <span>Profession</span>
                            </div>
                        </div>
                        <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                    <div className="testimonial-item bg-white rounded p-4">
                        <div className="d-flex align-items-center mb-4">
                            <img className="flex-shrink-0 rounded-circle border p-1" src={testimonial4} alt="Client 4" />
                            <div className="ms-4">
                                <h5 className="mb-1">Client Name</h5>
                                <span>Profession</span>
                            </div>
                        </div>
                        <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                </div>
                <div className="bg-primary text-light rounded-top p-5 my-6 mb-0">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="display-4 text-light mb-0">Subscribe Our Newsletter</h1>
                            </div>
                            <div className="col-md-6 text-md-end">
                                <div className="position-relative">
                                    <input className="form-control bg-transparent border-light w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                                    <button type="button" className="btn btn-dark py-2 px-3 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonal