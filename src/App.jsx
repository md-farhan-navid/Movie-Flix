import Home from './Components/Pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Login from './Components/Pages/Login/Login'



const App = () => {
  return (
    <div> 

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>

    </div>
  )
}


export default App
