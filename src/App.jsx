import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Headers from './components/Header'
import Form from './components/Form'
import { StoreProvider } from './Store/Store'
import { useState } from 'react'
import Profile from './components/Profile'
function App() {

  const [showForm, setShowForm] = useState();
  return (
     <StoreProvider>
     <Headers  showForm={showForm} setShowForm={setShowForm}  />
     {(showForm === 'Form')?(<Form />):(<Profile />)}
  
      </StoreProvider>
  )
}

export default App
