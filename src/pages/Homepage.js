import React from 'react'
import Navbar from '../components/Navbar'
import Image from '../images/view.jpg';
import Image1 from '../images/transfer.jpg';


const homepage = () => {
  return (
    <div>
        <Navbar/>
        <div class="space"></div>
        <div class="container">
          <div class="row">
          <div class="col-md-1">
              
          </div>  
          <div class="col-md-10">
            <div class="main-text">
             <h3> BANK MANAGEMENT SYSTEM</h3>
            </div>

          </div>
          <div class="col-md-1">
            
          </div>
          </div>
          <div class ="space"></div>
            <div class="row">
            <div class="col-md-6">
            {/* <h4 class="image-description">view</h4> */}
                <a href='/detail'>
                <img class ="view-image "src={Image}/>
               </a>
            </div>
            <div class="col-md-6">
              {/* <h4 class="image-description">trasfer</h4> */}
              <a href='/transferdetail'>
                <img class ="transfer-image"src={Image1}      />
              </a>
            </div>  
          </div>
    
        </div>

    </div>
  )
}

export default homepage