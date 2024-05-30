import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import './Product.css'

function ProductFunc({user,products}) {
    //Create state
    // const [products, setProducts] = useState([null])

   

  return (
    
    <div>
        <div className='ProductUser'>
          <div>
            <h3>Product</h3>
            <ol>
              {/* {products.map((products) => {
                return (
                  <>
                  <div key={products._id}>{products.name}</div>
                  </>
            
                )
              })}
           
              </ol> */
           
          
          

        </div>


        <div className='ProductUser'>dhd</div>
        <div className='ProductUser'>dhd</div>

    </div>
  )
}

export default ProductFunc