import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';

import './style.css'



export default function AllProducts({ products,viewDetails }) {
  console.log("products", products);
  const { title, image, description, rating, price } = products;
  const addToCart = ()=>{
    console.log("i am add to cart");
  }
  return (
    <div className="products-container mt-5">


      <Card style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} sx={{ maxWidth: 400 }}>
        <CardMedia className='img-fluid p-2' style={{ objectFit: 'contain', marginTop: '10px' }}
          component="img"
          alt="green iguana"
          height="140"
          image={image}
        />
        <CardContent className='cardcontent'>
          <Typography gutterBottom variant="h5" component="div">
            {title.slice(0, 20)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description.slice(0, 60)}...
          </Typography>
          <Typography variant="h6" color="text.secondary">
            ${price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Rating name="controlled-rating" value={rating.rate} precision={0.5} />
          </Typography>
        </CardContent>
        <CardActions>
          <Button className='btn-addcart' size="small" onClick={addToCart}>Add Cart</Button>
          <Button  className='btn-viewdetails' size="small" onClick={()=>viewDetails(products.id)} >View Details</Button>
        </CardActions>
      </Card>
    </div>
  );
}