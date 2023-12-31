import React, { useContext, useState } from 'react'
import DrawerAppBar from '../components/AppBar'
import Footer from '../components/Footer';
import CartContext from '../context/Cart';
import axios from 'axios'
import {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBBtn
} from 'mdb-react-ui-kit';


const Checkout = () => {

    const [name, setName] = useState('')
    const [lname, setlName] = useState('')
    const [cName, setCname] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [info, setInfo] = useState('')
    const { cart } = useContext(CartContext)
    // const checkOutOrder = axios("")
    const PlaceOrder = (e) => {
        e.preventDefault()
        const userInfo = {
            name,
            lname,
            cName,
            address,
            email,
            phone,
            info
        }
        console.log("userInfo==>", userInfo, "Cart", cart);

        axios.post('http://localhost:8000/order', {
            userInfo,
            cart
        }).then((res) => console.log(res)).catch((error) => console.log(error));

    }

    return (
        <div>
            <DrawerAppBar />


            <div className="container form-container p-5">
                <h2 className='d-flex justify-content-center align-items-center mb-5'>CheckOut Form</h2>
                <div className="col d-flex justify-content-center align-items-center">
                    <div className="row">
                        <form className='form-container-checkout p-3 w-100' onSubmit={PlaceOrder}>
                            <MDBRow className='mb-4'>
                                <MDBCol>
                                    <MDBInput id='form6Example1' label='First name' onChange={(e) => setName(e.target.value)} />
                                </MDBCol>
                                <MDBCol>
                                    <MDBInput id='form6Example2' label='Last name' onChange={(e) => setlName(e.target.value)} />
                                </MDBCol>
                            </MDBRow>

                            <MDBInput className='w-75' wrapperClass='mb-4' id='form6Example3' label='Company name' onChange={(e) => setCname(e.target.value)} />
                            <MDBInput className='w-75' wrapperClass='mb-4' id='form6Example4' label='Address' onChange={(e) => setAddress(e.target.value)} />
                            <MDBInput className='w-75' wrapperClass='mb-4' type='email' id='form6Example5' label='Email' onChange={(e) => setEmail(e.target.value)} />
                            <MDBInput className='w-75' wrapperClass='mb-4' type='tel' id='form6Example6' label='Phone' onChange={(e) => setPhone(e.target.value)} />

                            <MDBInput wrapperClass='mb-4' textarea id='form6Example7' rows={4} label='Additional information' onChange={(e) => setInfo(e.target.value)} />

                            <MDBBtn className='mb-4' type='submit' block>
                                Place order
                            </MDBBtn>
                        </form>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Checkout;