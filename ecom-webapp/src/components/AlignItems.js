import React, { useContext } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import CartContext from '../context/Cart';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { Link, } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export default function AlignItemsList({ cartData }) {
  const { setCart } = useContext(CartContext)
//----------------------------  Add and minus Selected Cart Quantity  ----------------------------------//
  const updateQty = (type, id) => {
    console.log(type, id);
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    const index = cartData.findIndex(v => v.id === id);
    if (type === '+') {
      cartData.splice(index, 1, { ...cartData[index], qty: cartData[index].qty + 1 })
    } else {
      cartData.splice(index,1, {...cartData[index], qty: cartData[index].qty - 1})
    }
    localStorage.setItem('cart',JSON.stringify(cartData));
    setCart(cartData)
    console.log(cartData, index);
  }

//----------------------------  Delete Selected Items   ----------------------------------//
  const deleteCartItem = (id)=>{
      const cartData = JSON.parse(localStorage.getItem('cart')) || [];
      const index = cartData.findIndex(v => v.id === id);
      cartData.splice(index,1)
      localStorage.setItem('cart',JSON.stringify(cartData));
      setCart(cartData)
  }

  return (
    <List className='' sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' }}>
      {cartData.map((value, index) => {
        return <div key={index} className="map-container-alignitems">
          <ListItem className='p-3' alignItems="flex-start">
            <ListItemAvatar>
              <img alt="Remy Sharp" className='' src={value.image} style={{ width: '80px' }} />
            </ListItemAvatar>
            <ListItemText className='ms-3'
              primary={value.title}
              secondary={
                <React.Fragment>
                  <Typography className=''
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    ${value.price * value.qty}
                  </Typography>
                  <Typography>
                    QTY:
                    <RemoveCircleIcon onClick={() => value.qty > 1 && updateQty("-", value.id)} className='icons-cursor ms-1' color='primary' />
                    <span className="ms-2">{value.qty}</span>
                    <AddCircleIcon onClick={() => updateQty("+", value.id)} className='icons-cursor ms-1' color='primary' />
                    <DeleteIcon onClick={()=> deleteCartItem(value.id)} className='icons-cursor ms-1' color='secondary' />
                  </Typography>
                </React.Fragment>
              }
            />

          </ListItem>
        </div>
      })}
      {cartData.length ?
        <div >
          <Link to={'./checkout'} className="button d-flex justify-content-center align-items-center ">
            <Button className='btn  button-under shadow-sm p-3 mb-5 bg-primary rounded w-75 mt-3 p-3 text-uppercase font-weight-bold text-white border border-primary-subtle btn-primary' size="small">Check Out</Button>
          </Link>
        </div>
        :
        <div className='p-2 m-1'>
          <Alert className='w-100' variant="filled" severity="error">
            Your Cart Is Empty —  PLease Select Cart First!
          </Alert>
        </div>
      }
    </List>

  );
}