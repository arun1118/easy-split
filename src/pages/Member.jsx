import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addMember, deleteMember } from '../redux/data'
import { nanoid } from 'nanoid'

const Member = () => {

  const { member } = useSelector((state)=> state.data)

  const dispatch = useDispatch()

  const [name, setName] = useState("")
  const [preDefinedNames, setPreDefinedNames] = useState([
    {"name": "isha", "isChecked": false},
    {"name": "arun", "isChecked": false},
    {"name": "ashu", "isChecked": false},
    {"name": "tej", "isChecked": false},
    {"name": "chocho", "isChecked": false},
    {"name": "aswin", "isChecked": false},
    {"name": "sagar", "isChecked": false},
    {"name": "parth", "isChecked": false},
    {"name": "vedant", "isChecked": false},
    {"name": "tosif", "isChecked": false},
    {"name": "anushka", "isChecked": false},
  ])

  const handleChange = (e)=>{
    setName(e.target.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(addMember({"id": nanoid(10), "name":name}))
    setName("")
  }

  const handleDeleteMember = (memberId)=>{
    dispatch(deleteMember(memberId))
  }

  const handleSelectName = (idx)=>{
    setPreDefinedNames((prevValue)=>{
      let updatedValue = [...prevValue]
      updatedValue[idx]["isChecked"] = !updatedValue[idx]["isChecked"]
      return updatedValue
    })
  }

  const handleAddNames = ()=>{
    let selectedNamesData = preDefinedNames.filter((name)=> name["isChecked"])
    let selectedNames = selectedNamesData.map((name)=> name["name"])
    
    selectedNames.forEach((name)=>{ dispatch(addMember({"id": nanoid(10), "name":name})) })

    setPreDefinedNames([
      {"name": "isha", "isChecked": false},
      {"name": "arun", "isChecked": false},
      {"name": "ashu", "isChecked": false},
      {"name": "tej", "isChecked": false},
      {"name": "chocho", "isChecked": false},
      {"name": "aswin", "isChecked": false},
      {"name": "sagar", "isChecked": false},
      {"name": "parth", "isChecked": false},
      {"name": "vedant", "isChecked": false},
      {"name": "tosif", "isChecked": false},
      {"name": "anushka", "isChecked": false},
    ])
  }

  return (
    <div>
      <div>
        <ul>
        {
          preDefinedNames.map((name,idx)=>{
            return(
              <li key={idx}>
              <input type="checkbox" id={`checkbox_${idx}`} checked={name["isChecked"]} onChange={()=> handleSelectName(idx)}/>
              <label htmlFor={`checkbox_${idx}`}>{name["name"]}</label>
              </li>
            )
          })
        }
        </ul>
        <button type="button" onClick={handleAddNames}>Add</button>
      </div>

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