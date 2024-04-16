import React, { useState } from 'react'

const Member = () => {

  const [name, setName] = useState("")

  const handleChange = (e)=>{
    setName(e.target.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log("to add ",name)
    setName("")
  }

  return (
    <div>
      <form method="POST" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter member name</label>
        <input type="text" id="name" value={name} onChange={handleChange} placeholder='member name'/>

        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default Member