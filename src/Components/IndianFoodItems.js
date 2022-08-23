import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import DataTable from 'react-data-table-component';
import Image from 'react-bootstrap/Image'
import { addCartItem, decrementQuantity, emptyCart, incrementQuantity, removeCartItem } from '../Redux/Actions/CartActions';
import { Link } from 'react-router-dom';

export const IndianFoodItems = props => {
    const {foodItems}=useSelector(state=>state)
    const {cartItems}=useSelector(state=>state)
    const IndianFood=foodItems.filter(item=>item.Indian===true)
    const IndianVegFood=IndianFood.filter(item=>item.isVeg)
    const subTotalArray=cartItems.map(item=>item.price)
    const subTotal=subTotalArray.length>0?subTotalArray.reduce((a,b)=>a+b):0
    const [vegChecked, setVegChecked]=useState(false)
    const [searchedItems, setSearchedItems]=useState([...IndianFood])
    const [searchText, setSearchText]=useState('')
    const dispatch=useDispatch()

    const handleChange= e => {
        e.preventDefault()
        setSearchText(e.target.value)
        const searchedFoodItems=vegChecked?IndianVegFood.filter(item=>item.name.includes(e.target.value.toLowerCase())):IndianFood.filter(item=>item.name.includes(e.target.value.toLowerCase()))
        setSearchedItems(searchedFoodItems)
    }

    const handleCheck= e=>{
        setVegChecked(!vegChecked)
        setSearchedItems(e.target.checked?[...IndianVegFood]:[...IndianFood])
        setSearchText('')
    }

    const AddtoCart = item =>{
        const cartItemsNames=cartItems.map(cartItem=>cartItem.name)
        if(!(cartItemsNames.includes(item.name))) {
            if(item.quantity===0) item.quantity++
            else dispatch(addCartItem(item))
        }
    }

    const increment= item=>{
        dispatch(incrementQuantity(item))
    }

    const decrement= item=>{
        if(item.quantity>1) {
            dispatch(decrementQuantity(item))
        }
        else dispatch(removeCartItem(item))
    }

    const handleEmptyCart= ()=>{
        dispatch(emptyCart())
    }

    const columns = [
        {
            name: 'Cart Items',
            selector: row => row.name,
        },
        {
            name: 'Price',
            selector: row => row.price,
        },
        {
            name: 'Quantity',
            cell: (row)=>(
                <>
                    <Button variant='light' style={{width: '25px'}} onClick={()=>decrement(row)}>-</Button>
                    {row.quantity}
                    <Button variant='light' style={{width: '25px'}} onClick={()=>increment(row)}>+</Button>
                </>
            ),
            
        },
    ];

    const data=cartItems

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Indian ({searchedItems.length}/{vegChecked?IndianVegFood.length:IndianFood.length})</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/Chinese">Chinese</Nav.Link>
                            <Nav.Link href="/American">American</Nav.Link>
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search Food"
                                className="me-2"
                                aria-label="Search"
                                value={searchText}
                                onChange={handleChange}
                            />
                            <Form.Check 
                                type="switch"
                                id="custom-switch"
                                label="Veg only"
                                checked={vegChecked}
                                onChange={handleCheck}
                            />
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className='container'>
                <div className='row'>
                    <div className='col-md-9'>
                        {
                            searchedItems.length>0?
                            <>
                                {
                                    searchedItems.map(item=>(
                                    <Card style={{ width: '18rem', display: 'inline-block', margin: '10px'}} key={item.name}>
                                        <Card.Img variant="top" src={item.img} height='180px'/>
                                        <Card.Body>
                                            {item.isVeg?<Image src='https://i.ibb.co/kQQyRwP/veg.png'/>:<Image src='https://i.ibb.co/stN0gCz/non-veg.png'/>}
                                            <Card.Title>{item.name}</Card.Title>
                                            <Card.Text>₹{item.price}/-</Card.Text>
                                            {
                                                cartItems.some(cartItem=>cartItem.name===item.name)?
                                                <Button variant="danger" onClick={()=>dispatch(removeCartItem(item))}>Remove from cart</Button>:
                                                <Button variant="success" onClick={()=>AddtoCart(item)}>Add to cart</Button>
                                            }
                                        </Card.Body>
                                    </Card>))
                                }
                            </>:
                            <>No matches found</>
                        }
                    </div>
                
                    <div className='col-md-3'>
                        {cartItems.length>0?
                            <>
                                <DataTable columns={columns} data={data} customStyles={{rows: {style: {height: '70px'}}}}/>
                                Sub Total: {subTotal}<br/>
                                <Link to='/CheckOut'><Button variant='success'style={{marginTop: '10px'}}>Check out</Button></Link>
                                <Button variant='danger' style={{marginTop: '10px', marginLeft: '20px'}} onClick={handleEmptyCart}>Empty Cart</Button>
                            </>:
                        <div>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSxIjQRwQTD9jT4XF_SxZt57wmz-_vMEg31w&usqp=CAU' alt='empty cart'/>
                            <p>Cart is empty</p>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}
