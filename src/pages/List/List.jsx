// import React from 'react'
import { toast } from 'react-toastify';
import './List.css'
import axios from 'axios';
import { useEffect } from 'react';
const List = () => {

  const url = "http://localhost:4000"
const [list, setList] = useState([]);

const fetchList = async () => {
  const response = await axios.get(`${url}/api/food/list`)
  console.log(response.data);
  
  if (response.data.success) {
    setList(response.data.data)
  }
  else{
    toast.error("Error")
  }
}

useEffect(()=>{
  fetchList();
})

  return (
    <div>
    </div>
  )
}

export default List