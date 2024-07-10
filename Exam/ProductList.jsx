import React from "react";
import { productData } from "./ProductData";

const ProductList = () => {
  return (
    <div> <h1 className="mt-2 text-center">Product List</h1>
    <hr />
        <h3>Perfumes</h3>
      <div className="d-flex mx-5 justify-content-start flex-wrap ">
        {
            productData.map((item)=>{
                return <>
                <div  className="card mx-3  p-2">
                    <img className="object-fit-cover" src={item.Image} alt="" />
                    <h5> {item.name}</h5>
                  
                    <p className="text-success"> ₹{item.price}</p>
             

                    <p>{item.des}</p>

                </div>
                </>
            })
        }
       


     
      </div>
    </div>
  );
};

export default ProductList;
