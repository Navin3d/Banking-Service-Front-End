import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { baseUrl } from "../utils/app_settings"

const Transferpage = () => {

  const [transactions, setTransactions]= useState([])

  const getTransactions = async () => {
    const response = await axios.get(`${baseUrl}/bank`);
    console.log(response.data)
    setTransactions(response.data);
  }

  useEffect(() => {
    getTransactions();
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
             <h3> TRANSFER DETAIL PAGE</h3>
            </div>

          </div>
          <div class="col-md-1">
            
          </div>
          </div>
      {/* {
        users.map(user =>(<h1>{user.id}</h1>))
      }  */}
      {/* {
        users[0].id
      } */}
      <div class="row toble">
  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Trasnfer Amaount</th>
      <th scope="col">Transfered From</th>
      <th scope="col">Transfered To</th>
      <th scope="col">investment date</th>
      <th scope="col">transfer</th>
      <th scope="col">request</th>
      
     
    </tr>
  </thead>
  <tbody>

    {
      (transactions.length === 0) ?
      <p>No Transactions Yet</p> :
      transactions.map(transaction => (
        <tr>
          <th scope="row">1</th>
          <td>{transaction.transferAmount}</td>
          <td>{transaction.transferedFrom.name}</td>
          <td>@{transaction.transferedTo.name}</td>
          <td>29.05.2020</td>
          <td scope="col"><a href={`/detailind/${transaction.transferedFrom.id}`}><i class="fa-solid fa-arrow-right"></i></a></td>
          <td scope="col"><a href={`/detailind/${transaction.transferedTo.id}`}><i class="fa-solid fa-arrow-left"></i></a></td>
        </tr>
      ))
    }

    {/* <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>29.05.2020</td>
      <td scope="col"><i class="fa-solid fa-arrow-right"></i></td>
      <td scope="col"><i class="fa-solid fa-arrow-left"></i></td>
    </tr> */}
    
  </tbody>
</table>
</div>
      </div>
    </div>
  )
}

export default Transferpage