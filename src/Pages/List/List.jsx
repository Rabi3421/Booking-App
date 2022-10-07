import './List.css'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'


const List = () => {
  const location = useLocation();
  // console.log(location)
  const [destination, setDestination] = useState(location.state.location)
  const [date, setDate] = useState(location.state.date)
  const [options, setOptions] = useState(location.state.options)

  return (
    <div>
      <Navbar />
      <Header type = "list"/>
      <div className='listContainer'>
        <div className='listWrapper'>
          <div className='listSearch'>
            <h1 className='lsTitle'>Search</h1>
            <div className='lsItem'>
              <label>Destination</label>
              <input type="text"/>
            </div>
            <div className='lsItem'>
              <label>Check-In Date</label>
              <span></span>
            </div>
          </div>
          <div className='listResult'></div>
        </div>
      </div>
    </div>
  )
}

export default List