import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Member from './pages/Member'
import Bill from './pages/Bill'
import Result from './pages/Result'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Member />}/>
          <Route path="/bill" element={<Bill />}/>
          <Route path="/result" element={<Result />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App