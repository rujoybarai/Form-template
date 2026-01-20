import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Headers from './components/Header'
import Form from './components/Form'
import { StoreProvider } from './Store/Store'
import { useState } from 'react'
import Profile from './components/Profile'
import { Outlet } from 'react-router-dom'
function App() {

  // const [showForm, setShowForm] = useState();
  return (
     <StoreProvider>
     <Headers   />
     {/* {(showForm === 'Profile')?(<Profile />):(<Form />)} */}
      <Outlet/>
      </StoreProvider>
  )
}

export default App
