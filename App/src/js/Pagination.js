import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationBox = ({ page, handleChangePage, quantity_page }) => {

  
  return (
    <Stack spacing={2}>
      <Pagination 
        count={quantity_page} 
        page={page} 
        variant="outlined" 
        shape="rounded" 
        onChange={handleChangePage}/>
    </Stack>
  );
}

export default PaginationBox