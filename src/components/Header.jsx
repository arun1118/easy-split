import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <ul>
            <li><Link to="/">Member</Link></li>
            <li><Link to="/bill">Bill</Link></li>
            <li><Link to="/result">Result</Link></li>
        </ul>
    </div>
  )
}

export default Header