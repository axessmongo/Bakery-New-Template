import React from 'react'

function Facts() {
  return (
    <div>
         <div class="container-xxl py-6">
        <div class="container">
            <div class="row g-4">
                <div class="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.1s">
                    <div class="fact-item bg-warning-subtle rounded text-center h-100 p-5">
                        <i class="fa fa-certificate fa-4x text-warning mb-4"></i>
                        <p class="mb-2 fw-bold">Years Experience</p>
                        <h1 class="display-5 mb-0" data-toggle="counter-up">5</h1>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.3s">
                    <div class="fact-item bg-warning-subtle rounded text-center h-100 p-5">
                        <i class="fa fa-users fa-4x text-warning mb-4"></i>
                        <p class="mb-2 fw-bold">Skilled Professionals</p>
                        <h1 class="display-5 mb-0" data-toggle="counter-up">7</h1>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.5s">
                    <div class="fact-item bg-warning-subtle rounded text-center h-100 p-5">
                        <i class="fa fa-bread-slice fa-4x text-warning mb-4"></i>
                        <p class="mb-2 fw-bold">Total Products</p>
                        <h1 class="display-5 mb-0" data-toggle="counter-up">13</h1>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.7s">
                    <div class="fact-item bg-warning-subtle rounded text-center h-100 p-5">
                        <i class="fa fa-cart-plus fa-4x text-warning mb-4"></i>
                        <p class="mb-2 fw-bold">Order Everyday</p>
                        <h1 class="display-5 mb-0" data-toggle="counter-up">40</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Facts