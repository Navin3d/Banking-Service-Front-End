import React,{useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import data from '../data'
import axios from 'axios'
import { baseUrl } from "../utils/app_settings"

const CustDetailPage = () => {
  const [users, setUsers]= useState([])
  const [data, setData] = useState({
      amount: "",
      cst: "1000000"
  });

  const getUsers = async () => {
    const response = await axios.get(`${baseUrl}/customer`);
    setUsers(response.data);
  }

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    getUsers();
  }, []);

  const handleSubmit = async (e) => {
      e.preventDefault();

      const response = await axios.get(`${baseUrl}/bank/transfer/${data.amount}/${id}/${e.target.cst.value}`)

      console.log(response.data)

      if(response.data == "Transfered Successfully") {
        navigate("/transferdetail");
      }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]:value }));
    }

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
             <h3> CUSTOMER DETAIL PAGE</h3>
            </div>

          </div>
          <div class="col-md-1">
            
          </div>
          </div>
      <div class="row toble">
  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Holder Name</th>
      {/* <th scope="col">Email</th>
      <th scope="col">Current Balance</th> */}
      {/* <th scope="col">maturity date</th> */}
      
     
    </tr>
  </thead>
  <tbody>

    {
      users.map(customer => (
        <tr>
          <th scope="row">{customer.id}</th>
          <td>{customer.name}</td>
          {/* <td>{customer.email}</td>
          <td>{customer.currentBalance}</td> */}
          <td scope="col">
              <form onSubmit={handleSubmit}>
                  <input name='amount' onChange={handleChange} value={data.amount} placeholder='amount' />
                  <input hidden name='cst' onChange={handleChange} value={customer.id}/>
                <button type='submit'>Transfer</button>
              </form>
          </td>
        </tr>
      ))
    }

    {/* <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>29.05.2020</td>
      <td scope="col"><i class="fa-solid fa-pen-to-square"></i></td>
    </tr> */}
    
  </tbody>
</table>
</div>
      </div>
    </div>
  )
}

export default CustDetailPage