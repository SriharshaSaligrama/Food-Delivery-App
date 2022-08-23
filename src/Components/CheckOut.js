import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { emptyCart } from '../Redux/Actions/CartActions';

export const CheckOut = props => {
    const {cartItems}=useSelector(state=>state)
    const subTotalArray=cartItems.map(item=>item.price)
    const subTotal=subTotalArray.length>0?subTotalArray.reduce((a,b)=>a+b):0
    const dispatch=useDispatch()

    const handleEmptyCart= ()=>{
        dispatch(emptyCart())
    }

    const columns = [
        {
            name: 'Cart Items',
            selector: row => row.name,
        },
        {
            name: 'Item Price',
            selector: row => row.itemPrice,
        },
        {
            name: 'Quantity',
            selector: row=>row.quantity,    
        },
        {
            name: 'Total Price',
            selector: row => row.price,
        },
    ];
    const data=cartItems

    return (
        <div >
            <Link to='/'><Button variant="link" onClick={handleEmptyCart}>Home</Button></Link><br/>
            {cartItems.length>0?'Order placed successfully':'No orders placed'}<br/>
            <>
                <DataTable columns={columns} data={data} customStyles={{rows: {style: {height: '70px'}}}} disabled/>
                SubTotal: {subTotal}<br/> 
            </>
        </div>
    )
}
