// import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import {Routes, Route} from 'react-router-dom'
import Add from './../src/pages/Add/Add'
import Orders from './pages/Orders/Orders'
import List from './pages/List/List'


const App = () => {
  return (
    <div>
      <Navbar/>
      <hr/>
      <div className='app-content'>
        <Sidebar/>
        <Routes>
          <Route path="/add" element = {<Add/>}/>
          <Route path="/List" element = {<List/>}/>
          <Route path="/Orders" element = {<Orders/>}/>

        </Routes>
      </div>
    </div>
  )
}

export default App