import React from 'react'
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
const Hospitals = () => {
  return (
    <div>
       <div className='container overflow-hidden'>
        <h1 className='text-center mb-4'>Hospital</h1>
            <div className="row mb-5 d-flex " style={{ justifyContent: "space-around" }}>
                <div className="col-12 col-xxl-4 col-xl-2 col-lg-3 col-md-3 col-sm-10 mt-md-2 ">
                    <div className="card" style={{ width: 400 }}>
                        <img className="card-img-top PopularPackage" src="https://cdn.hexahealth.com/Image/6f123a81-3329-4ced-969c-3fa69337263f.jpg" alt="Card image"  />
                        <div className="card-body">
                            <h5 className="card-title  text-center hospitalHeading ">Medanta Hospital</h5>
                            <div className='mt-2 ' >
                           <p className='ms-1 hospitalText'>   <PlaceIcon /> indore madhya pradesh</p> 
                       <p className='ms-2 mt-2 hospitalText'>  <CallIcon/> 8945698546 , 45455554</p>
                            </div>
                       
                            <a href="#" className="btn btn-primary d-block alltesttext">Book Now</a>
                        </div>
                    </div>

                </div>
                <div className="col-12 col-xxl-4 col-xl-2 col-lg-3 col-md-3 col-sm-10 mt-md-2">
                <div className="card" style={{ width: 400 }}>
                        <img className="card-img-top PopularPackage" src="https://media.gettyimages.com/id/1312706413/photo/modern-hospital-building.jpg?s=612x612&w=gi&k=20&c=1-EC4Mxf--5u4ItDIzrIOrduXlbKRnbx9xWWtiifrDo=" alt="Card image"  />
                        <div className="card-body">
                            <h5 className="card-title  text-center hospitalHeading ">Medanta Hospital</h5>
                            <div className='mt-2 ' >
                           <p className='ms-1 hospitalText'>   <PlaceIcon /> indore madhya pradesh</p> 
                       <p className='ms-2 mt-2 hospitalText'>  <CallIcon/> 8945698546 , 45455554</p>
                            </div>
                       
                            <a href="#" className="btn btn-primary d-block alltesttext">Book Now</a>
                        </div>
                    </div>

                </div>
                <div className="col-12 col-xxl-4 col-xl-2 col-lg-3  col-md-3 col-sm-10 mt-md-2">
                <div className="card" style={{ width: 400 }}>
                        <img className="card-img-top PopularPackage" src="https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg" alt="Card image"  />
                        <div className="card-body">
                            <h5 className="card-title text-center hospitalHeading">Medanta Hospital</h5>
                            <div className='mt-2 ' >
                           <p className='ms-1 hospitalText'>   <PlaceIcon /> indore madhya pradesh</p> 
                       <p className='ms-2 mt-2 hospitalText'>  <CallIcon/> 8945698546 , 45455554</p>
                            </div>
                       
                            <a href="#" className="btn btn-primary d-block alltesttext">Book Now</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Hospitals
