import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <ul>
            <li><Link to="/easy-split">Member</Link></li>
            <li><Link to="/easy-split/bill">Bill</Link></li>
            <li><Link to="/easy-split/result">Result</Link></li>
        </ul>
    </div>
  )
}

export default Header