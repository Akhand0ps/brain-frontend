
import './App.css'
import { Dashboard } from './pages/Dashboard'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import { ProtectedRoute } from './components/ProtectedRoute'
import {Share} from './pages/Share'
import { Homepage } from './pages/Homepage'

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>} />
      <Route path='/dashboard' element={
        <ProtectedRoute>
          <Dashboard/>
        </ProtectedRoute>
        }/>
      <Route path='/share/:shareId' element={
       <ProtectedRoute>
         <Share/>
       </ProtectedRoute>
        }/>
    </Routes>
  </BrowserRouter>
}



export default App
