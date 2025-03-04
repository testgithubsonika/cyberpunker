import {useSelector} from 'react-redux' //react-redux to access the Redux store, useSelector to get the currentUser from the Redux store.
import { Outlet, Navigate } from 'react-router-dom'
//cover profile by this route 
//protect certain routes in your application, ensuring that only authenticated users can access them
export default function PrivateRouter() {
  
      const {currentUser} = useSelector(state => state.user)
  return currentUser ? <Outlet/> : <Navigate to='/Login'/>
  
}
