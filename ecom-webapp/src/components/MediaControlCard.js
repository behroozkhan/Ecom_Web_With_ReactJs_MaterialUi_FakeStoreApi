import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Rating } from '@mui/material';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';



export default function MediaControlCard({detail}) {
  const {image,description,title,price,rating,category} = detail;
  console.log("details17",detail);
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' }}>
        <CardMedia
        component="img"
        sx={{ width: 200, objectFit:'contain',margin:"0.500em"}}
        image={image}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          {description}
          </Typography>
          <Typography  style={{marginTop:'10px'}}  variant="h5" color="text.secondary" component="div">
           ${price}
          </Typography>
          <Typography style={{marginTop:'5px'}} className='category-badge' variant="subtitle1" color="text.secondary" component="div">
          <Chip label={category} className='category-badge-label'/>
          </Typography>
          <Typography style={{marginTop:'10px'}} variant="body2" color="text.secondary">
        <Rating name="controlled-rating" value={rating.rate} precision={0.5}  />
        </Typography>
        <CardActions >
        <Button size="small" className='btn-modal-car' style={{backgroundColor:"#03a9f4",padding:'10px 30px',color:'#fff',fontWeight:'bold',}}>Add Cart</Button>
      </CardActions>
        </CardContent>
  
      </Box>
      
    </Card>
  );
}