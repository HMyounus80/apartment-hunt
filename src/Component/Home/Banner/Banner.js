import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='background'>
        <h2 style={{paddingTop:'130px'}}  className='text-white text-center'>FIND YOUR HOUSE RENT</h2>
       <div style={{paddingBottom:'180px'}} className="container d-flex justify-content-center">
         <nav class="navbar navbar-light">
           <form class="form-inline">
             <input
               class="form-control mr-sm-3"
               style={{paddingRight:'250px'}}
               type="search"
               placeholder="Search"
               aria-label="Search"
             />
             <button class="find-btn my-2 my-sm-0" type="submit">
                  Find now
             </button>
           </form>
         </nav>
       </div>
     </div>
    );
};

export default Banner;