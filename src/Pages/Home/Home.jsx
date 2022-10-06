import Featured from '../../Components/Featured/Featured'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import './Home.css'
import PropertyList from '../../Components/PropertyList/PropertyList'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='homeContainer'>
        <Featured />
        <h1 className='homeTitle'>Browse by property type</h1>
        <PropertyList />
      </div>
    </div>
  )
}

export default Home 