import React, { useContext } from 'react'
import { myContext } from '../Context/Context'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';

const Logout = () => {
    const navigate = useNavigate();
    const {authUser,setauthUser}=useContext(myContext)


    const handleLogout = () => {
        try {
            setauthUser(undefined)
            localStorage.removeItem("User")
          
            navigate('/')
              toast.success('Logged out successfully!');
            } catch (error) {
            toast.success(error.message);
          

        }
    }


    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Logout