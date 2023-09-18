import React, { useEffect, useState } from 'react'
import DrawerAppBar from '../components/AppBar'
import MainSlider from '../components/MainSlider'
import AllProducts from '../components/AllProducts'
import axios from 'axios';
import './style.css'
const Home = () => {
  const [products,setProducts] = useState([])
  
  useEffect(()=>{
      axios('https://fakestoreapi.com/products')
      .then((res)=>
      setProducts(res.data)
      )
      .catch((error) => console.log("error",error))
  },[])
  
  return (
    <div>
      <DrawerAppBar/>
      <MainSlider/>
      <div className="all-products-container">
        <div className="heading">
        <h2 className='heading-all-products'>All Latest Products</h2>  
        </div>
        {products.map((value,index)=>{
          return <AllProducts products={value} key={index} />
        })}
        
      </div>

    </div>
  )
}

export default Home