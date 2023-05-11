import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const ItemDetails = (props) => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

 
    axios.get("https:fakestoreapi.com/products").then((res) => {
    const singleItem = res.data.filter((ele) => {
      return ele.id == id;
    });
    setItems(singleItem);
  });


  return (

    <div className="itemDetails">
      <Card sx={{ maxWidth: 445 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          
          image={ items.map(ele=>{
            return  (`${ele.image}`)
          })}
          alt="green iguana"
        />
        <CardContent>
          
                
                 <Typography gutterBottom variant="h5" component="div">
                 { items.map(ele=>{
            return  (`${ele.title}`)
          })}
           </Typography>
           <Typography variant="body2" color="text.secondary">
           { items.map(ele=>{
            return  (`${ele.description}`)
          })}
           </Typography>
                
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <h3>PRICE : { items.map(ele=>{
            return  (`${ele.price}$`)
          })}</h3>
        
      </CardActions>
    </Card>


    </div>
    
  );
};

export default ItemDetails;
