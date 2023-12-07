import React from 'react'

const Packages = () => {
  return (
    <div>
         <div className='container overflow-hidden'>
            <div className="row mb-5 d-flex " style={{ justifyContent: "space-around" }}>
                <div className="col-12 col-xxl-4 col-xl-2 col-lg-3 col-md-3 col-sm-10 mt-md-2 ">
                    <div className="card" style={{ width: 400 }}>
                        <img className="card-img-top PopularPackage" src="https://kdahweb-static.kokilabenhospital.com/kdah-2019/shop/package/images/16714419320.jpg" alt="Card image" />
                        <div className="card-body">
                            <h5 className="card-title alltesttext">Diabetic Advance Package</h5>
                            <p className='alltesttext'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, illo pariatur? Soluta recusandae tenetur ipsa nihil et enim inventore veritatis.</p>
                            <h5 className="card-text fw-bolder  alltesttext">Rs. 3,000.00</h5>
                            <a href="#" className="btn btn-primary d-block alltesttext">Book Now</a>
                        </div>
                    </div>

                </div>
                <div className="col-12 col-xxl-4 col-xl-2 col-lg-3 col-md-3 col-sm-10 mt-md-2">
                    <div className="card" style={{ width: 400 }}>
                        <img className="card-img-top PopularPackage" src="https://kdahweb-static.kokilabenhospital.com/kdah-2019/shop/package/images/16714423820.jpg" alt="Card image" />
                        <div className="card-body">
                            <h5 className="card-title  alltesttext">
                                Teens Wellness Package - Male
                            </h5>
                            <p className='alltesttext'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, illo pariatur? Soluta recusandae tenetur ipsa nihil et enim inventore veritatis.</p>
                            <h5 className="card-text fw-bolder  alltesttext">Rs. 2,700.00</h5>
                            <a href="#" className="btn btn-primary d-block alltesttext">Book Now</a>
                        </div>
                    </div>

                </div>
                <div className="col-12 col-xxl-4 col-xl-2 col-lg-3  col-md-3 col-sm-10 mt-md-2">
                    <div className="card" style={{ width: 400 }}>
                        <img className="card-img-top PopularPackage" src="https://kdahweb-static.kokilabenhospital.com/kdah-2019/shop/package/images/16714421020.jpg" alt="Card image" />
                        <div className="card-body">
                            <h5 className="card-title alltesttext">Healthy Heart</h5>
                            <p className='alltesttext'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, illo pariatur? Soluta recusandae tenetur ipsa nihil et enim inventore veritatis.</p>
                            <h5 className="card-text fw-bolder  alltesttext">Rs. 2,500.00</h5>
                            <a href="#" className="btn btn-primary d-block alltesttext">Book Now</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Packages