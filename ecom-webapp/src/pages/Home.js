import React, { useEffect, useState } from 'react'
import DrawerAppBar from '../components/AppBar'
import MainSlider from '../components/MainSlider'
import AllProducts from '../components/AllProducts'
import axios from 'axios';
import './style.css'
import Footer from '../components/Footer';
import BasicModal from '../components/BasicModal';
import { useSearchParams } from "react-router-dom";


const Home = () => {
  const [products, setProducts] = useState([])
  const [open, setOpen] = useState(false)
  const [detail, setDetail] = useState({})
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    axios('https://fakestoreapi.com/products')
      .then((res) => setProducts(res.data))
      .catch((error) => console.log("error", error))
  }, [])


  useEffect(() => {
    const category = searchParams.get("category")
    if (category && category !== 'all') {
      axios(`https://fakestoreapi.com/products/category/${category}`)
        .then((res) => setProducts(res.data))
        .catch((error) => console.log("error", error))
       
    }
  }, [searchParams])

  const viewDetails = (id) => {
    console.log(id);
    axios(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setDetail(res.data)
        setOpen(true)
      }
      )
      .catch((error) => console.log("error", error))

  }

  return (
    <div>
      <DrawerAppBar />
      <MainSlider />
      <BasicModal handleClose={() => setOpen(false)} detail={detail} open={open} />
      <div className="all-products-container">
        <div className="heading">
          <h2 className='heading-all-products'>All Latest Products</h2>
        </div>
        {products.map((value, index) => {
          return <AllProducts viewDetails={viewDetails} products={value} key={index} />
        })}
      </div>

      <Footer />
    </div>
  )
}

export default Home