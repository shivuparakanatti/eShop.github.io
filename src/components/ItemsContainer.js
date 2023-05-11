import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import { addToCart } from "../actions/userAction";
import { useDispatch } from "react-redux";
import {useCart} from 'react-use-cart'

const ItemContainer = () => {

  const { addItem } = useCart();

  const dispatch =useDispatch()
  const [Items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        //console.log(res.data)
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDetails = (id) => {
   // console.log(id);
   
    
  };

  const handleAddCart = (ele,q) => {
    
    //dispatch(addToCart(id))
    addItem(ele,1)
  };

  return (
    <div>
      <h1>Collections</h1>
      <div className="itemContaner">
        {Items.map((ele) => {
          return (
            <div className="card" style={{ width: "18rem", height: "30rem" }}>
              <img
                src={ele.image}
                className="card-img-top"
                alt="..."
                style={{ height: "60%" }}
              />
              <div className="card-body">
                <h5 className="card-title">{ele.title}</h5>
                <p className="card-text" style={{ height: "10px" }}>
                  {ele.catagory}
                </p>
                <Link to={`/${ele.id}`}>
                  <a
                    className="btn btn-primary"
                    onClick={() => {
                      handleDetails(ele.id);
                      
                    }}
                  >
                    Details
                  </a>
                </Link>

                <IconButton color="primary" aria-label="add to shopping cart">
                  <AddShoppingCartIcon
                    onClick={() => {
                      handleAddCart(ele);
                    }}
                  />
                </IconButton>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemContainer;
