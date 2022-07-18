import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar'
import axios from 'axios'
import { baseUrl } from "../utils/app_settings"

const Transcustdetail = () => {

  const[customer, setCustomer] = useState({});

  const { id } = useParams();

  const getCustomer = async (id) => {
    const response = await axios.get(`${baseUrl}/customer/${id}`);
    setCustomer(response.data);
    console.log(response.data);
  }

  useEffect(() => {
    getCustomer(id);
  }, []);
  
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
                 <h3> LOGASUBRAMANI SM</h3>
                </div>
    
              </div>
              <div class="col-md-1">
                
              </div>

          </div>

          <div class="row">
            
              <div class="col-md-1"></div>
              <div class="col-md-8">
                <div class="personal-info">
                <div class="row">
                
               <div class="col-md-6">
                <h5>Name : logasubramani sm </h5>
                <div class="space"></div>
                
                <h5>Branch:porur</h5>
                <div class="space"></div>
                <h5>account balance : 78763 rs</h5>
                <div class="space"></div>
                <h5>Currentblance: </h5>
                <div class="space"></div>


               </div>
               <div class="col-md-6">
               <h5>Transfer bank :axisbank </h5>
               <div class="space"></div>
                <h5>account number :789889342 </h5>
                <div class="space"></div>
                <h5>Transfer to: </h5>
                <div class="space"></div>
                <h5>Transfer amount: </h5>
               
               </div>
               
             
               </div>
               </div>
               </div>
               <div class="col-md-1"></div>
          </div>
          <div class="space1"></div>
          <div class="row">
            <div class="col-md-10"></div>
            <div class="col-md-2">
              <button class="save-changes"> TRANSFER </button>
            </div>
          </div>
          </div>
      

    </div>
  )
}

export default Transcustdetail