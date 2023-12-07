import React from 'react'
import { useNavigate } from 'react-router';
import CallIcon from '@mui/icons-material/Call';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

const Section = () => {
const navigate = useNavigate()
  const handleAlltest = ()=>{
    navigate("/alltest")
  }
  return (
    <div className="overflow-hidden">
      <div id="demo" className="carousel slide" data-bs-ride="carousel">

        { /* Indicators/dots */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active" />
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1" />
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2" />
        </div>

        { /* The slideshow/carousel */}
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img src="https://good-nature-blog-uploads.s3.amazonaws.com/uploads/2022/01/good-nature-homepage-hero_2-scaled.jpg" alt="Los Angeles " className="d-block w-100 image" style={{ objectFit: "cover" }} />
          </div>
          <div className="carousel-item">
            <img src="https://good-nature-blog-uploads.s3.amazonaws.com/uploads/2022/01/good-nature-homepage-hero_2-scaled.jpg" alt="Chicago" className="d-block w-100 image" style={{ objectFit: "cover" }} />
          </div>
          <div className="carousel-item">
            <img src="https://static5.depositphotos.com/1019587/467/i/450/depositphotos_4674892-stock-photo-nice-spring-situation-your-design.jpg" alt="Los Angeles" className="d-block w-100 image" style={{ objectFit: "cover" }} />
          </div>
        </div>

        { /* Left and right controls/icons */}
        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" />
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon" />
        </button>
      </div>

      <div className=" ms-4 row  mt-5 mb-5" style={{ justifyContent: "space-evenly" }}>
        <div className="col-2  test"  onClick={handleAlltest}>
          <img src="https://www.lifeextension.com/-/media/lef/images/magazine/mag2014/images/may2014_tfcrpmsyl_hero.jpg" alt="" width={50} style={{ borderRadius: "10px", marginRight: "10px" }} />
          <h5 className=' '>
            All Test
          </h5>
        </div>
        <div className="col-2 test" onClick={()=>navigate("/packages")}>
          <img src="https://t4.ftcdn.net/jpg/00/75/78/31/360_F_75783184_fCmgIS3e05tWlGhNPe5aOEWknoxb6Pzb.jpg" alt="" width={40} height={40} style={{ borderRadius: "50%", marginRight: "10px" }} />
          <h5 className=''> health package
          </h5>
        </div>
        <div className="col-2 test">
          <input type="file" />
        </div>
        <div className="col-2 test">
          <CallIcon sx={{ fontSize: "35px" }} style={{ background: "blue", color: "white", borderRadius: "50%", marginRight: "10px", padding: "5px" }} />
          <h5 className=''>
            book on call</h5>
        </div>
      </div>
      
      <div className='container w-100 overflow-hidden'>
      <div className='d-flex justify-content-between'>
      <h2 className=''>Popular Test</h2>
      <Link style={{textDecoration:"none",color:"black"}} to="/alltest">view more</Link>
      </div>
        <div className='mt-5 mb-5 '>
          <Swiper

            breakpoints={{
              200: {
                slidesPerView: 1,


              },
              400: {

                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}

            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={5}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: ".swiper-button-prev ",
              clickable: true
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className='swiper_control'
          >

            <SwiperSlide>

              <img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/4cb2baf3234-Fullbody.png?dim=256x0" alt="" style={{ width: "250px", borderRadius: "20px" }} className='PopularTest' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/e1a18d8deac-Vitamins.png?dim=256x0" alt="" style={{ width: "250px", borderRadius: "20px" }} className='PopularTest' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/e1a18d8deac-Vitamins.png?dim=256x0" alt="" style={{ width: "250px", borderRadius: "20px" }} className='PopularTest' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/1e927857c26-Diabetes.png?dim=256x0" alt="" style={{ width: "250px", borderRadius: "20px" }} className='PopularTest' /></SwiperSlide>

            <SwiperSlide style={{ backgroundImage: "none" }}>
              <img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/e1c60c444bf-Fever.png?dim=256x0" alt="" style={{ width: "250px", borderRadius: "20px" }} className='PopularTest' />
            </SwiperSlide>

            <SwiperSlide>
              <img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/520acd31898-heart.png?dim=256x0" alt="" style={{ width: "250px", borderRadius: "20px" }} className='PopularTest' />
            </SwiperSlide>

            <SwiperSlide>
              <img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/bca113a1b80-Bone.png?dim=256x0" alt="" style={{ width: "250px", borderRadius: "20px" }} className='PopularTest' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/9696ef00b0a-lifestyle.png?dim=256x0" alt="" style={{ width: "250px", borderRadius: "20px" }} className='PopularTest' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/71fb3c06e71-Thyroid.png?dim=256x0" alt="" style={{ width: "250px", borderRadius: "20px" }} className='PopularTest' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/7b238cdbb60-womencare.png?dim=256x0" alt="" style={{ width: "250px", borderRadius: "20px" }} className='PopularTest' />
            </SwiperSlide>

            <div className="slide_control">
              <div className='swiper-button-prev slider-arrow'>
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className='swiper-button-next slider-arrow'>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className='swiper-pagination'>

              </div>
            </div>
          </Swiper>

        </div>
        <div className='d-flex justify-content-between'>
        <h2 className='mb-4'>Popular Package</h2>
        <Link className=' text-decoration-none ' style={{color:"black"}} to="/packages">view more  </Link>
        </div>
      
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
        <img className='banner mb-5' src="https://images.apollo247.in/pd-cms/cms/2023-09/Diag_Web_Desktop.jpg?tr=w-1276,q-80,f-webp,c-at_max" alt="" />
        <h2 className='mb-5'>Doctors</h2>
        <div className="row mb-5 d-flex justify-content-around">
          <div className=" col-6 col-xl-2 col-lg-4 mt-lg-0 col-md-4 col-sm-">
            <img className='doctors' src="https://t3.ftcdn.net/jpg/02/95/51/80/360_F_295518052_aO5d9CqRhPnjlNDTRDjKLZHNftqfsxzI.jpg" alt="" />
          </div>
          <div className=" col-6 col-xl-2 col-lg-4 mt-lg-0  col-md-4 col-sm-6">
            <img className='doctors' src="https://t3.ftcdn.net/jpg/02/95/51/80/360_F_295518052_aO5d9CqRhPnjlNDTRDjKLZHNftqfsxzI.jpg" alt="" />
          </div>
          <div className="col-6 col-xl-2 col-lg-4  col-md-4 mt-lg-0 col-sm-6 mt-4">
            <img className='doctors' src="https://t3.ftcdn.net/jpg/02/95/51/80/360_F_295518052_aO5d9CqRhPnjlNDTRDjKLZHNftqfsxzI.jpg" alt="" />
          </div>
          <div className="col-6 col-xl-2 col-lg-4 mt-lg-0 col-md-4 col-sm-6 mt-md-4 mt-sm-4 mt-4">
            <img className='doctors' src="https://t3.ftcdn.net/jpg/02/95/51/80/360_F_295518052_aO5d9CqRhPnjlNDTRDjKLZHNftqfsxzI.jpg" alt="" />
          </div>
          <div className="col-6 col-xl-2 col-lg-4 mt-lg-0 col-md-4 col-sm-6 mt-md-3  mt-sm-3 mt-4">
            <img className='doctors' src="https://t3.ftcdn.net/jpg/02/95/51/80/360_F_295518052_aO5d9CqRhPnjlNDTRDjKLZHNftqfsxzI.jpg" alt="" />
          </div>
          <div className="col-6 col-xl-2 col-lg-4 mt-lg-0 col-md-4 col-sm-6 mt-md-3  mt-sm-3 mt-4">
            <img className='doctors' src="https://t3.ftcdn.net/jpg/02/95/51/80/360_F_295518052_aO5d9CqRhPnjlNDTRDjKLZHNftqfsxzI.jpg" alt="" />
          </div>
        </div> <div className='d-flex justify-content-between'>
        <h2 className='mb-5'>Popular Hospitals</h2>
        <Link className=' text-decoration-none ' style={{color:"black"}} to="/hospital">view more  </Link>
        </div>
       
        <div className="  row mb-5 d-flex" style={{ justifyContent: "space-around" }}>
          <div className="col-6 col-xl-2 col-lg-4 col-md-4 col-sm-6 ">
            <div className="card" style={{ width: 400 }}>
              <img className=" card-img-top PopularTest " src="https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg" alt="Card image" height={200} />

            </div>
          </div>
          <div className="col-6 col-xl-2 col-lg-4 col-md-4 col-sm-6">
            <div className="card" style={{ width: 400 }}>
              <img className="card-img-top PopularTest" src="https://www.shutterstock.com/shutterstock/photos/212251981/display_1500/stock-photo-modern-hospital-style-building-212251981.jpg" alt="Card image" height={200} />

            </div>
          </div>
          <div className="col-6 col-xl-2 col-lg-4 col-md-4 col-sm-6 mt-3 mt-lg-0  ">
            <div className="card" style={{ width: 400 }}>
              <img className="card-img-top PopularTest" src="https://media.gettyimages.com/id/1312706413/photo/modern-hospital-building.jpg?s=612x612&w=gi&k=20&c=1-EC4Mxf--5u4ItDIzrIOrduXlbKRnbx9xWWtiifrDo=" alt="Card image" height={200} />

            </div>
          </div>
          <div className="col-6 col-xl-2 col-lg-4 col-md-4 col-sm-6 mt-lg-0  mt-md-3 mt-sm-4 mt-3">
            <div className="card" style={{ width: 400 }}>
              <img className="card-img-top PopularTest" src="https://media.gettyimages.com/id/1312706413/photo/modern-hospital-building.jpg?s=612x612&w=gi&k=20&c=1-EC4Mxf--5u4ItDIzrIOrduXlbKRnbx9xWWtiifrDo=" alt="Card image" height={200} />

            </div>
          </div>
          <div className="col-6 col-xl-2 col-lg-4 col-md-4 col-sm-6 mt-lg-0  mt-md-3 mt-sm-3 mt-3">
            <div className="card" style={{ width: 400 }}>
              <img className="card-img-top PopularTest" src="https://media.gettyimages.com/id/1312706413/photo/modern-hospital-building.jpg?s=612x612&w=gi&k=20&c=1-EC4Mxf--5u4ItDIzrIOrduXlbKRnbx9xWWtiifrDo=" alt="Card image" height={200} />

            </div>
          </div>
          <div className="col-6 col-xl-2 col-lg-4 col-md-4 col-sm-6 mt-lg-0 mt-md-3 mt-sm-3 mt-3">
            <div className="card" style={{ width: 400 }}>
              <img className="card-img-top PopularTest" src="https://media.gettyimages.com/id/1312706413/photo/modern-hospital-building.jpg?s=612x612&w=gi&k=20&c=1-EC4Mxf--5u4ItDIzrIOrduXlbKRnbx9xWWtiifrDo=" alt="Card image" height={200} />

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Section
