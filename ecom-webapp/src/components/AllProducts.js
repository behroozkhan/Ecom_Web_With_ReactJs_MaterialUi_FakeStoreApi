import  React,{useContext, useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import CartContext from '../context/Cart';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import './style.css'


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AllProducts({ products,viewDetails }) {
  const {setCart} = useContext(CartContext);
  const [open,setOpen] = useState(false)
  console.log("products", products);
  const { title, image, description, rating, price } = products;
;
 
 
  const addToCart = ()=>{
    console.log("i am add to cart");
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    const index  = cartData.findIndex(v => v.id === products.id)
    if(index !== -1){
      cartData.splice(index,1,{...cartData[index], qty: cartData[index].qty + 1})
    }else{
      cartData.push({...products, qty:1})
     
    }
    localStorage.setItem('cart',JSON.stringify(cartData))
    setCart(cartData);
    setOpen(true)
  }
  return (
    <div className="products-container mt-5">


      <Card style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} sx={{ maxWidth: 400 }}>
        <CardMedia className='object-fit-contain mt-2 ' 
          component="img" 
          alt="green iguana"
          height="140"
          image={image} 
        />
        <Snackbar open={open} anchorOrigin={{horizontal:'right',vertical:'bottom'}} autoHideDuration={6000} onClose={() => setOpen(false)}>
                    <Alert  onClose={() => setOpen(false)} severity="success" sx={{ width: '100%' }}>
                        Product Added Your Cart!
                    </Alert>
                </Snackbar>
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