import axios from 'axios';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { baseUrl } from '../utils/app_settings';

const Inddetailpage = () => {

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
                 <h3><b>{customer.name}</b></h3>
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
                <h5>Name : {customer.name}</h5>
                <div class="space"></div>
                
                <h5>Email: {customer.email}</h5>
                <div class="space"></div>
                <h5>account balance : {customer.currentBalance} rs</h5>
                <div class="space"></div>


               </div>
               <div class="col-md-6">
               <h5>age :25 </h5>
               <div class="space"></div>
                <h5>account number : ACC-{customer.id} </h5>
                <div class="space"></div>
                <h5>investment date: 18.03.2019</h5>
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
              <a class="save-changes" href={`/transfer/${customer.id}`}> Transfer</a>
            </div>
          </div>
          </div>
        </div>
  
  )
}

export default Inddetailpage