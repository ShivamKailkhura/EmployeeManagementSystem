import './App.css'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="container">
          <HeaderComponent />
           <Routes>
              <Route path="/" exact element={<ListEmployeeComponent />} />
              <Route path="/add-employee" element = { <EmployeeComponent/>} />
              <Route path="/update-employee/:id" element={<EmployeeComponent />} />
              <Route path="/view-employee/:id" element={<EmployeeComponent />} />
              <Route path="/delete-employee/:id" element={<EmployeeComponent />} />
              <Route path="/employees" element={<ListEmployeeComponent />} />
           </Routes>
          <FooterComponent />
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
