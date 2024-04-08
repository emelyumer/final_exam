import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import Message from '../components/Message';
import axios from "axios";

function CartScreen({ location, }) {
    const [cartItems, setCartItems] = useState([]);
    const { id } = useParams();
    // const productId = id;
    const navigate = useNavigate();
    const qty = location && location.search ? Number(location.search.split('=')[1]) : 1;



    useEffect(() => {
        if (id) {
            // Fetch product details from API and add to cart
            const fetchData = async () => {
                try {
                    const { data } = await axios.get(`/api/products/${id}`);
                    setCartItems(prevCartItems => [...prevCartItems, { ...data, qty }]);
                } catch (error) {
                    // Handle error
                }
            };
            fetchData();
        }
    }, [id, qty]);

    const removeFromCartHandler = (id) => {
        setCartItems(prevCartItems => prevCartItems.filter(item => item.product !== id));
    };

    const checkoutHandler = () => {
        navigate('/login?redirect=shipping');
    };

    return (
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <Message variant='info'>
                        Your cart is empty <Link to='/'>Go Back</Link>
                    </Message>
                ) : (
                    <ListGroup variant='flush'>
                        {cartItems.map(item => (
                            <ListGroup.Item key={item.product}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={item.image} alt={item.name} fluid rounded />
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    </Col>
                                    <Col md={2}>
                                        ${item.price}
                                    </Col>
                                    <Col md={3}>
                                        <Form.Control
                                            as="select"
                                            value={item.qty}
                                            onChange={(e) => {
                                                const newQty = Number(e.target.value);
                                                setCartItems(prevCartItems =>
                                                    prevCartItems.map(cartItem =>
                                                        cartItem.product === item.product ? { ...cartItem, qty: newQty } : cartItem
                                                    )
                                                );
                                            }}
                                        >
                                            {[...Array(item.countInStock).keys()].map((x) => (
                                                <option key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                </option>
                                            ))}
                                        </Form.Control>
                                    </Col>
                                    <Col md={1}>
                                        <Button
                                            type='button'
                                            variant='light'
                                            onClick={() => removeFromCartHandler(item.product)}
                                        >
                                            <i className='fas fa-trash'></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Col>

            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2>
                            ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
                        </ListGroup.Item>
                    </ListGroup>

                    <ListGroup.Item>
                        <Button
                            type='button'
                            className='btn-block'
                            disabled={cartItems.length === 0}
                            onClick={checkoutHandler}
                        >
                            Proceed To Checkout
                        </Button>
                    </ListGroup.Item>
                </Card>
            </Col>
        </Row>
    );
}

export default CartScreen;
