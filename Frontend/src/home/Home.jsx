import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Freebook from '../components/Freebook'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { myContext } from '../Context/Context'


const Home = () => {
  const {authUser}=useContext(myContext);
  return (
    <>
      <Navbar />
      <Banner />
      <Freebook />
      <Footer />
      {authUser &&
      <div className=" fixed bottom-12 right-16">
        <div className="indicator group">
          <div className="indicator-item indicator-bottom" >
            <Link to='/addbook'>
            <button className="btn bg-orange-500 w-16 h-16 rounded-full text-xl" >+</button>
            </Link>
          </div>
          {/* <div className="card border w-36  group-hover:block hidden bg-cyan-700"> */}
          <div className="card border w-32 transition-all duration-300 transform opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 group-hover:block hidden bg-cyan-700 absolute right-full bottom-full mb-2 mr-2">
            <div className="card-body p-2">
              <h2 className="card-title  ">Add Book</h2>

            </div>
          </div>
        </div>
      </div>}
    </>
  )
}

export default Home