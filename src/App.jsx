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
          <Route path="/easy-split" element={<Member />}/>
          <Route path="/easy-split/bill" element={<Bill />}/>
          <Route path="/easy-split/result" element={<Result />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App