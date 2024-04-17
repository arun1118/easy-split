import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addBill, deleteBill, clearBills } from '../redux/data'
import { nanoid } from 'nanoid'

const Bill = () => {

    const { bill } = useSelector((state)=> state.data)

    const dispatch = useDispatch()

    const [billData, setBillData] = useState({"name": "", "quantity": 0, "price": 0})

    const handleChange = (e)=>{
        setBillData({...billData, [e.target.id]: e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(addBill({...billData, "id": nanoid()}))
        setBillData({"name": "", "quantity": 0, "price": 0})
    }

    const handleClearBills = (e)=>{
        e.preventDefault()
        dispatch(clearBills())
    }

    const handleDeleteBill = (billId)=>{
        dispatch(deleteBill(billId))
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
                <button onClick={handleClearBills}>Clear All</button>
            </form>

            <p>All bills</p>
            <ol>
            {
                bill.map((billElem, idx)=>{
                    return(
                    <div>
                        <li key={idx}>{billElem["name"]}</li>
                        <ul>
                            <li>{billElem["quantity"]}</li>
                            <li>{billElem["price"]}</li>
                        </ul>
                        <button onClick={()=> handleDeleteBill(billElem["id"])}>Delete</button>
                    </div>
                    )
                })
            }
            </ol>
        </div>
    )
}

export default Bill