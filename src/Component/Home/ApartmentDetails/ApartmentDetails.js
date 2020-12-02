import React from 'react';
import './ApartmentDetails.css';
// import { Link, useHistory } from 'react-router-dom';

const ApartmentDetails = ({apartmentDetail}) => {

    // const history = useHistory();

    return (
        <div>
        <div class="card">
            <img class="card-img-top" style={{height:'200px'}} src={apartmentDetail.img} alt=""/>
            <div class="card-body">
            <h4 style={{color:'#275a53',fontWeight:'bold'}} class="card-title">{apartmentDetail.houseName}</h4>
                <div style={{float:'left'}}>
                <img style={{height:'20px'}} src={apartmentDetail.picture} alt=""/>
                </div>
                <p class="card-text pl-4">{apartmentDetail.location} </p>
                <div className="row">
                <div className="col-md-6">
                    <img style={{height:'20px'}}  src={apartmentDetail.cobi} alt=""/>
                    <span className='pl-3 font-wight'>{apartmentDetail.bedroom} </span>
                </div>
                <div className="col-md-6">
                <img style={{height:'20px'}} src={apartmentDetail.photo} alt=""/>
                <span className='pl-3 font-wight'>{apartmentDetail.Bathroom} </span>
                </div>
                </div>
                <div className="mt-3">
                <span className='price'> {apartmentDetail.price} </span>
            {/* <Link>
                <span> <button className="details-btn" onClick={() => history.push(`/houseDetails/${apartmentDetail.id}`)}>View Details</button> </span>
            </Link> */}
                    <span><button className="brand-button ml-5 p-1">View Details</button></span>
                </div>
            </div>
            </div>
    </div>
);
};

export default ApartmentDetails;