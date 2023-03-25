import React, { useEffect, useState } from 'react';
import './widget.scss';
import axios from 'axios';



const WidgetStock = () => {

   //total products
   const [productCount, setProductCount] = useState("");

   useEffect(() => {
      const getCount = async () => {
         try {
            const res = await axios.get("/products/productcount");
            setProductCount(res.data);
         } catch { }
      };
      getCount();
   })


   return (
      <div className='widget'>
         <div className='top'>
            <span className='title'>STOCK BALANCE</span>
         </div>
         <div className='bottom2'>
            <span className='counter3'>{productCount}</span>
            <span className='desc'>Total Products in Stock</span>

         </div>
      </div>
   )
}

export default WidgetStock