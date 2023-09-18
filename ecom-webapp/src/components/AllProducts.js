import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';




export default function AllProducts({products}) {
console.log("products",products);
    const {title,image,description,rating,price} = products;

  return (
    <div className="products-container mt-5">
         

        <Card style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}  sx={{ maxWidth: 400 }}>
    <CardMedia className='img-fluid p-2' style={{objectFit:'contain',marginTop:'10px'}}
      component="img"
      alt="green iguana"
      height="140"
      image={image}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
       {title.slice(0, 20)}
      </Typography>
      <Typography variant="body2" color="text.secondary">
       {description.slice(0, 60)}...
      </Typography>
      <Typography variant="h6" color="text.secondary">
       {price}
      </Typography>
      <Typography variant="h2" color="text.secondary">
       {/* {description} */}
      </Typography>
    </CardContent>
    <CardActions>
      <Button className='btn' size="small">Add Cart</Button>
      <Button className='btn' size="small">View Details</Button>
    </CardActions>
  </Card>
    </div>
  );
}