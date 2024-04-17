import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addMember, deleteMember } from '../redux/data'
import { nanoid } from 'nanoid'

const Member = () => {

  const { member } = useSelector((state)=> state.data)

  const dispatch = useDispatch()

  const [name, setName] = useState("")

  const handleChange = (e)=>{
    setName(e.target.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(addMember({"id": nanoid(10), "name":name}))
    setName("")
  }

  const handleDeleteMember = (member)=>{
    dispatch(deleteMember(member))
  }

  return (
    <div>
      <form method="POST" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter member name</label>
        <input type="text" id="name" value={name} onChange={handleChange} placeholder='member name'/>

        <button type="submit">Add</button>
      </form>

      <p>All members</p>
      <ul>
        {
          member.map((mem, idx)=>{
            return <li key={idx}>{mem["name"]} <button onClick={()=> handleDeleteMember(mem["id"])}>Delete</button></li>
          })
        }
      </ul>
    </div>
  )
}

export default Member