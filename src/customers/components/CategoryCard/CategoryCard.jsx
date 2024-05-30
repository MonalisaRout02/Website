import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function CategoryCard() {
  return (
    <Card sx={{ maxWidth:170}}  className='border-1'>
      <CardMedia
        component="img"
        alt="category"
        height="140"
        image="/Images/Products/2.jpg"
      />
      <div className='flex border-t-2'>
      <CardContent className='flex-grow'sx={{  py: 0}}>
        <p className='py-1 '> Earrings</p>
      </CardContent>
      <CardActions  >
        <Button size="small" sx={{ 
            fontSize: '0.65rem', // Adjust the font size
            minWidth: 'auto',    // Remove the minimum width
            color:"black",
            textTransform: 'none',
            py: 0,
            
          }}><ArrowForwardIosIcon className='mx-1'sx={{ fontSize: '0.7rem', color: 'black' ,py: 0}}/></Button>
      </CardActions>
      </div>
    </Card>
  );
}

export default CategoryCard;


