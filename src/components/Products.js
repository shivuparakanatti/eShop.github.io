import React,{useState,useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Products =()=>{

    const [products,setProducts] = useState([])


    

         axios.get('https://fakestoreapi.com/products')
         .then(res=>{
            //console.log(res.data)
            setProducts(res.data)
         })
         .catch(err=>{
            console.log(err)
         })

    

    return (
        <ol>{
            products.map(ele=>{
                return (<li><Link to={`/products/${ele.id}`}>{ele.title}</Link></li>
                    
                )
            })
            }

            
        </ol>
    )
}

export default Products