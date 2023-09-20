import * as React from 'react';
import Box from '@mui/material/Box';
import { Drawer } from '@mui/material';
import AlignItemsList from './AlignItems';
// import AlignItemsList from './AlignItemsLists';

export default function TemporaryDrawer({open,setOpen,cartData}) {
  return (
    <div>
        <React.Fragment>
          <Drawer anchor='right'
            open={open}
            onClose={()=>setOpen(false)}>
            <Box role='presentation'>
                <AlignItemsList  cartData={cartData}/>
            </Box>
          </Drawer>
        </React.Fragment>
    </div>
  );
}
