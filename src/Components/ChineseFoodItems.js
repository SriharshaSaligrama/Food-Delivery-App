import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import DataTable from 'react-data-table-component';
import { addCartItem, decrementQuantity, emptyCart, incrementQuantity, removeCartItem } from '../Redux/Actions/CartActions';
import { Link } from 'react-router-dom';

export const ChineseFoodItems = props => {
    const {foodItems}=useSelector(state=>state)
    const {cartItems}=useSelector(state=>state)
    const ChineseFood=foodItems.filter(item=>item.Chinese===true)
    const subTotalArray=cartItems.map(item=>item.price)
    const subTotal=subTotalArray.length>0?subTotalArray.reduce((a,b)=>a+b):0

    const [searchedItems, setSearchedItems]=useState([])
    const [searchText, setSearchText]=useState('')
    const [vegChecked, setVegChecked]=useState(false)
    const [vegItems, setVegItems]=useState([])
    const FoodArray=vegChecked?vegItems.map(item=>[item.name, item.price, item.img]):ChineseFood.map(item=>[item.name, item.price, item.img])
    const dispatch=useDispatch()

    const handleChange= e => {
        e.preventDefault()
        setSearchText(e.target.value)
        const searchedFoodItems=FoodArray.filter(food=>food[0].includes(e.target.value.toLowerCase()))
        setSearchedItems(searchedFoodItems)
    }
    
    const handleCheck= e=>{
        setVegChecked(!vegChecked)
        const ChineseVegFood=ChineseFood.filter(item=>item.isVeg)
        setVegItems(ChineseVegFood)
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
                    <Button onClick={()=>decrement(row)}>-</Button>
                    {row.quantity}
                    <Button onClick={()=>increment(row)}>+</Button>
                </>
            ),
            
        },
    ];

    const data=cartItems

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Chinese ({searchedItems.length}/{FoodArray.length})</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/Indian">Indian</Nav.Link>
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
                    <div className='col-md-8'>
                        {searchedItems.length>0?
                            <>{searchedItems.map(item=>(
                                <Card style={{ width: '25rem', display: 'inline-block', margin: '10px'}} key={item}>
                                    <Card.Img variant="top" src={item[2]} height='180px'/>
                                    <Card.Body>
                                        <Card.Title>{item[0]}</Card.Title>
                                        <Card.Text>₹{item[1]}/-</Card.Text>
                                        <Button variant="primary" onClick={()=>AddtoCart(item)}>Add to cart</Button>
                                    </Card.Body>
                                </Card>))}
                            </>:
                            // <>No matches found</>
                            <>{vegChecked?<>{vegItems.map(item=>(
                                <Card style={{ width: '25rem', display: 'inline-block', margin: '10px'}} key={item.name}>
                                    <Card.Img variant="top" src={item.img} height='180px'/>
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text>₹{item.price}/-</Card.Text>
                                        <Button variant="primary" onClick={()=>AddtoCart(item)}>Add to cart</Button>
                                    </Card.Body>
                                </Card>))}</>:ChineseFood.map(item=>(
                                <Card style={{ width: '25rem', display: 'inline-block', margin: '10px'}} key={item.name}>
                                    <Card.Img variant="top" src={item.img} height='180px'/>
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text>₹{item.price}/-</Card.Text>
                                        <Button variant="primary" onClick={()=>AddtoCart(item)}>Add to cart</Button>
                                    </Card.Body>
                                </Card>
                            ))}</>
                        }
                    </div>

                    <div className='col-md-4'>
                        {cartItems.length>0?
                            <>
                                <DataTable columns={columns} data={data} customStyles={{rows: {style: {height: '70px'}}}}/>
                                SubTotal: {subTotal}<br/>
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
