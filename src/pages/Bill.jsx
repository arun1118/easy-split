import React, { useState } from 'react'

const Bill = () => {
    const [billData, setBillData] = useState({"name": "", "quantity": 0, "price": 0})

    const handleChange = (e)=>{
        setBillData({...billData, [e.target.id]: e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("to add ",billData)
        setBillData({"name": "", "quantity": 0, "price": 0})
    }
    return (
        <div>
            <form method="POST" onSubmit={handleSubmit}>
                <label htmlFor="name">Enter item name</label>
                <input type="text" id="name" value={billData["name"]} onChange={handleChange} placeholder='item name'/>

                <label htmlFor="quantity">Enter the Quantity</label>
                <input type="number" id="quantity" value={billData["quantity"]} onChange={handleChange} min={0}/>

                <label htmlFor="price">Enter the price</label>
                <input type="number" id="price" value={billData["price"]} onChange={handleChange} min={0}/>

                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default Bill